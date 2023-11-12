import { JSDOM } from 'jsdom'

const GetClassifiedsFromOkidoki = async () => {
    const res = await fetch('https://www.okidoki.ee/buy/1601/?sort=2');
    const html = await res.text();

    const dom = new JSDOM(html);
    const document = dom.window.document;

    const links = document.querySelectorAll('.horiz-offer-card__title-link');

    const hrefs = Array.from(links).map(link => {
        const relativeHref = link.getAttribute('href');
        return `https://www.okidoki.ee${relativeHref}`;
    });

    console.log({ hrefs });
    return hrefs;
}


export default GetClassifiedsFromOkidoki
