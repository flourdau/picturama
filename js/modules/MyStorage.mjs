/**	MYSTORAGE
 *	@description:	web storage gestion
 */
export default class MyStorage {
	constructor() {
		const storageShuffle = localStorage.getItem("shuffle")?.toString();
		const storageDelay = localStorage.getItem("delay")?.toString();
		const storageBGColor = localStorage.getItem("bgColor")?.toString();
		const storageTheme = localStorage.getItem("theme")?.toString();

		if (storageShuffle === "true") {
			window.myShuffle = true;
			const shuffleBtn = document.querySelector(".btn-picturama-shuffle");
			if (shuffleBtn) shuffleBtn.style.color = "red";
		}

		if (storageTheme) window.myHTML.setAttribute("data-bs-theme", storageTheme);

		if (storageDelay) {
			window.myDelay = storageDelay;
			const select = document.querySelector(".btn-picturama-timer select");
			const query = `.btn-picturama-timer select option[value='${window.myDelay}']`;
			const opt = document.querySelector(query);
			if (select && opt) {
				select.value = window.myDelay;
				opt.setAttribute("selected", "selected");
			}
		}

		if (storageBGColor) {
			document.querySelector("body").classList.remove("bg-body");
			window.myBgColor = storageBGColor;
			window.myBody.style.backgroundColor = window.myBgColor;
		}
	}
}
