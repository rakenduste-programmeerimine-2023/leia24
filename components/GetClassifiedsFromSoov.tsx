import { JSDOM } from 'jsdom'

const GetClassifiedsFromSoov = async () => {
    const res = await fetch('https://soov.ee/577-autod/order-date_added/order_way-desc/listings.html')
    const html = await res.text()

    const dom = new JSDOM(html)
    const document = dom.window.document

    const links = document.querySelectorAll('.add-title')

    console.log({ links })
    
    const hrefs = Array.from(links).map(link => link.querySelector('a').getAttribute('href'))

    console.log({ hrefs })
    return hrefs
}





export default GetClassifiedsFromSoov
