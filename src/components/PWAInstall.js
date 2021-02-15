import { AppBar, makeStyles, Toolbar } from "@material-ui/core";
import React from "react";
import download from "../images/download.svg";
import close from "../images/close.svg";
const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    backgroundColor: "#ffffff",
    paddingLeft: 4,
    alignItems: "center",
  },
  content: {
    flexGrow: 1,
    cursor: "pointer",
    "& img": {
      width: 40,
      height: 36,
    },
  },
  image: {
    width: 20,
    padding: 14,
    cursor: "pointer",
  },

  appBar: {
    top: "auto",
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
}));
function PWAInstall() {
  const [open, setOpen] = React.useState(false);
  const [deferredPrompt, setDeferredPrompt] = React.useState(null);

  const classes = useStyles();
  //   let deferredPrompt;
  window.onload = () => {
    window.addEventListener("beforeinstallprompt", (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.

      // Update UI notify the user they can install the PWA
      // See if the app is already installed, in that case, do nothing
      if (
        (window.matchMedia &&
          window.matchMedia("(display-mode: standalone)").matches) ||
        window.navigator.standalone === true
      ) {
        console.log("Already install");
        return false;
      }
      //   deferredPrompt = e;
      setDeferredPrompt(e);
      setOpen(true);
    });
  };

  const installApp = (event) => {
    // Hide the app provided install promotion
    //   hideMyInstallPromotion();
    // Show the install prompt
    if (deferredPrompt) deferredPrompt.prompt();
    else {
      console.log("No eligible to install");
      return;
    }
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        setOpen(false);
      }
    });
  };
  const closeInstaller = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      {open && (
        <React.Fragment>
          <br />
          <br />
          <br />
          <br />
          <AppBar
            position="fixed"
            variant="elevation"
            color="transparent"
            className={classes.appBar}
          >
            <Toolbar className={classes.toolbar}>
              <div onClick={installApp} className={classes.content}>
                <div className={classes.toolbar}>
                  <img alt="download" src={download} />
                  <p>Install covid tracker</p>
                </div>
              </div>
              <img
                onClick={closeInstaller}
                alt="close"
                src={close}
                className={classes.image}
              />
            </Toolbar>
          </AppBar>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default PWAInstall;
