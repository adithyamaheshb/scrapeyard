import { getHTML, getTwitterFollowers } from './lib/scraper';

async function go() {
    const html = await getHTML('https://twitter.com/adithyamaheshb');
    const twitterFollowers = await getTwitterFollowers(html);
    console.log(`You have ${twitterFollowers} followers`);
}

go();