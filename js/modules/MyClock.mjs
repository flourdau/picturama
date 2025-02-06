/*	MYCLOCK
 *	modify 2 elements of DOM (#myDate & #myHour)
*/
export default class MyClock {
    local	=	'fr-FR'
    options	=	{	weekday	:	"long",
					year	:	"numeric",
					month	:	"long",
					day		:	"numeric" }


    constructor() {
		this.$myDate	=	document.getElementById("myDate")
		this.$myHour	=	document.getElementById("myHour")
        this.d			=	new Date()
        this.myHour		=	this.d.toLocaleTimeString(this.local)
        this.myDate		=	this.d.toLocaleDateString(this.local, this.options)

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