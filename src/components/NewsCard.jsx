import React from "react";
import { Header, Card } from "semantic-ui-react";

const NewsCard = ({ article }) => {
  return (
    <Card
      data-cy="article-index"
      image={article.urlToImage}
      header={article.title}
      meta={`By: ${"article.author"} at ${article.source.name}`}
      description={article.description}
      extra={<Header as="h6">`Published at ${"publishedAt"}`</Header>}
    />
  );
};

export default NewsCard;
