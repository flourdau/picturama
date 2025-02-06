/*	MYINFOS
 *	Browser informations
*/
export default class MyInfos {
	constructor() {
		this.blocInfos = document.querySelector('#myInfos')
		this.blocScreen = document.querySelector('.my-screen')
		this.blocPointer = document.querySelector('.my-pointer')

		navigator.geolocation.getCurrentPosition((position) => {
			const spanLat = myCreateLiElement('span', `Latitude: ${position.coords.latitude} °`)
			const spanLon = myCreateLiElement('span', `Longitude: ${position.coords.longitude} °`)

			this.blocInfos.appendChild(spanLat)
			this.blocInfos.appendChild(spanLon)
		})

		window.addEventListener('mousemove', (event) => {this.blocPointer.innerHTML = `Cursor: X: ${event.clientX} Y: ${event.clientY}`})
		window.addEventListener("resize", () => {this.blocScreen.innerHTML = `Screen: ${window.innerWidth}x${window.innerHeight}px`})

		const spanBrower = myCreateLiElement('span', `Version: ${navigator.appVersion}`)
		this.blocInfos.append(spanBrower)

		const spanFullScreen = myCreateLiElement('span', `FullScreen: ${window.screen.width}x${window.screen.height}px`)
		this.blocInfos.appendChild(spanFullScreen)

		this.blocScreen = myCreateLiElement('span', `Screen: ${window.innerWidth}x${window.innerHeight}px`)
		this.blocInfos.appendChild(this.blocScreen)

		this.blocPointer = myCreateLiElement('span', `Cursor: X: 0 Y: 0`)
		this.blocInfos.appendChild(this.blocPointer)

		const spanLanguage = myCreateLiElement('span', `Langue: ${navigator.language}`)
		this.blocInfos.appendChild(spanLanguage)
	}
}

function myCreateLiElement(tag, text) {
	const liElement = document.createElement("li")
	const element = document.createElement(tag)

	element.append(text)
	liElement.append(element)
	return liElement
}