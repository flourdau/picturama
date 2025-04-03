/**	MYPINGS
 *     @name:			MyPings
 *     @description:	fetch datas
 *     @version:		1.0.0
 *     @date:			2025-04-03
 *     @update:			2025-04-03
 */
export default class MyPings {
	myInit = {
		method: "GET",
		headers: { "X-Requested-With": "XMLHttpRequest" },
	};

	constructor() {
		this.myReadme();
		this.loopTxt2ASCII();
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
		} catch (error) {console.error("Erreur:", error.message);}
	}

	async loopTxt2ASCII(T = document.title, L = 4, H = 5, char = "#") {
		const alpha = " -_!.ABCDEFGHIJKLMNOPQRSTUVWXYZ?";
		const tmp = T.trim().split("");
		let ROW = "";

		try {
			const response = await fetch("./ascii.txt", this.myInit);

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
		} catch (error) {console.error("Erreur:", error.message);}
	}
}