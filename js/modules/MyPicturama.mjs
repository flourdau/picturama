/**	MYPICTURAMA
 * @description: 
*/
export default class MyPicturama {

	constructor() {
		/* Select elements */
		window.myBody = document.querySelector("body")
		window.myListing = document.getElementById("myListing")
		window.nextButton = document.querySelector('[data-slider-next]')
		window.prevButton = document.querySelector('[data-slider-prev]')
		window.wrapper = document.querySelector('[data-slider-wrapper]')
		this.colorPicker = document.querySelector(".btn-picturama-color input")


		/* Initialize globales */
		window.myList = new Array
		window.mySize = "cover"
		window.myPositionX = 0
		window.myPositionY = 0
		window.myDelay = 5
		window.mySetInterval = undefined
		window.myShuffle = false
		window.myCenterX = "center"
		window.myCenterY = "top"
		window.myBgColor = "var(--my-color2)"

		/* Create eventListeners */
		this.colorPicker.addEventListener("input", this.myUpDateColor, false)
		this.colorPicker.addEventListener("change", this.myUpDateColor, false)
		document.querySelector(".myMiniatures button").addEventListener("click", this.myCloseSlider, false)
		document.querySelector(".btn-picturama-dl input").addEventListener("change", this.myAddImg, false)
		document.querySelector(".btn-picturama-timer select").addEventListener("change", this.myDelay, false)
		document.querySelector(".btn-picturama-center-x select").addEventListener("change", this.myCenterX, false)
		document.querySelector(".btn-picturama-center-y select").addEventListener("change", this.myCenterY, false)
		document.querySelector(".btn-picturama-bg-size select").addEventListener("change", this.mySize, false)
		document.querySelector(".btn-picturama-shuffle").addEventListener("click", this.myShuffle, false)
		document.querySelector(".btn-picturama-reset").addEventListener("click", this.myReset, false)
		document.getElementById("myInputPlayPause").addEventListener("click", this.myPlay, false)
		document.getElementById("myInputFullScreen").addEventListener("click", this.myFullScreen, false)
		document.getElementById("myInputPause").addEventListener("click", this.myPause, false)
		document.getElementById("myInputLeft").addEventListener("click", this.myLeft, false)
		document.getElementById("myInputRight").addEventListener("click", this.myRight, false)
		window.nextButton.addEventListener('click', () => this.move(1))
		window.prevButton.addEventListener('click', () => this.move(-1))
		window.wrapper.addEventListener('scrollend', () => this.updateUI())

		/* Execute functions */
		this.colorPicker.select()
		MyPicturama.myFlashButton()
	}


	static myFlashButton() {
		setInterval(() => {document.querySelector(".btn-picturama-dl").classList.toggle('my-color3')}, 500)
	}


	static myChangeBg(path){
		const myBody = document.querySelector("body")

		myBody.style.background = window.myBgColor + " url('" + path + "')"
		myBody.style.backgroundSize = window.mySize
		myBody.style.backgroundAttachment = "fixed"
		myBody.style.backgroundRepeat = "no-repeat"
		myBody.style.backgroundPosition = `${window.myCenterX} ${window.myCenterY}`
		myBody.style.transition = "2s"
	}


	myDelay() {
		window.myDelay = document.querySelector(".btn-picturama-timer select").value
	}


	mySize() {
		if (window.myList.length > 0) {
			window.mySize = document.querySelector(".btn-picturama-bg-size select").value
			MyPicturama.myChangeBg(URL.createObjectURL(window.myList[window.myPositionY][window.myPositionX]))
		}
	}


	myCenterY() {
		window.myCenterY = document.querySelector(".btn-picturama-center-y select").value

		if (window.myList.length > 0)
			MyPicturama.myChangeBg(URL.createObjectURL(window.myList[window.myPositionY][window.myPositionX]))
	}


	myCenterX() {
		window.myCenterX = document.querySelector(".btn-picturama-center-x select").value

		if (window.myList.length > 0)
			MyPicturama.myChangeBg(URL.createObjectURL(window.myList[window.myPositionY][window.myPositionX]))
	}


	myUpDateColor(event) {
		document.querySelector(".myBarControl>ul>li:nth-child(3)").classList.remove('d-none')
		document.querySelector("body").classList.remove('bg-body')
		window.myBgColor = event.target.value
		window.myBody.style.backgroundColor = event.target.value
	}


	myAddImg(event) {
		document.querySelector(".myMiniatures").classList.remove('d-none')
		document.querySelector(".myMiniatures").classList.add('show')
		document.querySelector("#myPicturama>div>ul:nth-child(1)").classList.remove('d-none')
		document.querySelector("#myPicturama>div>div:nth-child(2)").classList.remove('d-none')
		document.querySelector(".my-nav-control>div:nth-child(1) ul>li:nth-child(2)").classList.remove('d-none')
		document.querySelector(".my-nav-control>div:nth-child(1) ul>li:nth-child(3)").classList.remove('d-none')
		document.querySelector(".my-nav-control>div:nth-child(1) ul>li:nth-child(4)").classList.remove('d-none')
		document.querySelector(".my-nav-control>div:nth-child(3)").classList.remove('d-none')
		document.querySelector(".myBarControl>ul>li:nth-child(2)").classList.remove('d-none')
		document.querySelector(".myBarControl>ul>li:last-child").classList.remove('d-none')
		document.querySelector(".btn-checks>li:last-child").classList.remove('d-none')
		document.querySelector(".btn-checks>li:last-child label").classList.remove('d-none')

		window.myListing.innerHTML = ''	// Reset DOM list
		window.myList.push(event.target.files) // Sav JS FilesList
		window.myPositionX= 0 // Reset Position
		window.myPositionY = 0
		
		for (let line = 0; line < window.myList.length; line++) {
			for (let column = 0; column < window.myList[line].length; column++) {
				const item = document.createElement("li"),
				reader = new FileReader,
				img = new Image

				item.classList.add('item')
				if (window.myList[line]) reader.readAsDataURL(window.myList[line][column])

				reader.addEventListener("load", () => {
					if (window.myList.length > 0 && window.myList[line].length > 0) {
						img.addEventListener("click", (e) => {
							window.myPositionY = line
							window.myPositionX = column 
							MyPicturama.myChangeBg(e.target.currentSrc)})
						img.src = URL.createObjectURL(window.myList[line][column])
						img.classList.add('rounded')
						img.classList.add('img-thumbnail')
						item.append(img)
					}
					if (column === 0 && line === 0) 
						MyPicturama.myChangeBg(URL.createObjectURL(window.myList[0][0]))
				}, false)
	
				window.myListing.appendChild(item)
	}}
	window.prevButton.setAttribute('hidden', 'hidden')
}


	myLeft() {
		if (window.myPositionX === 0)
			window.myPositionX = window.myList[window.myPositionY--].length - 1
		else
			window.myPositionX--
	
		if (window.myPositionY < 0)
			window.myPositionY = window.myList.length - 1
	
		MyPicturama.myChangeBg(URL.createObjectURL(window.myList[window.myPositionY][window.myPositionX]))
	}


	myRight() {
		if (window.myPositionX === window.myList[window.myPositionY].length - 1) {
			window.myPositionX = 0
			window.myPositionY++
		}
		else
			window.myPositionX++
	
		if (window.myPositionY > window.myList.length - 1)
			window.myPositionY = 0
	
		MyPicturama.myChangeBg(URL.createObjectURL(window.myList[window.myPositionY][window.myPositionX]))
	}


	myPause() {
		clearInterval(window.mySetInterval)
		window.myListing.classList.remove('d-none')
		document.getElementById("myInputPause").classList.add('d-none')
		document.getElementById("myInputPlayPause").classList.remove('d-none')
	}


	myPlay() {
		document.getElementById("myInputPlayPause").classList.add('d-none')
		document.getElementById("myInputPause").classList.remove('d-none')
		window.mySetInterval = setInterval(function(){

			if (!window.myShuffle) {
				if (window.myPositionX === window.myList[window.myPositionY].length - 1 ) {
					window.myPositionX= -1
					window.myPositionY++
				}
				if (window.myPositionY > window.myList.length - 1) {
					window.myPositionY = 0
				}
				window.myPositionX++
			}
			else {
				window.myPositionY = Math.floor(Math.random() * window.myList.length)
				window.myPositionX= Math.floor(Math.random() * window.myList[window.myPositionY].length)
			}
			MyPicturama.myChangeBg(URL.createObjectURL(window.myList[window.myPositionY][window.myPositionX]))

		}, window.myDelay * 1000)
	}


	myReset() {
		clearInterval(window.mySetInterval)
		window.myPositionX= 0 // Reset Position
		window.myPositionY = 0
		window.myBgColor = 'var(--my-color2)'
		MyPicturama.myChangeBg('.')		// Reset background
		window.myListing.innerHTML = ''	// Reset list DOM
		window.myList = new Array		// Reset list JS
		document.getElementById("myInputPlayPause").classList.remove('d-none')
		document.getElementById("myInputPause").classList.add('d-none')
		window.myShuffle = false
		document.querySelector("#myShuffle").style.color = 'black'
		document.querySelector(".myMiniatures").classList.add('d-none')
	}


	myShuffle() {
		if (!window.myShuffle) {
			window.myShuffle = true
			document.querySelector(".btn-picturama-shuffle").style.color = 'red'
		}
		else {
			window.myShuffle = false
			document.querySelector(".btn-picturama-shuffle").style.color = 'black'
		}
	}


	static myUpdateScreen() {
		const ContentShellBar	=	document.getElementsByClassName("my-shell-bar")
		const ContentShellPrompt	=	document.getElementsByClassName("my-shell-prompt")
		const Separation	=	document.getElementsByClassName("separation")

		for (let i = 0; i < ContentShellBar.length; i++) {
			ContentShellBar[i].classList.toggle('d-none')
		}

		for (let i = 0; i < ContentShellPrompt.length; i++) {
			ContentShellPrompt[i].classList.toggle('d-none')
		}

		for (let i = 0; i < Separation.length; i++) {
			Separation[i].classList.toggle('d-none')
		}

		document.querySelector('#myChrono .my-shell-content>button').classList.toggle('d-none')
		document.querySelector('#staticBackdrop').classList.toggle('d-none')
		document.querySelector('main').classList.toggle('d-none')
		document.querySelector('footer').classList.toggle('d-none')
		document.querySelector(".navbar").classList.toggle('d-none')

		// document.querySelector(".myBarControl>ul").classList.remove('d-none')
		document.querySelector(".myBarControl").classList.toggle('bg-body-secondary')
		document.querySelector(".myBarControl>ul>li:nth-child(1) i").classList.toggle('d-none')
		document.querySelector(".myBarControl>ul>li:nth-child(2)>ul").classList.toggle('d-none')
	}


	myFullScreen() {
		MyPicturama.myUpdateScreen()
	}


	/*	SLIDER	*/
	/**
	* Utilise la variable --items pour déterminer le nombre d'élément visible
	**/
	get itemsToScroll () {
		return parseInt(window.getComputedStyle(window.wrapper).getPropertyValue('--items'), 10);
	}


	/**
	* Nombre total de "pages" dans notre slider
	* @returns {number}
	**/
	get pages () {
		return Math.ceil(window.wrapper.children.length / this.itemsToScroll)
	}


	/**
	* Page courante
	* @returns {number}
	**/
	get page () {
		return Math.ceil(window.wrapper.scrollLeft / window.wrapper.offsetWidth)
	}


	/**
	* Affiche / Masque les boutons de navigation
	**/
	updateUI () {
		if (this.page === 0)
			window.prevButton.setAttribute('hidden', 'hidden')
		else
			window.prevButton.removeAttribute('hidden')
	
		if (this.page === this.pages - 1)
			window.nextButton.setAttribute('hidden', 'hidden')
		else
			window.nextButton.removeAttribute('hidden')
	}


	/**
	 * Déplace le slider de n pages
	 * @param {number} n
	 */
	move (n) {
		let newPage = this.page + n
	
		if (newPage < 0)
			newPage = 0
	
		if (newPage >= this.pages)
			newPage = this.pages - 1
	
		window.wrapper.scrollTo({
			left: window.wrapper.children[newPage * this.itemsToScroll].offsetLeft,
				behavior: 'smooth'
		})
	}


	/*
	 * Ferme le slider
	*/
	myCloseSlider() {
		document.querySelector(".myMiniatures").classList.add('d-none')
	}

}