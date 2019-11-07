import axios from 'axios';
import cheerio from 'cheerio';

async function getHTML(url) {
    const { data: html } = await axios.get(url)
    return html
}

async function getTwitterFollowers(html) {
    //load up cheerio
    const $ = cheerio.load(html);
    const span = $('[data-nav="followers"] .ProfileNav-value');
    return span.data('count');
}

//Instagram Followers via API call
async function getInstagramFollowersviaAPI(username = 'adithyamaheshb') {
    const { data } = await axios.get(`https://www.instagram.com/${username}/?__a=1`);
    const followers = data.graphql.user.edge_followed_by.count;
    return followers;
}

//Instagram Followers via Cheerio
async function getInstagramFollowersviaCheerio(html) {
    const $ = cheerio.load(html);
    const dataInString = $(`script[type="application/ld+json"]`).html();
    const pageObject = JSON.parse(dataInString);
    // console.log(pageObject.mainEntityofPage.interactionStatistic.userInteractionCount);

    const userCount = pageObject.mainEntityofPage.interactionStatistic.userInteractionCount;
    return userCount;
}


export { getHTML, getTwitterFollowers, getInstagramFollowersviaAPI, getInstagramFollowersviaCheerio };