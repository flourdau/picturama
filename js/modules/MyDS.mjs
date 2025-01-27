export default class MyPicturama {
	constructor() {
		// Sélection des éléments
		this.myBody = document.querySelector("body");
		this.myListing = document.getElementById("myListing");
		this.nextButton = document.querySelector('[data-slider-next]');
		this.prevButton = document.querySelector('[data-slider-prev]');
		this.wrapper = document.querySelector('[data-slider-wrapper]');
		this.colorPicker = document.querySelector("#myInputColor");

		// Initialisation des variables
		this.myList = [];
		this.mySize = "cover";
		this.myPositionX = 0;
		this.myPositionY = 0;
		this.myDelay = 5;
		this.mySetInterval = null;
		this.myShuffle = false;
		this.myCenterX = "center";
		this.myCenterY = "top";
		this.myBgColor = "var(--my-color2)";

		// Liaison des événements
		this.colorPicker.addEventListener("input", this.myUpDateColor.bind(this));
		this.colorPicker.addEventListener("change", this.myUpDateColor.bind(this));
		document.querySelector(".btn-close").addEventListener("click", this.myCloseSlider.bind(this));
		document.getElementById("mySelectTimer").addEventListener("change", this.myDelay.bind(this));
		document.getElementById("mySelectCenterX").addEventListener("change", this.myCenterX.bind(this));
		document.getElementById("mySelectCenterY").addEventListener("change", this.myCenterY.bind(this));
		document.getElementById("mySelectSize").addEventListener("change", this.mySize.bind(this));
		document.getElementById("myInputPlayPause").addEventListener("click", this.myPlay.bind(this));
		document.getElementById("myInputFullScreen").addEventListener("click", this.myFullScreen.bind(this));
		document.getElementById("myShuffle").addEventListener("click", this.myShuffle.bind(this));
		document.getElementById("myInputPause").addEventListener("click", this.myPause.bind(this));
		document.getElementById("myInputDL").addEventListener("change", this.myAddImg.bind(this));
		document.getElementById("myInputLeft").addEventListener("click", this.myLeft.bind(this));
		document.getElementById("myInputRight").addEventListener("click", this.myRight.bind(this));
		document.getElementById("myInputReset").addEventListener("click", this.myReset.bind(this));
		this.nextButton.addEventListener('click', () => this.move(1));
		this.prevButton.addEventListener('click', () => this.move(-1));
		this.wrapper.addEventListener('scrollend', () => this.updateUI());

		// Initialisation
		this.colorPicker.select();
		MyPicturama.myFlashButton();
	}

	static myFlashButton() {
		setInterval(() => {
			document.querySelector(".myBarControl>li>svg").classList.toggle('my-color3');
			document.getElementById("myInputDLLabel").classList.toggle('my-color3');
		}, 500);
	}

	static myChangeBg(path) {
		const myBody = document.querySelector("body");
		myBody.style.background = `${window.myBgColor} url('${path}')`;
		myBody.style.backgroundSize = window.mySize;
		myBody.style.backgroundAttachment = "fixed";
		myBody.style.backgroundRepeat = "no-repeat";
		myBody.style.backgroundPosition = `${window.myCenterX} ${window.myCenterY}`;
		myBody.style.transition = "2s";
	}

	myDelay() {
		this.myDelay = document.getElementById("mySelectTimer").value;
	}

	mySize() {
		if (this.myList.length > 0) {
			this.mySize = document.getElementById("mySelectSize").value;
			MyPicturama.myChangeBg(URL.createObjectURL(this.myList[this.myPositionY][this.myPositionX]));
		}
	}

	myCenterY() {
		this.myCenterY = document.getElementById("mySelectCenterY").value;
		if (this.myList.length > 0) {
			MyPicturama.myChangeBg(URL.createObjectURL(this.myList[this.myPositionY][this.myPositionX]));
		}
	}

	myCenterX() {
		this.myCenterX = document.getElementById("mySelectCenterX").value;
		if (this.myList.length > 0) {
			MyPicturama.myChangeBg(URL.createObjectURL(this.myList[this.myPositionY][this.myPositionX]));
		}
	}

	myUpDateColor(event) {
		document.querySelector(".myBarControl>li:nth-child(3)").classList.remove('d-none');
		this.myBgColor = event.target.value;
		this.myBody.style.backgroundColor = event.target.value;
	}

	// ... (autres méthodes)

	move(n) {
		let newPage = this.page + n;
		if (newPage < 0) newPage = 0;
		if (newPage >= this.pages) newPage = this.pages - 1;

		this.wrapper.scrollTo({
			left: this.wrapper.children[newPage * this.itemsToScroll].offsetLeft,
			behavior: 'smooth'
		});
	}

	myCloseSlider() {
		document.querySelector(".myMiniatures").classList.add('d-none');
	}
}