/** MYDOM
 *  @description:	Global mofications to the DOM
 */
export default class MyDOM {
	constructor() {
		window.myHTML = document.querySelector("html");
		const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
		const isLightMode = window.matchMedia("(prefers-color-scheme: light)").matches;

		if (isDarkMode) window.myHTML.setAttribute("data-bs-theme", "dark");
		else if (isLightMode) window.myHTML.setAttribute("data-bs-theme", "light");
		else console.log("Le thème n'est pas spécifié ou le système ne supporte pas cette fonctionnalité.");

		const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
		const handleThemeChange = (event) => {
			if (event.matches) window.myHTML.setAttribute("data-bs-theme", "dark");
			else window.myHTML.setAttribute("data-bs-theme", "light");
		};

		darkModeMediaQuery.addEventListener("change", handleThemeChange);
		handleThemeChange(darkModeMediaQuery);

		document.getElementById("mySelectTheme").addEventListener("click", this.mySwitchTheme, false);
		document.querySelector(".btn-picturama-check-clock").addEventListener("change", () => this.myToggleBloc("#myClock"), false);
		document.querySelector(".btn-picturama-check-chrono").addEventListener("change", () => this.myToggleBloc("#myChrono"), false);
		document.querySelector(".btn-picturama-check-message").addEventListener("change", () => this.myToggleBloc("#myMessage"), false);
		document.querySelector(".btn-picturama-check-infos").addEventListener("change", () => this.myToggleBloc("#myInfos"), false);
		document.querySelector(".btn-picturama-check-cam").addEventListener("change", () => this.myToggleBloc("#myCam"), false);
		document.querySelector(".btn-picturama-check-pub").addEventListener("change", () => this.myToggleBloc("#myPub"), false);
		document.querySelector(".btn-picturama-check-tv").addEventListener("change", () => this.myToggleBloc("#myTV"), false);
		document.querySelector(".btn-picturama-check-miniatures").addEventListener("change", () => this.myToggleBloc(".myMiniatures"), false);
		document.querySelector(".myBtnReadMe").addEventListener("click", (e) => {
			e.preventDefault();
			this.myToggleReadMe();
		});

		// NAVBAR SCROLL
		window.onscroll = function() {
			const myPre = document.querySelector("nav>a>pre");
			const myH1 = document.querySelector("nav>a>h1");

			if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
				myH1.className = "d-inline-block";
				myPre.className = "d-none";
			}
			else {
				myH1.className = "d-inline-block align-text-top d-lg-none";
				myPre.className = ""
			}
		}

		this.anchor();
		this.footerYear();
	}

	myToggleReadMe() {
		const myReadMe = document.getElementById("myReadMe");

		if (myReadMe.classList.contains("d-none")) {
			const shells = document.getElementsByClassName("my-shell");

			for (let i = 0; i < shells.length; i++) {
				if (shells[i].id === "myReadMe") shells[i].classList.remove("d-none");
				else shells[i].classList.add("d-none");
			}
		}
		else {
			myReadMe.classList.add("d-none");
			document.getElementById("myClock").classList.remove("d-none");
		}
	}

	mySwitchTheme() {
		if (window.myHTML.getAttribute("data-bs-theme") === "dark") {
			window.myHTML.setAttribute("data-bs-theme", "light");
			localStorage.setItem("theme", "light");
		}
		else {
			window.myHTML.setAttribute("data-bs-theme", "dark");
			localStorage.setItem("theme", "dark");
		}
	}

	anchor() {
		const ancre = window.location.hash;

		if (ancre === "#read_me")
			this.myToggleReadMe();
	}

	myToggleBloc(myClass) {
		document.querySelector(myClass).classList.toggle("d-none");
	}

	footerYear() {
		document.getElementById("footer-year").innerHTML = new Date().getFullYear();
	}
}
