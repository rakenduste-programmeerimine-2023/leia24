import { JSDOM } from "jsdom";

const search = "xbox";

const GetClassifiedsBySearchFromSoov = async () => {
  const res = await fetch(`https://soov.ee/keyword-${search}/listings.html`);
  const html = await res.text();

  const dom = new JSDOM(html);
  const document = dom.window.document;

  const links = document.querySelectorAll(".add-title");

  console.log({ links });

  const hrefs = Array.from(links).map((link) =>
    link.querySelector("a").getAttribute("href")
  );

  console.log({ hrefs });
  return hrefs;
};

export default GetClassifiedsBySearchFromSoov;
