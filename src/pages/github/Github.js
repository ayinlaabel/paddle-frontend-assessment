import React from "react";
const axios = require("axios").default;

const Github = () => {
  const now = new Date();
  const date = new Date(now.setDate(now.getDate() - 30));
  const backdate = `${date.getFullYear()}-${
    (date.getDate() < 10 ? "0" : "") + (date.getDate() + 1)
  }-${(date.getDay() < 10 ? "0" : "") + (date.getDay() + 1)}`;
  const URI = `https://api.github.com/search/repositories?q=created:>${backdate}&sort=stars&order=desc`;
  console.log(backdate);
  axios.get(URI).then((data) => {
    console.log(data);
  });
  return <></>;
};

export default Github;
