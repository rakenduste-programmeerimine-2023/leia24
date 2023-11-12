import { JSDOM } from 'jsdom'

const GetClassified = async () => {
    const res = await fetch('https://www.okidoki.ee/buy/1601/?sort=2')
    const html = await res.text()

    const dom = new JSDOM(html)
    const document = dom.window.document

    const classified = document.querySelector('.horiz-offer-card__title-link')?.textContent

    console.log({classified})
    return classified 
}

export default GetClassified
/*


<div class="horiz-offer-card__price price">
              <span class="horiz-offer-card__price-value">
                  2 500
                   €
              </span>
          </div>

          */