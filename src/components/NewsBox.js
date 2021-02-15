import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@material-ui/core";
import React, { Component, Fragment } from "react";
import withStyle from "@material-ui/core/styles/withStyles";
const styles = (theme) => ({
  image: {
    width: 100,
    borderRadius: "10%",
    height: 60,
  },
  item: {
    marginTop: 10,
    marginBottom: 10,
  },
  horizontalDivider: {
    borderColor: "#eff1f3",
    marginLeft: -17,
    marginRight: -17,
    width: "183%",
    marginTop: -1,
    borderTop: "0px solid #eff1f3",
  },
});
class NewsBox extends Component {
  handleClick = () => {
    const url = this.props.news.url;
    if (this === "self") window.location.href = `/${url}`;
    else window.open(url, "_blank");
  };
  render() {
    const {
      classes,
      news: { title, urlToImage, type, source },
    } = this.props;
    const newsMarkup =
      type !== "self" ? (
        <Fragment>
          <img className={classes.image} src={urlToImage} alt={source.name} />
        </Fragment>
      ) : null;
    return (
      <ListItem onClick={this.handleClick} button>
        {this.props.width === "xs" && newsMarkup}
        <ListItemText>
          <Typography
            style={{
              paddingLeft: this.props.width === "xs" ? 13 : 5,
              paddingRight: 5,
            }}
            variant="body2"
          >
            {title}
          </Typography>
        </ListItemText>
        <ListItemAvatar>
          {this.props.width !== "xs" && newsMarkup}
        </ListItemAvatar>
      </ListItem>
    );
  }
}

export default withStyle(styles)(NewsBox);
