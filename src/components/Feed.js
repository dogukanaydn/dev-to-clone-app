import React, { Fragment } from "react";
import FeedBar from "./FeedBar";
import Card from "./Card";

export default function Feed() {
  return (
    <Fragment>
      <FeedBar />
      <Card />
      <Card />
    </Fragment>
  );
}
