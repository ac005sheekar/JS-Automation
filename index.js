const puppeteer = require('puppeteer')
async function start(){
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto("https://www.bracu.ac.bd/academics/departments/computer-science-and-engineering/faculty")
    //await page.goto("https://bup.edu.bd/teachers/all?faculty=faculty-of-science-and-technology-fst", {waitUntil:'domcontentloaded'})
    await page.screenshot({path: "brac_faculty.jpg", fullPage: true})
    await browser.close()
}

start()
