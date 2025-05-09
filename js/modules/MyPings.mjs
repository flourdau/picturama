/**	MYPINGS
 *     @name:			MyPings
 *     @description:	fetch datas
 *     @version:		1.0.0
 *     @date:			2025-04-03
 *     @update:			2025-04-04
 */
export default class MyPings {
	myInit = {
		method: "GET",
		headers: { "X-Requested-With": "XMLHttpRequest" }
	};

	constructor() {
		this.myReadme();
		this.loopTxt2ASCII();
		this.myCitation()
		this.myHello()
		this.myCalendar();
	}

	async myHello() {
		try {
			const response = await fetch("./Collections/bonjour.json", this.myInit);

			if (!response.ok) throw new Error("Fichier bonjour.json non trouvé");
			const json = await response.json();
			const rand = Math.floor(Math.random() * json.length);
			const myHello = json[rand];
			
			document.querySelector("#myHelloWord").innerHTML = myHello;
		} catch (error) {return console.error("Erreur:", error.message);}
		this.myWelcome()
		return
	}
	
	async myWelcome() {
		try {
			const response = await fetch("./Collections/bienvenue.json", this.myInit);

			if (!response.ok) throw new Error("Fichier bienvenue.json non trouvé");
			const json = await response.json();
			const rand = Math.floor(Math.random() * json.length);
			const myWelcome = json[rand];

			document.querySelector("#myHelloWord").innerHTML += " & " + myWelcome + "!  ";
		} catch (error) {return console.error("Erreur:", error.message);}
		return
	}

	async myCitation() {
		try {
			const response = await fetch("./Collections/citations.json", this.myInit);

			if (!response.ok) throw new Error("Fichier citation.json non trouvé");
			const json = await response.json();
			const rand = Math.floor(Math.random() * json.length);
			const myCitation = json[rand];

			document.querySelector("#myCitation").innerHTML = myCitation + "!  " ;
		} catch (error) {return console.error("Erreur:", error.message);}
	}

	async myCalendar() {
		try {
			const response = await fetch("./Collections/calendar.json", this.myInit);

			if (!response.ok) throw new Error("Fichier calendar.json non trouvé");
			const json = await response.json();

			console.log(json);
		} catch (error) {return console.error("Erreur:", error.message);}
	}

	async myReadme() {
		try {
			const response = await fetch("./README.md", this.myInit);

			if (!response.ok) throw new Error("Fichier README.txt non trouvé");
			const text = await response.text();

			showdown.setFlavor("github");
			const converter = new showdown.Converter();

			converter.setOption("noHeaderId", "true");
			const html = converter.makeHtml(text);

			document.querySelector("#myReadMe>.my-shell-content").innerHTML = html;
		} catch (error) {return console.error("Erreur:", error.message);}
	}

	async loopTxt2ASCII(T = document.title, L = 4, H = 5, char = "#") {
		const alpha = " -_!.ABCDEFGHIJKLMNOPQRSTUVWXYZ?";
		const tmp = T.trim().split("");
		let ROW = "";

		try {
			const response = await fetch("./Collections/ascii.txt", this.myInit);

			if (!response.ok) throw new Error("Fichier ascii.txt non trouvé");
			const text = await response.text();
			const lines = text.split("\n");

			for (const buffer of lines) {
				if (!buffer.trim()) continue;

				for (const c of tmp) {
					const position = alpha.indexOf(c.toUpperCase());
					const pos = position !== -1 ? position : 32;
					ROW += buffer.substr(pos * L, L);
				}
				ROW += "\n";
			}
			ROW = ROW.replace(/#/g, char);
			console.log(ROW);
			document.getElementById("output").textContent = ROW;
			const monCommentaire = document.createComment(`\n${ROW}`);

			document.querySelector("html").parentNode.insertBefore(monCommentaire, document.querySelector("html"));
		} catch (error) {return console.error("Erreur:", error.message);}
	}
}
