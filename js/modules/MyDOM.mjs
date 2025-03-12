/** MYDOM
 *  @description: Global mofications to the DOM
*/
export default class MyDOM {
    constructor() {
        window.myHTML = document.querySelector("html")

        document.getElementById("mySelectTheme").addEventListener("click", this.mySwitchTheme, false)
        document.querySelector(".btn-picturama-check-clock").addEventListener('change', () => this.myToggleBloc("#myClock"), false)
		document.querySelector(".btn-picturama-check-chrono").addEventListener('change', () => this.myToggleBloc("#myChrono"), false)
		document.querySelector(".btn-picturama-check-message").addEventListener('change', () => this.myToggleBloc("#myMessage"), false)
		document.querySelector(".btn-picturama-check-infos").addEventListener('change', () => this.myToggleBloc("#myInfos"), false)
		document.querySelector(".btn-picturama-check-cam").addEventListener('change', () => this.myToggleBloc("#myCam"), false)
		document.querySelector(".btn-picturama-check-pub").addEventListener('change', () => this.myToggleBloc("#myPub"), false)
		document.querySelector(".btn-picturama-check-miniatures").addEventListener('change', () => this.myToggleBloc(".myMiniatures"), false)

        this.footerYear()

    }


    mySwitchTheme() {
        if (window.myHTML.getAttribute('data-bs-theme') === 'dark')
            window.myHTML.setAttribute('data-bs-theme', 'light')
        else
            window.myHTML.setAttribute('data-bs-theme', 'dark')

    }


    myToggleBloc(myClass) {document.querySelector(myClass).classList.toggle('d-none')}


    footerYear() {document.getElementById("footer-year").innerHTML = new Date().getFullYear()}
}