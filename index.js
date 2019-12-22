import express from "express";
import { getInstagramCount, getTwitterCount } from "./lib/scraper";
import db from "./lib/db";

const app = express();

app.get("/scrape", async (req, res, next) => {
  console.log("Scraping!");
  const [iCount, tCount] = await Promise.all([
    getInstagramCount(),
    getTwitterCount()
  ]).catch(err => console.log(err));
  console.log(iCount, tCount);
  // console.log(twitter, instagram);
  db.get("twitter")
    .push({
      date: Date.now(),
      count: tCount
    })
    .write();
  db.get("instagram")
    .push({
      date: Date.now(),
      count: iCount
    })
    .write();

  res.json({ iCount, tCount });
});

app.listen(9672, () => {
  console.log(`Example App is running on port 9672`);
});
