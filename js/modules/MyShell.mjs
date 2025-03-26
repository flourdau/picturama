/**	MYSHELL
 *	@description:	Emulate a shell design
*/
export default class MyShell {
	constructor() {
		const buttonClose	=	document.getElementsByClassName("btnClose")
		const buttonMax		=	document.getElementsByClassName("btnMaximize")
		const buttonMin		=	document.getElementsByClassName("btnMinimize")
		const buttonMagic	=	document.getElementsByClassName("btnMagic")
		const buttonNameDraggable	=	document.getElementsByClassName("my-shell")

		// BIG CLOCK
		document.querySelector("#myClock #myHour").addEventListener("click",
			function() {
				const val = this.parentNode.parentNode.parentNode.parentNode.querySelector('.btn-shell-font-size input').value

				this.style.fontSize = (val * 1.15) + 'rem'

		})


		// MESSAGE
		document.querySelector("#myMessage .my-shell-prompt input").addEventListener("input",
			function() {document.querySelector("#myMessage .my-shell-content span").innerHTML = this.value
		})


		// BOUTONS 
		// CLOSE
		for (let i = 0; i < buttonClose.length; i++) {
			buttonClose[i].addEventListener("click", function() {
				if (confirm('close?'))
					this.parentNode.parentNode.parentNode.classList.toggle('d-none')				
			})
		}


		// MAX
		for (let i = 0; i < buttonMax.length; i++) {
			buttonMax[i].addEventListener("click", function() {
				this.parentNode.parentNode.parentNode.classList.toggle('my-left')
				this.parentNode.parentNode.parentNode.parentNode.classList.toggle('my-size-max')
				this.parentNode.parentNode.parentNode.classList.toggle('my-size-max')

				if (this.parentNode.parentNode.parentNode.classList.contains('my-size-max'))
					document.querySelector("#myShells").style.padding = "0 1rem"
				else if (!this.parentNode.parentNode.parentNode.classList.contains('my-size-max') && window.innerWidth <= 700)
					document.querySelector("#myShells").style.padding = "1rem 1rem"
				else
					document.querySelector("#myShells").style.padding = "2rem 1rem"
		})}


		// MIN
		for (let i = 0; i < buttonMin.length; i++) {
			buttonMin[i].addEventListener("click", function() {
				this.parentNode.parentNode.parentNode.querySelector(".my-shell-content").classList.toggle('d-none')
				this.parentNode.parentNode.parentNode.querySelector(".my-shell-prompt").classList.toggle('d-none')
		})}


		// MAGICBUTTON
		function myMagicButton(e) {
			const myContent = e.parentNode.parentNode.parentNode
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
				let tmp = 'center'
				const myShellX = myContent.querySelector(".btn-shell-X select").value

				if (myShellX === 'flex-start')
					tmp = 'left'
				else if (myShellX === 'flex-end')
					tmp = 'right'

				myContent.querySelector('.my-shell-content').style.textAlign = tmp
				myContent.querySelector('.my-shell-content').style.alignItems = myShellX
			}, false)
			
			myContent.querySelector('.btn-shell-Y select').addEventListener("change", () => {
				const myShellY = myContent.querySelector(".btn-shell-Y select").value

				myContent.querySelector('.my-shell-content').style.justifyContent = myShellY
			}, false)

			myContent.querySelector('.btn-shell-font-size input').addEventListener("change", (e) => {
				console.log(myContent.id)
				if (myContent.id === 'myClock') {
					myContent.querySelector('#myClock .my-shell-content #myHour').style.fontSize = e.target.value * 1.05 + 'rem'
					myContent.querySelector('#myClock .my-shell-content #myDate').style.fontSize = e.target.value + 'rem'
				}
				else
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


		// NAMEBUTTON DRAGGABLE
		function myNameButton(elmnt) {
			let pos1, pos2, pos3, pos4 = 0

			// if present, the header is where you move the DIV from:
			if (elmnt.querySelector(".my-shell-name"))
				elmnt.querySelector(".my-shell-name").onmousedown = dragMouseDown
			if (elmnt.querySelector(".my-shell-content"))
				elmnt.querySelector(".my-shell-content").onmousedown = dragMouseDown
			// otherwise, move the DIV from anywhere inside the DIV:
			else
				elmnt.onmousedown = dragMouseDown

			function dragMouseDown(e) {
				e = e || window.event
				e.preventDefault()
				// get the mouse cursor position at startup:
				pos3 = e.clientX
				pos4 = e.clientY
				document.onmouseup = closeDragElement
				// call a function whenever the cursor moves:
				document.onmousemove = elementDrag
			}

			function elementDrag(e) {
				e = e || window.event
				e.preventDefault()

				// calculate the new cursor position:
				pos1 = pos3 - e.clientX
				pos2 = pos4 - e.clientY
				pos3 = e.clientX
				pos4 = e.clientY

				// set the element's new position:
				elmnt.style.top = (elmnt.offsetTop - pos2) + "px"
				elmnt.style.left = (elmnt.offsetLeft - pos1) + "px"
			}

			function closeDragElement() {
				// stop moving when mouse button is released:
				document.onmouseup = null
				document.onmousemove = null
			}
		}
		for (let i = 0; i < buttonNameDraggable.length; i++) {
			buttonNameDraggable[i].addEventListener("mouseover", function() {myNameButton(this)})
		}
	}
}