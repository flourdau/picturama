/**	MYCREATESHELLS
 *	@description:	Create all shells elements 
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
		const svg = document.createElement("i")
		const select = document.createElement("select")
		const option1 = document.createElement("option")
		const option2 = document.createElement("option")
		const option3 = document.createElement("option")

		li.classList.add("btn-shell-Y")
		li.classList.add("dropdown-item")
		
		label.title = 'Centrage vertical.'
		label.classList.add("form-label")
		label.classList.add("d-flex")
		label.classList.add("align-items-center")

		svg.classList.add("btn")
		svg.classList.add("bi")
		svg.classList.add("bi-arrows-expand")

		select.classList.add("form-select")
		select.name = "myShellY"
		select.setAttribute("aria-label", "Select vertical center.")

		option1.value = "flex-start"
		option1.innerHTML = 'Haut'

		option2.value = "center"
		option2.innerHTML = 'Centre'
		option2.setAttribute('selected', 'selected')

		option3.value = "flex-end"
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
		const svg = document.createElement("i")
		const select = document.createElement("select")
		const option1 = document.createElement("option")
		const option2 = document.createElement("option")
		const option3 = document.createElement("option")

		li.classList.add("btn-shell-X")
		li.classList.add("dropdown-item")
		
		label.title = 'Centrage horizontal.'
		label.classList.add("form-label")
		label.classList.add("d-flex")
		label.classList.add("align-items-center")

		svg.classList.add("btn")
		svg.classList.add("bi")
		svg.classList.add("bi-text-center")
		svg.title = "'Select horizontal center."
		
		select.classList.add("form-select")
		select.name = "myShellX"
		select.setAttribute("aria-label", "Select horizontal center.")

		option1.value = "flex-start"
		option1.innerHTML = 'Gauche'

		option2.value = "center"
		option2.innerHTML = 'Centre'
		option2.setAttribute('selected', 'selected')

		option3.value = "flex-end"
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
		const svgMin = document.createElement("i")
		const input = document.createElement("input")
		const svgMax = document.createElement("i")

		li.classList.add("btn-shell-font-size")
		li.classList.add("dropdown-item")
		li.title = 'Taille de la police.'

		label.classList.add("form-label")
		label.classList.add("d-flex")
		label.classList.add("align-items-center")
		label.setAttribute("aria-label", "Taille de la police.")
		
		svgMin.classList.add("btn")
		svgMin.classList.add("bi")
		svgMin.classList.add("bi-dash")

		input.type = "range"
		input.name = "myShellFontSize"
		input.min = "1"
		input.max = "20"
		input.step = "1"
		input.value = "4"

		svgMax.classList.add("btn")
		svgMax.classList.add("bi")
		svgMax.classList.add("bi-plus")

		label.append(svgMin)
		label.appendChild(input)
		label.append(svgMax)
		li.appendChild(label)

		return li

	}
	createBtnFont() {
		const li = document.createElement("li")
		const label = document.createElement("label")
		const svg = document.createElement("i")
		const select = document.createElement("select")
		const option1 = document.createElement("option")
		const option2 = document.createElement("option")

		li.classList.add("btn-shell-font")
		li.classList.add("dropdown-item")

		label.classList.add("form-label")
		label.classList.add("d-flex")
		label.classList.add("align-items-center")

		svg.classList.add("btn")
		svg.classList.add("bi")
		svg.classList.add("bi-fonts")
		svg.title = "'Style de la police."
		svg.setAttribute("aria-label", "Style de la police.")

		select.classList.add("form-select")
		select.name = "myShellFont"
		select.setAttribute("aria-label", "Select font.")

		option1.value = "monospace"
		option1.innerHTML = "Monospace"

		option2.value = "Open Sans"
		option2.innerHTML = "Open Sans"
		option2.setAttribute('selected', 'selected')

		select.appendChild(option1)
		select.appendChild(option2)

		label.append(svg)
		label.appendChild(select)
		li.appendChild(label)

		return li

	}
	createBtnColor() {
		const li = document.createElement("li")
		const label = document.createElement("label")
		const svg = document.createElement("i")
		const span = document.createElement("span")
		const input = document.createElement("input")
		const button = document.createElement("button")

		li.classList.add("btn-shell-color")
		li.classList.add("dropdown-item")

		label.classList.add("form-label")
		label.classList.add("d-flex")
		label.classList.add("align-items-center")

		svg.classList.add("btn")
		svg.classList.add("bi")
		svg.classList.add("bi-palette")
		svg.title = "Couleur du texte."
		svg.setAttribute("aria-label", "Couleur du texte.")

		span.innerHTML = 'Couleur du teste.'

		input.type = "color"
		input.hidden = true

		button.classList.add("btn")
		button.title = "Multi-couleurs."
		button.innerHTML = "🌈"

		label.append(svg)
		label.appendChild(span)
		label.appendChild(input)
		li.appendChild(label)
		li.appendChild(button)

		return li

	}
	createBtnBGColor() {
		const li = document.createElement("li")
		const label = document.createElement("label")
		const svg = document.createElement("i")
		const span = document.createElement("span")
		const input = document.createElement("input")
		const button = document.createElement("button")
		const svgReset = document.createElement("i")

		li.classList.add("btn-shell-bg-color")
		li.classList.add("dropdown-item")

		label.classList.add("form-label")
		label.classList.add("d-flex")
		label.classList.add("align-items-center")
		
		svg.classList.add("btn")
		svg.classList.add("bi")
		svg.classList.add("bi-paint-bucket")
		svg.title = "Couleur du background."
		svg.setAttribute("aria-label", "Couleur du background.")
		
		span.innerHTML = 'Couleur du background.'

		input.type = "color"
		input.hidden = true

		svgReset.classList.add("btn-shell-delete-bg-color")
		svgReset.classList.add("bi-arrow-counterclockwise")

		button.classList.add("btn")
		button.title = "Suppression de la couleur du background."
		button.appendChild(svgReset)

		label.append(svg)
		label.appendChild(span)
		label.appendChild(input)

		li.appendChild(label)
		li.appendChild(button)

		return li

	}
	createBtnOpacity() {
		const li = document.createElement("li")
		const label = document.createElement("label")
		const svg = document.createElement("i")
		const input = document.createElement("input")

		li.classList.add("dropdown-item")
		li.classList.add("btn-shell-opacity")
		
		label.classList.add("form-label")
		label.classList.add("d-flex")
		label.classList.add("align-items-center")

		svg.classList.add("btn")
		svg.classList.add("bi")
		svg.classList.add("bi-transparency")
		svg.title = "Transparence"
		svg.setAttribute("aria-label", "Transparence")

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
		const img = document.createElement("i")
		const ul = document.createElement("ul")

		img.classList.add("btnMagic")
		img.classList.add("btn")
		img.classList.add("bi")
		img.classList.add("bi-code-slash")

		img.alt = "Magic Boutton"
		img.setAttribute("data-bs-toggle", "dropdown")
		img.title = "Magic Boutton"
		img.setAttribute("aria-label", "Magic Boutton")

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
		const img = document.createElement("i")

		img.classList.add("btnMinimize")
		img.classList.add("btn")
		img.classList.add("bi")
		img.classList.add("bi-dash")

		img.alt = "Minimize"
		img.title = "Minimize"
		img.setAttribute("aria-label", "Minimize")

		minBtn.appendChild(img)

		return minBtn

	}


	createBtnMaximize() {
		const maxBtn = document.createElement("li")
		const img = document.createElement("i")

		img.classList.add("btnMaximize")
		img.classList.add("btn")
		img.classList.add("bi")
		img.classList.add("bi-window-fullscreen")

		img.alt = "Maximize"
		img.title = "Maximize"
		img.setAttribute("aria-label", "Maximize")

		maxBtn.appendChild(img)

		return maxBtn

	}

	
	createBtnClose() {
		const closeBtn = document.createElement("li")
		const img = document.createElement("i")
		
		img.classList.add("btnClose")
		img.classList.add("btn")
		img.classList.add("bi")
		img.classList.add("btn-close")

		img.alt = "Close"
		img.title = "Close"
		img.setAttribute("aria-label", "Close")

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