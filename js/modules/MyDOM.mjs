/**
 *  MYDOM
 *  @description: Global mofications to the DOM
*/
export default class MyDOM {
    constructor() {
        window.myHTML = document.querySelector("html")
        document.getElementById("mySelectTheme").addEventListener("click", this.mySwitchTheme, false)
        // this.footerYear()
    }

    mySwitchTheme() {
        if (window.myHTML.getAttribute('data-bs-theme') === 'dark')
            window.myHTML.setAttribute('data-bs-theme', 'light')
        else
            window.myHTML.setAttribute('data-bs-theme', 'dark')
    }

    // footerYear() {document.getElementById("footer-year").innerHTML = new Date().getFullYear()}
}