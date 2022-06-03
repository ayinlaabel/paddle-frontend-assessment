import React, { useState } from "react";
import "./Github.css";
const axios = require("axios").default;

const Github = () => {
  const [repo, setRepo] = useState([]);
  const now = new Date();
  const date = new Date(now.setDate(now.getDate() - 30));
  const backdate = `${date.getFullYear()}-${
    (date.getDate() < 10 ? "0" : "") + (date.getDate() + 1)
  }-${(date.getDay() < 10 ? "0" : "") + (date.getDay() + 1)}`;
  const URI = `https://api.github.com/search/repositories?q=created:>${backdate}&sort=stars&order=desc`;
  console.log(backdate);
  axios
    .get(URI)
    .then((data) => {
      setRepo(data.data.items);
      console.log(data.data.items);
    })
    .catch((err) => console.log(err));
  return (
    <>
      <div className="repo">
        {repo.map((data) => (
          <div className="repo__starred" key={data.id}>
            <div className="image">
              <img src={data.owner.avatar_url} alt="" />
            </div>
            <div className="content">
              <h2 className="repo__name">{data.name}</h2>
              <p className="repo__desc">{data.description}</p>
              <div className="feature">
                <div className="starred i">Stars: {data.stargazers_count}</div>
                <div className="issue i">Issue: {data.open_issues}</div>
                <div className="other i">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Github;
