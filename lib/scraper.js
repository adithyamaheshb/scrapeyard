import axios from 'axios';
import cheerio from 'cheerio';

async function getHTML(url) {
    const { data: html } = await axios.get(url)
    return html
}

async function getTwitterFollowers(html) {
    //load up cheerio
    const $ = cheerio.load(html);
    const span = $('.ProfileNav-value');
    console.log(span);
}

export { getHTML, getTwitterFollowers };