/**	MYSTORAGE
 * @description: web storage gestion 
*/
export default class MyStorage {

	constructor () {
		const storageShuffle = localStorage.getItem('shuffle')?.toString()
		const storageDelay = localStorage.getItem('delay')?.toString()
		const storageBGColor = localStorage.getItem('bgColor')?.toString()
		const storageTheme = localStorage.getItem('theme')?.toString()

		if (storageShuffle) {
			window.myShuffle = true
			document.querySelector(".btn-picturama-shuffle").style.color = 'red'
		}

		if (storageTheme) {
			window.myHTML.setAttribute('data-bs-theme', storageTheme)
		}

		if (storageDelay) {
			window.myDelay = storageDelay
		}

		if (storageBGColor) {
			document.querySelector("body").classList.remove('bg-body')
			window.myBgColor = storageBGColor
			window.myBody.style.backgroundColor = window.myBgColor
		}

		
    }

}