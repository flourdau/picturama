/**	MYCHRONO
 *	@description:	Modify 1 elements of DOM (#myChrono)
 */
export default class MyChrono {
	isPaused = true
	seconds = 0
	
	constructor() {
		this.intervalId
		this.pauseButton = document.querySelector('#myChrono .myChronoPlay')
		this.pauseButton.addEventListener('click', () => this.togglePause(this), false)
		this.pauseReset = document.querySelector('#myChrono .myChronoReset')
		this.pauseReset.addEventListener('click', () => this.myReset(this), false)
		this.chronometre = document.querySelector('#myChrono>.my-shell-content>div')
		window.onload = this.startChronometre(this)
	}

	startChronometre() {

		this.intervalId = setInterval(() => {
			if (!this.isPaused) {
				this.seconds++
				let hrs = Math.floor(this.seconds / 3600)
				let mins = Math.floor((this.seconds % 3600) / 60)
				let secs = this.seconds % 60

				this.chronometre.textContent = 
					(hrs < 10 ? "0" + hrs : hrs) + ":" + 
					(mins < 10 ? "0" + mins : mins) + ":" + 
					(secs < 10 ? "0" + secs : secs)
			}
		}, 1000)
	}


	myReset() {
		this.seconds = 0
		this.chronometre.textContent = "00:00:00"
	}


	togglePause() {
		this.isPaused = !this.isPaused
		this.pauseButton.textContent = this.isPaused ? "Reprendre" : "Pause"
	}
}