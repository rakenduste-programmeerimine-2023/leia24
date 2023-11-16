import { JSDOM } from "jsdom";
import { Input } from "postcss";

let hrefs2 = ["Saab", "Volvo"];
const search = "xbox"

const GetClassifiedsBySearchFromOkidoki = async () => {
  const res = await fetch(
    `https://www.okidoki.ee/buy/all/?query=${search}&c=0`
  );
  const html = await res.text();

  const dom = new JSDOM(html);
  const document = dom.window.document;

  const links = document.querySelectorAll(".horiz-offer-card__title-link");

  const hrefs = Array.from(links).map((link) => {
    const relativeHref = link.getAttribute("href");
    const relativeTitle = link.getAttribute("title");
    return `https://www.okidoki.ee${relativeHref}; `;
  });


  console.log({ hrefs });

  return hrefs;
  
};
//

export default GetClassifiedsBySearchFromOkidoki;
