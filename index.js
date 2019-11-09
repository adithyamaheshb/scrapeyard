import express from 'express';
import { getInstagramCount, getTwitterCount } from './lib/scraper';
import db from './lib/db';

const app = express();

console.log(db());

app.get('/scrape', async (req, res, next) => {
    console.log('Scraping!');
    const [iCount, tCount] = await Promise.all([ getInstagramCount(), getTwitterCount() ]);
    console.log(iCount, tCount);
    res.json({ iCount, tCount });
});

app.listen(9672, () => {
    console.log(`Example App is running on port 9672`);
})