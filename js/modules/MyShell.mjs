/**	MYSHELL
 *	@description: Emulate a shell design
*/
export default class MyShell {
    constructor() {
		// BIG CLOCK
		document.querySelector("#myClock #myHour").addEventListener("click",
			function() {
				const val = this.parentNode.parentNode.parentNode.parentNode.querySelector('.btn-shell-font-size input').value

				this.style.fontSize = (val * 1.15) + 'rem'
		})


		// MESSAGE
		document.querySelector("#myMessage .my-shell-prompt input").addEventListener("input",
			function() {
				document.querySelector("#myMessage .my-shell-content span").innerHTML = this.value
		})


		// BOUTONS 
		// CLOSE
		const buttonClose	=	document.getElementsByClassName("btnClose")
		for (let i = 0; i < buttonClose.length; i++) {
			buttonClose[i].addEventListener("click", function() {
				if (confirm('close?'))
					this.parentNode.parentNode.classList.toggle('d-none')				
			})
		}


		// MAX
		const buttonMax		=	document.getElementsByClassName("btnMaximize")
		for (let i = 0; i < buttonMax.length; i++) {
			buttonMax[i].addEventListener("click", function() {
				this.parentNode.parentNode.parentNode.classList.toggle('my-size-max')
				this.parentNode.parentNode.classList.toggle('my-size-max')
		})}


		// MIN
		const buttonMin		=	document.getElementsByClassName("btnMinimize")		
		for (let i = 0; i < buttonMin.length; i++) {
			buttonMin[i].addEventListener("click", function() {
				this.parentNode.parentNode.querySelector(".my-shell-content").classList.toggle('d-none')
				this.parentNode.parentNode.querySelector(".my-shell-prompt").classList.toggle('d-none')
		})}


		// MAGICBUTTON
		const buttonMagic	=	document.getElementsByClassName("btnMagic")
		function myMagicButton(e) {
			const myContent = e.parentNode.parentNode
			const colorPickerBG = myContent.querySelector(".btn-shell-bg-color input")
			const colorPicker = myContent.querySelector(".btn-shell-color input")


			function myUpDateBGColor(e) {
				myContent.style.background = e.target.value
			}

			function myUpDateColor(e) {
				myContent.style.color = e.target.value
			}


			colorPickerBG.addEventListener("input", myUpDateBGColor, false)
			colorPickerBG.addEventListener("change", myUpDateBGColor, false)
			colorPicker.addEventListener("input", myUpDateColor, false)
			colorPicker.addEventListener("change", myUpDateColor, false)
			myContent.querySelector('.btn-shell-font select').addEventListener("change", (e) => {
				myContent.querySelector('.my-shell-content').style.fontFamily = e.target.value
			}, false)
			myContent.querySelector('.btn-shell-X select').addEventListener("change", () => {
				const myShellX = myContent.querySelector(".btn-shell-X select").value
				let tmp = 'center'

				if (myShellX === 'left')
					tmp = 'flex-start'
				else if (myShellX === 'right')
					tmp = 'flex-end'

				myContent.querySelector('.my-shell-content').style.textAlign = myShellX
				myContent.querySelector('.my-shell-content').style.justifyContent = tmp
			}, false)
			myContent.querySelector('.btn-shell-Y select').addEventListener("change", () => {
				const myShellY = myContent.querySelector(".btn-shell-Y select").value

				myContent.querySelector('.my-shell-content').style.alignItems = myShellY
			}, false)
			myContent.querySelector('.btn-shell-font-size input').addEventListener("change", (e) => {
				myContent.querySelector('.my-shell-content').style.fontSize = e.target.value + 'rem'
			}, false)
			myContent.querySelector('.btn-shell-color button').addEventListener("click", () => {
				myContent.querySelector('.my-shell-content').classList.toggle('rainbow_text_animated')
			}, false)
			myContent.querySelector('.btn-shell-opacity input').addEventListener("change", (e) => {
				myContent.style.opacity = e.target.value / 10
			}, false)
			myContent.querySelector('.btn-shell-delete-bg-color').addEventListener("click", () => {
				myContent.style.background = 'transparent'
			}, false)


			colorPickerBG.select()
			colorPicker.select()
		}
		for (let i = 0; i < buttonMagic.length; i++) {
			buttonMagic[i].addEventListener("click", function() {myMagicButton(this)})
		}
	}
}