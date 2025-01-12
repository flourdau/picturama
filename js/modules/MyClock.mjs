/*	MYCLOCK
 *	modify 2 elements of DOM (#myDate & #myHour)
*/
export default class MyClock {
	$myDate	=	document.getElementById("myDate")
	$myHour	=	document.getElementById("myHour")
    local	=	'fr-FR'
    options	=	{	weekday	:	"long",
					year	:	"numeric",
					month	:	"long",
					day		:	"numeric" }


    constructor() {
        this.d		=	new Date()
        this.myHour	=	this.d.toLocaleTimeString(this.local)
        this.myDate	=	this.d.toLocaleDateString(this.local, this.options)

        this.myDate	=	this.myDate.toLowerCase()
									.split(' ')
									.map((s) => s.charAt(0).toUpperCase() + s.substring(1))
									.join(' ')
		this.$myDate.innerHTML	=	this.getMyDate
		this.$myHour.innerHTML	=	this.getMyHour
    }


	get getMyHour() { return this.myHour }


	get getMyDate() { return this.myDate }
}

/*	MyCustomClock
*/
export class MyCustomClock {
    constructor() {
		this.colorPicker = document.querySelector("#myInputClockColor")
		this.colorPickerBG = document.querySelector("#myInputClockBGColor")
		this.colorPicker.addEventListener("input", this.myUpDateClockColor, false)
		this.colorPicker.addEventListener("change", this.myUpDateClockColor, false)
		this.colorPickerBG.addEventListener("input", this.myUpDateClockBGColor, false)
		this.colorPickerBG.addEventListener("change", this.myUpDateClockBGColor, false)
		document.getElementById("mySelectClockCenterX").addEventListener("change", this.myClockCenterX, false)
		document.getElementById("mySelectClockCenterY").addEventListener("change", this.myClockCenterY, false)
		document.getElementById("mySelectClockFont").addEventListener("change", this.myFont, false)
		document.getElementById("myFontSize").addEventListener("change", this.myFontSize, false)
		document.getElementById("myRainbow").addEventListener("click", this.myRainbow, false)
		this.colorPicker.select()
		this.colorPickerBG.select()
	}
	
	
	myClockCenterY() {
		const myClockCenterY = document.getElementById("mySelectClockCenterY").value
		document.querySelector(".myClock").style.justifyContent = myClockCenterY
	}
	
	
	myClockCenterX() {
		const myClockCenterX = document.getElementById("mySelectClockCenterX").value
		if (myClockCenterX === 'start') {
			document.querySelector("#collapseClock").style.background = "linear-gradient(to right, var(--bs-body-bg), transparent 100%)"
			document.querySelector("#collapseClock").style.textAlign = 'left'
		}
		else if (myClockCenterX === 'end') {
			document.querySelector("#collapseClock").style.background = "linear-gradient(to left,  var(--bs-body-bg), transparent 100%)"
			document.querySelector("#collapseClock").style.textAlign = 'right'
		}
		else {
			document.querySelector("#collapseClock").style.background = "rgba(42, 42, 42, .42)"
			document.querySelector("#collapseClock").style.textAlign = myClockCenterX
		}		
		document.querySelector(".myClock").style.alignSelf = myClockCenterX
	}


	myUpDateClockColor(event) {
		document.querySelector("#collapseClock").style.color = event.target.value
	}


	myUpDateClockBGColor(event) {
		const myClockCenterX = document.getElementById("mySelectClockCenterX").value
		if (myClockCenterX === 'start')
			document.querySelector("#collapseClock").style.background = "linear-gradient(to right, " + event.target.value + ", transparent 100%)"
		else if (myClockCenterX === 'end')
			document.querySelector("#collapseClock").style.background = "linear-gradient(to left, " + event.target.value + ", transparent 100%)"
		else
			document.querySelector("#collapseClock").style.background = event.target.value
	}


	myFont(event) {
		document.querySelector("#myHour").style.fontFamily = event.target.value
		document.querySelector("#myDate").style.fontFamily = event.target.value
	}


	myFontSize(event) {
		document.querySelector("#myHour").style.fontSize = event.target.value+ 'rem'
		document.querySelector("#myDate").style.fontSize = (event.target.value / 2) + 'rem'
	}


	myRainbow() {
		document.querySelector("#collapseClock").classList.toggle('rainbow_text_animated')
	}
}