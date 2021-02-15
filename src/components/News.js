import {
  Card,
  CardContent,
  Divider,
  List,
  Typography,
} from "@material-ui/core";
import React from "react";
import NewsBox from "./NewsBox";

function News({ country, caseType, countryName, language }) {
  const [newsList, setnewsList] = React.useState([]);
  React.useEffect(() => {
    getNews();
  }, [country, caseType]);

  const getNews = async () => {
    await fetch(
      `https://asia-south1-exams-projects.cloudfunctions.net/api/custom-apis/news?country=${country}&language=${
        language ? language : "en"
      }`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setnewsList(data);
      })
      .catch((err) => {
        return <p>No data found</p>;
      });
  };

  /*  const getNews = async (isRetrying = false) => {
    let url = `https://newsapi.org/v2/top-headlines?language=${
      language ? language : "en"
    }${
      country === "worldwide" || isRetrying ? "" : `&country=${country}`
    }&q=covid&apiKey=ec112318dada4c66a9a8ddc5ab5435b8`;

    await fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.totalResults > 0) setnewsList(data.articles);
        else {
          if (!isRetrying) getNews(true);
        }
      })
      .catch((err) => {
        return <p>No data found</p>;
      });
  };*/
  return (
    <div>
      {newsList.length > 0 && (
        <Card>
          <CardContent>
            <Typography variant="h6">
              Latest covid news{" "}
              {country === "worldwide" ? "worldwide" : "in " + countryName}
            </Typography>
          </CardContent>
          <Divider />
          <List>
            {newsList.map((news, index) => (
              <React.Fragment key={index}>
                <NewsBox key={index} news={news} />
                {index !== newsList.length - 1 && (
                  <Divider style={{ marginLeft: -16, marginRight: -16 }} />
                )}
              </React.Fragment>
            ))}
          </List>
        </Card>
      )}
    </div>
  );
}

export default News;
