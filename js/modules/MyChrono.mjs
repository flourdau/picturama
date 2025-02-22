/**	MYCHRONO
 *	@description: Modify 1 elements of DOM (#myChrono)
 */
export default class MyChrono {
	isPaused = true
	
	constructor() {
		this.intervalId
		this.pauseButton = document.querySelector('#myChrono .my-shell-content>button')
		this.pauseButton.addEventListener('click', () => this.togglePause(this), false)
		window.onload = this.startChronometre(this)
	}

	startChronometre() {
		let chronometre = document.querySelector('#myChrono>.my-shell-content>div')
		let seconds = 0

		this.intervalId = setInterval(() => {
			if (!this.isPaused) {
				seconds++
				let hrs = Math.floor(seconds / 3600)
				let mins = Math.floor((seconds % 3600) / 60)
				let secs = seconds % 60

				chronometre.textContent = 
					(hrs < 10 ? "0" + hrs : hrs) + ":" + 
					(mins < 10 ? "0" + mins : mins) + ":" + 
					(secs < 10 ? "0" + secs : secs)
			}
		}, 1000)
	}

	togglePause() {
		this.isPaused = !this.isPaused
		this.pauseButton.textContent = this.isPaused ? "Reprendre" : "Pause"
	}
}