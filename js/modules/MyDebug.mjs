/**	MYDEBUG
 *	@description:	Debug informations
 */
export default class MyDebug {
	constructor() {
		this.MyInfos = {};
		this.MyInfos.myFullScreen = window.screen.width + " x " + window.screen.height;
		this.MyInfos.myScreen = window.innerWidth + " x " + window.innerHeight;
		this.MyInfos.language = navigator.language;
		this.MyInfos.window = window;

		navigator.geolocation.getCurrentPosition((position) => {
			this.MyInfos.myCoords = position.coords;
		});

		console.log(this.MyInfos);

		document.addEventListener("mousemove", (event) => {
			console.log("X = ", event.clientX, "Y = ", event.clientY);
		});
	}
}
