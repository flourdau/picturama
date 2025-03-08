/**	MYCREATESHELLS
 *	@description: Create a shell elements 
*/
export default class MyCreateShells {

	constructor() {
		const shells = document.getElementsByClassName("my-shell")

		for (let i = 0; i < shells.length; i++) {
			shells[i].classList.add("shadow-lg")

			if (shells[i].id !== "staticBackdrop") 
				shells[i].prepend(this.createBar(shells[i]))

			if (shells[i].id === "myMessage") 
				shells[i].append(this.createPrompt())
		}

	}


	createPrompt() {
		const div = document.createElement("div")
		const input = document.createElement("input")

		div.classList.add("my-shell-prompt")
		div.classList.add("bg-body-secondary")
		div.classList.add("bg-opacity-75")
		
		input.type = "text"
		input.classList.add("form-control")
		input.placeholder = "Hello World!"

		div.appendChild(input)

		return div

	}
	

	createBtnY() {
		const li = document.createElement("li")
		const label = document.createElement("label")
		const svg = document.createElement("img")
		const select = document.createElement("select")
		const option1 = document.createElement("option")
		const option2 = document.createElement("option")
		const option3 = document.createElement("option")

		li.classList.add("btn-shell-Y")
		li.classList.add("dropdown-item")
		li.title = 'Centrage vertical.'

		label.classList.add("form-label")
		label.classList.add("d-flex")
		label.classList.add("align-items-center")

		svg.src = "/design/svg/center-y.svg"

		select.classList.add("form-select")
		select.name = "myShellY"
		select.attributes["aria-label"] = "Select vertical center."

		option1.value = "top"
		option1.innerHTML = 'Haut'

		option2.value = "center"
		option2.innerHTML = 'Centre'

		option3.value = "bottom"
		option3.innerHTML = 'Bas'

		select.appendChild(option1)
		select.appendChild(option2)
		select.appendChild(option3)

		label.append(svg)
		label.appendChild(select)
		li.appendChild(label)

		return li

	}
	createBtnX() {
		const li = document.createElement("li")
		const label = document.createElement("label")
		const svg = document.createElement("img")
		const select = document.createElement("select")
		const option1 = document.createElement("option")
		const option2 = document.createElement("option")
		const option3 = document.createElement("option")

		li.classList.add("btn-shell-X")
		li.classList.add("dropdown-item")
		li.title = 'Centrage horizontal.'

		label.classList.add("form-label")
		label.classList.add("d-flex")
		label.classList.add("align-items-center")

		svg.src = "/design/svg/center-x.svg"

		select.classList.add("form-select")
		select.name = "myShellX"
		select.attributes["aria-label"] = "Select horizontal center."

		option1.value = "left"
		option1.innerHTML = 'Gauche'

		option2.value = "center"
		option2.innerHTML = 'Centre'

		option3.value = "right"
		option3.innerHTML = 'Droite'

		select.appendChild(option1)
		select.appendChild(option2)
		select.appendChild(option3)

		label.append(svg)
		label.appendChild(select)
		li.appendChild(label)

		return li

	}
	createBtnFontSize() {
		const li = document.createElement("li")
		const label = document.createElement("label")
		const svgMin = document.createElement("img")
		const input = document.createElement("input")
		const svgMax = document.createElement("img")

		li.classList.add("btn-shell-font-size")
		li.classList.add("dropdown-item")
		li.title = 'Taille de la police.'

		label.classList.add("form-label")
		label.classList.add("d-flex")
		label.classList.add("align-items-center")

		svgMin.src = "/design/svg/font-size-min.svg"

		input.type = "range"
		input.name = "myShellFontSize"
		input.min = "1"
		input.max = "20"
		input.step = "1"
		input.value = "4"

		svgMax.src = "/design/svg/font-size-min.svg"

		label.append(svgMin)
		label.appendChild(input)
		label.append(svgMax)
		li.appendChild(label)

		return li

	}
	createBtnFont() {
		const li = document.createElement("li")
		const label = document.createElement("label")
		const svg = document.createElement("img")
		const span = document.createElement("span")
		const select = document.createElement("select")
		const option1 = document.createElement("option")
		const option2 = document.createElement("option")

		li.classList.add("btn-shell-font")
		li.classList.add("dropdown-item")
		li.title = 'Style de la police.'

		label.classList.add("form-label")
		label.classList.add("d-flex")
		label.classList.add("align-items-center")

		svg.src = "/design/svg/font.svg"

		span.innerHTML = 'Style de la police.'

		select.classList.add("form-select")
		select.name = "myShellFont"
		select.attributes["aria-label"] = "Select font."

		option1.value = "monospace"
		option1.innerHTML = "Monospace"

		option2.value = "Open Sans"
		option2.innerHTML = "Open Sans"

		select.appendChild(option1)
		select.appendChild(option2)

		label.append(svg)
		label.appendChild(span)
		label.appendChild(select)
		li.appendChild(label)

		return li

	}
	createBtnColor() {
		const li = document.createElement("li")
		const label = document.createElement("label")
		const svg = document.createElement("img")
		const span = document.createElement("span")
		const input = document.createElement("input")
		const button = document.createElement("button")

		li.classList.add("btn-shell-color")
		li.classList.add("dropdown-item")
		li.title = 'Couleur du texte.'

		label.classList.add("form-label")
		label.classList.add("d-flex")
		label.classList.add("align-items-center")

		svg.src = "/design/svg/color.svg"

		span.innerHTML = 'Couleur du teste.'

		input.type = "color"
		input.hidden = true

		button.classList.add("btn")
		button.title = "Multi-couleurs."
		button.innerHTML = "🌈"

		label.append(svg)
		label.appendChild(span)
		label.appendChild(input)
		label.appendChild(button)
		li.appendChild(label)

		return li

	}
	createBtnBGColor() {
		const li = document.createElement("li")
		const label = document.createElement("label")
		const svg = document.createElement("img")
		const span = document.createElement("span")
		const input = document.createElement("input")
		const button = document.createElement("button")
		const svgReset = document.createElement("img")

		li.classList.add("btn-shell-bg-color")
		li.classList.add("dropdown-item")
		li.title = 'Couleur du background.'

		label.classList.add("dropdown-item")
		label.classList.add("form-label")
		label.classList.add("d-flex")
		label.classList.add("align-items-center")

		svg.src = "/design/svg/bgcolor.svg"

		span.innerHTML = 'Couleur du background.'

		input.type = "color"
		input.hidden = true

		button.classList.add("btn")
		button.title = "Suppression de la couleur du background."

		svgReset.src = "/design/svg/reset.svg"
		svgReset.classList.add("btn-shell-delete-bg-color")
		button.appendChild(svgReset)

		label.append(svg)
		label.appendChild(span)
		label.appendChild(input)
		label.appendChild(button)
		li.appendChild(label)

		return li

	}
	createBtnOpacity() {
		const li = document.createElement("li")
		const label = document.createElement("label")
		const svg = document.createElement("img")
		const input = document.createElement("input")

		li.classList.add("btn-shell-opacity")
		li.classList.add("dropdown-item")

		label.classList.add("form-label")
		label.classList.add("d-flex")
		label.classList.add("align-items-center")

		svg.src = "/design/svg/opacity.svg"

		input.type = "range"
		input.min = "0"
		input.max = "10"
		input.step = "1"
		input.value = "10"

		label.append(svg)
		label.appendChild(input)
		li.appendChild(label)

		return li

	}
	createBtnMagic() {
		const magicBtn = document.createElement("li")
		const img = document.createElement("img")
		const ul = document.createElement("ul")

		magicBtn.classList.add("btnMagic")
		magicBtn.classList.add("btn")

		img.src = "/design/svg/code.svg"
		img.alt = "Magic Boutton"
		img.setAttribute("data-bs-toggle", "dropdown")
		magicBtn.appendChild(img)

		ul.classList.add("dropdown-menu")

		ul.append(this.createBtnOpacity())
		ul.appendChild(this.createBtnBGColor())
		ul.appendChild(this.createBtnColor())
		ul.appendChild(this.createBtnFont())
		ul.appendChild(this.createBtnFontSize())
		ul.appendChild(this.createBtnX())
		ul.appendChild(this.createBtnY())

		magicBtn.appendChild(ul)

		return magicBtn

	}


	createNameBar(elem) {
		const nameBar = document.createElement("li")

		nameBar.classList.add("my-shell-name")
		nameBar.innerHTML = elem.id.substr(2)

		return nameBar

	}


	createBtnMinimize() {
		const minBtn = document.createElement("li")
		const img = document.createElement("img")

		minBtn.classList.add("btnMinimize")
		minBtn.classList.add("btn")

		img.src = "/design/svg/minimize.svg"
		img.alt = "Minimize"

		minBtn.appendChild(img)

		return minBtn

	}


	createBtnMaximize() {
		const maxBtn = document.createElement("li")
		const img = document.createElement("img")

		maxBtn.classList.add("btnMaximize")
		maxBtn.classList.add("btn")

		img.src = "/design/svg/maximize.svg"
		img.alt = "Maximize"

		maxBtn.appendChild(img)

		return maxBtn

	}


	createBtnClose() {
		const closeBtn = document.createElement("li")
		const img = document.createElement("img")

		closeBtn.classList.add("btnClose")
		closeBtn.classList.add("btn")

		img.src = "/design/svg/close.svg"
		img.alt = "Close"

		closeBtn.appendChild(img)

		return closeBtn

	}


	createBar(elem) {
		const item = document.createElement("ul")

		item.classList.add("my-shell-bar")
		item.classList.add("bg-body-secondary")

		item.appendChild(this.createBtnMagic())
		item.appendChild(this.createNameBar(elem))
		item.appendChild(this.createBtnMinimize())
		item.appendChild(this.createBtnMaximize())
		item.appendChild(this.createBtnClose())

		return item

	}

}