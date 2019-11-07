import { getHTML, getTwitterFollowers, getInstagramFollowersviaAPI, getInstagramFollowersviaCheerio } from './lib/scraper';
import { promises } from 'fs';

async function go() {
    // const htmlTwitter = await getHTML('https://twitter.com/adithyamaheshb');
    // const twitterFollowers = await getTwitterFollowers(htmlTwitter);
    // console.log(`You have ${twitterFollowers} twitter followers`);

    // const instagramFollowersviaAPI = await getInstagramFollowersviaAPI('adithyamaheshb');
    // console.log(`You have ${instagramFollowersviaAPI} instagram followers`);

    // const htmlInstagram = await getHTML('https://instagram.com/adithyamaheshb');
    // const instagramFollowersviaCheerio = await getInstagramFollowersviaCheerio(htmlInstagram);
    // console.log(`You have ${instagramFollowersviaCheerio} Instagram followers`);

    const twitterPromise = getHTML('https://twitter.com/adithyamaheshb');
    const instagramPromise = getHTML('https://instagram.com/adithyamaheshb');

    const [ twitterHTML, instagramHTML ] = await Promise.all([twitterPromise, instagramPromise]);

    const twitterCount = await getTwitterFollowers(twitterHTML);
    const instagramCount = await getInstagramFollowersviaCheerio(instagramHTML);

    console.log(`You have ${twitterCount} followers on Twitter and ${instagramCount} followers on Instagram`);
}

go();