/*	MYSHELL
 *	Emulate a shell in the browser
*/
export default class MyShell {
    constructor() {
		const buttonClose	=	document.getElementsByClassName("btnClose")
		const buttonMax		=	document.getElementsByClassName("btnMaximize")
		const buttonMin		=	document.getElementsByClassName("btnMinimize")
		const buttonMagic	=	document.getElementsByClassName("btnMagic")

		// BOUTONS 
		// CLOSE
		function myClose(e) {
			if (confirm('close?'))
				e.parentNode.parentNode.innerHTML = ''
		}

		for (let i = 0; i < buttonClose.length; i++) {
			buttonClose[i].addEventListener("click", function() {myClose(this)})
		}


		// MAX
		function myMax(e) {
			e.parentNode.parentNode.classList.toggle('my-size-max')
		}

		for (let i = 0; i < buttonMax.length; i++) {
			buttonMax[i].addEventListener("click", function() {myMax(this)})
		}


		// MIN
		function myMin(e) {
			const myContent = e.parentNode.parentNode

			myContent.querySelector(".my-shell-content").classList.toggle('d-none')
			myContent.querySelector(".my-shell-prompt").classList.toggle('d-none')
		}

		for (let i = 0; i < buttonMin.length; i++) {
			buttonMin[i].addEventListener("click", function() {myMin(this)})
		}


		// MAGICBOTTUN
		function myMagicButton(e) {
			const myContent = e.parentNode.parentNode
			
			function myUpDateBGColor(event) {
				myContent.style.background = event.target.value
			}
			const colorPickerBG = myContent.querySelector(".btn-bg-color input")
			colorPickerBG.addEventListener("input", myUpDateBGColor, false)
			colorPickerBG.addEventListener("change", myUpDateBGColor, false)
			colorPickerBG.select()

			function myUpDateColor(event) {
				myContent.style.color = event.target.value
			}
			const colorPicker = myContent.querySelector(".btn-color input")
			colorPicker.addEventListener("input", myUpDateColor, false)
			colorPicker.addEventListener("change", myUpDateColor, false)
			colorPicker.select()
			
			function myFont(event) {
				myContent.querySelector('.my-shell-content').style.fontFamily = event.target.value
			}
			myContent.querySelector('.btn-shell-font select').addEventListener("change", myFont, false)

			function myShellX() {
				const myShellX = myContent.querySelector(".btn-shell-X select").value

				if (myShellX === 'left') {
					const tmp = 'flex-start'
				}
				else if (myShellX === 'right') {
					const tmp = 'flex-end'
				}
				myContent.querySelector('.my-shell-content').style.textAlign = myShellX
				myContent.querySelector('.my-shell-content').style.justifyContent = myShellX
			}
			myContent.querySelector('.btn-shell-X select').addEventListener("change", myShellX, false)

			function myShellY() {
				const myShellY = myContent.querySelector(".btn-shell-Y select").value
				
				myContent.querySelector('.my-shell-content').style.alignItems = myShellY
			}
			myContent.querySelector('.btn-shell-Y select').addEventListener("change", myShellY, false)

			function myShellFontSize(event) {
				myContent.querySelector('.my-shell-content').style.fontSize = event.target.value + 'rem'
			}
			myContent.querySelector('.btn-shell-font-size input').addEventListener("change", myShellFontSize, false)


			function myShellFontMultiColor(event) {
				myContent.querySelector('.my-shell-content').classList.toggle('rainbow_text_animated')
			}
			myContent.querySelector('.btn-color button').addEventListener("click", myShellFontMultiColor, false)


		}
		
		for (let i = 0; i < buttonMagic.length; i++) {
			buttonMagic[i].addEventListener("click", function() {myMagicButton(this)})
		}
	}
}