/*	MYSHELL
 *	Emulate a shell in the browser
*/
export default class MyShell {
    constructor() {
		// CLOCK
		document.querySelector("#myClock #myHour").addEventListener("click",
			function() {
				const val = this.parentNode.parentNode.parentNode.parentNode.querySelector('.btn-shell-font-size input').value

				this.style.fontSize = (val*1.5) + 'rem'
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
					this.parentNode.parentNode.innerHTML = ''				
			})
		}
		
		
		// MAX
		const buttonMax		=	document.getElementsByClassName("btnMaximize")
		for (let i = 0; i < buttonMax.length; i++) {
			buttonMax[i].addEventListener("click", function() {
				this.parentNode.parentNode.parentNode.classList.toggle('my-size-max')
				this.parentNode.parentNode.classList.toggle('my-size-max')
			})
		}


		// MIN
		const buttonMin		=	document.getElementsByClassName("btnMinimize")		
		for (let i = 0; i < buttonMin.length; i++) {
			buttonMin[i].addEventListener("click", function() {
				this.parentNode.parentNode.querySelector(".my-shell-content").classList.toggle('d-none')
				this.parentNode.parentNode.querySelector(".my-shell-prompt").classList.toggle('d-none')
			})
		}


		// MAGICBUTTON
		const buttonMagic	=	document.getElementsByClassName("btnMagic")
		function myMagicButton(e) {
			console.log(e)
			const myContent = e.parentNode.parentNode
			console.log(myContent)
			
			function myUpDateBGColor(event) {
				myContent.style.background = event.target.value
			}
			const colorPickerBG = myContent.querySelector(".btn-shell-bg-color input")
			colorPickerBG.addEventListener("input", myUpDateBGColor, false)
			colorPickerBG.addEventListener("change", myUpDateBGColor, false)
			colorPickerBG.select()

			function myUpDateColor(event) {
				myContent.style.color = event.target.value
			}
			const colorPicker = myContent.querySelector(".btn-shell-color input")
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

			function myShellFontSize(e) {
				console.log(myContent)
				myContent.querySelector('.my-shell-content').style.fontSize = e.target.value + 'rem'
			}
			myContent.querySelector('.btn-shell-font-size input').addEventListener("change", myShellFontSize, false)


			function myShellFontMultiColor(event) {
				myContent.querySelector('.my-shell-content').classList.toggle('rainbow_text_animated')
			}
			myContent.querySelector('.btn-shell-color button').addEventListener("click", myShellFontMultiColor, false)

			function myShellOpacity(event) {
				myContent.style.opacity = event.target.value / 10
			}
			myContent.querySelector('.btn-shell-opacity input').addEventListener("change", myShellOpacity, false)

			function myShellDeleteBGColor(event) {
				myContent.style.background = 'transparent'
			}
			myContent.querySelector('.btn-shell-delete-bg-color').addEventListener("click", myShellDeleteBGColor, false)
		}
		
		for (let i = 0; i < buttonMagic.length; i++) {
			buttonMagic[i].addEventListener("click", function() {myMagicButton(this)})
		}
	}
}