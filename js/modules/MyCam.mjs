/**	MYCAM
 *	@description:	Gestion Cam
*/
export default class MyCam {
	width = 320
	height = 0
	video = null
	canvas = null
	photo = null
	startbutton = null

	constructor() {
		if (this.showViewLiveResultButton(this))
			return

		this.video = document.getElementById("video")
		this.canvas = document.getElementById("canvas")
		this.photo = document.getElementById("photo")
		this.startbutton = document.getElementById("startbutton")

		document.querySelector("#SwitchCamera").addEventListener("change", () => {
			navigator.mediaDevices.getUserMedia({ video: true, audio: false })
			.then((stream) => {
				video.srcObject = stream
				if (document.querySelector("#SwitchCamera").checked)
					video.play()
				else
					video.stop
			})
			.catch((err) => {console.error(`Une erreur est survenue : ${err}`)})}
		, false)

  
		this.video.addEventListener("canplay",
			(ev) => {
			if (!this.streaming) {
				this.height = this.video.videoHeight / (this.video.videoWidth / this.width)
	
				// Firefox a un bug où la hauteur ne peut pas être lue
				// à partir de la vidéo. On prend des précautions.
	
				if (isNaN(this.height)) {this.height = this.width / (4 / 3)}
	
				this.video.setAttribute("width", this.width)
				this.video.setAttribute("height", this.height)
				this.canvas.setAttribute("width", this.width)
				this.canvas.setAttribute("height", this.height)
				this.streaming = true
			}}, false)

		this.startbutton.addEventListener("click",
			(ev) => {
				this.takepicture(this)
				ev.preventDefault()
			},
			false)
  
		this.clearphoto(this)		
	}


    showViewLiveResultButton() {
		if (window.self !== window.top) {
			document.querySelector(".contentarea").remove()
			const button = document.createElement("button")
			button.textContent = "Voir le résultat de l'exemple dont le code est présenté avant";
			document.body.append(button)
			button.addEventListener("click", () => window.open(location.href))
			return true
		}
		return false
    }


	clearphoto() {
		const context = this.canvas.getContext("2d")
		context.fillStyle = "#AAA"
		context.fillRect(0, 0, this.canvas.width, this.canvas.height)

		const data = this.canvas.toDataURL("image/png")
		this.photo.setAttribute("src", data)
    }


	takepicture() {
		this.photo.classList.remove('d-none')
		const context = this.canvas.getContext("2d")
		if (this.width && this.height) {
			this.canvas.width = this.width
			this.canvas.height = this.height
			context.drawImage(this.video, 0, 0, this.width, this.height)

			const data = this.canvas.toDataURL("image/png")
			this.photo.setAttribute("src", data)
		}
		else {clearphoto()}
    }
}