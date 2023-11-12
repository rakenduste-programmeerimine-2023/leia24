const getClassifieds = async () => {
    const res = await fetch('https://www.okidoki.ee/buy/1601/?sort=2')
    const html = await res.text()

    console.log("html", html)
    return ''
}

export default getClassifieds