/**
 *	MYCLOCK
 *	@description: Modify 2 elements of DOM (#myDate & #myHour)
 */
export default class MyClock {
	constructor() {
		//	Options
		this.local			=	'fr-FR'
		this.options		=	{
									weekday	:	"long",
									year	:	"numeric",
									month	:	"long",
									day		:	"numeric"
								}


		//	Created Date
		const currentDate	= new Date()
		const myHour		= currentDate.toLocaleTimeString(this.local)
		let myDate			= currentDate.toLocaleDateString(this.local, this.options)


		//	Modifications Date
		myDate				=	myDate.toLowerCase()
									.split(' ')
									.map((s) => s.charAt(0).toUpperCase() + s.substring(1))
									.join(' ')

		//	ID Selectors
		this.$myDate		=	document.getElementById("myDate")
		this.$myHour		=	document.getElementById("myHour")

		if (!this.$myDate || !this.$myHour) {
			console.error("Error: Elements with IDs 'myDate' or 'myHour' not found in the DOM.")
			return
		}


		//	Update DOM
		this.$myDate.textContent	=	myDate
		this.$myHour.textContent	=	myHour
    }
}