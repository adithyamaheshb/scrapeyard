import express from "express";
import {
  getInstagramCount,
  getTwitterCount
} from "./lib/scraper";
import db from "./lib/db";
import "./lib/cron";
const cors = require("cors");
import {
  uniqueCount
} from './lib/utils';

const app = express();

app.use(cors());

app.get("/scrape", async (req, res, next) => {
  console.log("Scraping!");
  const [iCount, tCount] = await Promise.all([
    getInstagramCount(),
    getTwitterCount()
  ]).catch(err => console.log(err));

  res.json({
    iCount,
    tCount
  });
});

app.get("/data", async (req, res, next) => {
  // get the scrape data
  const {
    twitter,
    instagram
  } = db.value();
  // filter for only unique values
  const unqiueTwitter = uniqueCount(twitter);
  const uniqueInstagram = uniqueCount(instagram);
  // respond with json
  res.json({
    twitter: unqiueTwitter,
    instagram: uniqueInstagram
  });
});

app.listen(9672, () => {
  console.log(`Example App is running on port http://localhost:9672`);
});