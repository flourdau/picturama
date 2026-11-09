/**	MYPINGS
 *     @name:			MyPings
 *     @description:	fetch datas (API Platform positive-link.net with local Collections fallback)
 *     @version:		1.1.0
 *     @date:			2025-04-03
 *     @update:			2026-11-09
 */
export default class MyPings {
	myInit = {
		method: "GET",
		headers: {
			"Accept": "application/json",
			"X-Requested-With": "XMLHttpRequest"
		}
	};

	asciiTemplate = null;

	constructor() {
		this.apiBaseUrl = this.getApiBaseUrl();
		this.ready = Promise.all([
			this.myReadme(),
			this.loopTxt2ASCII(),
			this.myCitation(),
			this.myHello(),
			this.myCalendar()
		]);
	}

	getApiBaseUrl() {
		if (typeof window !== "undefined" && window.PICTURAMA_API_URL) {
			return window.PICTURAMA_API_URL.replace(/\/+$/, "");
		}
		if (
			typeof window !== "undefined" &&
			(window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1")
		) {
			return "http://127.0.0.1:8000/api";
		}
		return "https://api.positive-link.net/api";
	}

	async fetchJsonWithFallback(apiEndpoint, localPath, timeoutMs = 1500) {
		if (this.apiBaseUrl && apiEndpoint) {
			const controller = new AbortController();
			const timer = setTimeout(() => controller.abort(), timeoutMs);
			try {
				const apiResp = await fetch(`${this.apiBaseUrl}${apiEndpoint}`, {
					...this.myInit,
					signal: controller.signal
				});
				clearTimeout(timer);
				if (apiResp.ok) {
					return await apiResp.json();
				}
			} catch (_) {
				clearTimeout(timer);
			}
		}

		const response = await fetch(localPath, this.myInit);
		if (!response.ok) throw new Error(`Fichier ${localPath} non trouvé`);
		return await response.json();
	}

	async myHello() {
		let myHello = "Bonjour";
		try {
			const data = await this.fetchJsonWithFallback("/hellos-random", "./Collections/bonjour.json");
			const item = Array.isArray(data) ? data[Math.floor(Math.random() * data.length)] : data;
			myHello = typeof item === "object" && item !== null ? (item.terme || item.text || item.name || "Bonjour") : String(item);

			const el = document.querySelector("#myHelloWord");
			if (el) el.textContent = myHello;
		} catch (error) {
			return console.error("Erreur:", error.message);
		}
		const myWelcome = await this.myWelcome();
		if (myWelcome) {
			const el = document.querySelector("#myHelloWord");
			if (el) el.textContent = `${myHello} & ${myWelcome}!  `;
		}
	}

	async myWelcome() {
		try {
			const data = await this.fetchJsonWithFallback("/welcomes-random", "./Collections/bienvenue.json");
			const item = Array.isArray(data) ? data[Math.floor(Math.random() * data.length)] : data;
			const myWelcome = typeof item === "object" && item !== null ? (item.terme || item.text || item.name || "Bienvenue") : String(item);

			return myWelcome;
		} catch (error) {
			console.error("Erreur:", error.message);
			return null;
		}
	}

	async myCitation() {
		try {
			const data = await this.fetchJsonWithFallback("/citations-random", "./Collections/citations.json");
			const item = Array.isArray(data) ? data[Math.floor(Math.random() * data.length)] : data;
			const myCitation = typeof item === "object" && item !== null ? (item.name || item.citation || item.text || "") : String(item);

			const el = document.querySelector("#myCitation");
			if (el && myCitation) {
				const suffix = /[!?.]\s*$/.test(myCitation) ? "  " : "!  ";
				el.textContent = myCitation + suffix;
			}
		} catch (error) {
			return console.error("Erreur:", error.message);
		}
	}

	async myCalendar() {
		try {
			const now = new Date();
			const dd = String(now.getDate()).padStart(2, "0");
			const mm = String(now.getMonth() + 1).padStart(2, "0");
			const yyyy = now.getFullYear();
			const hh = String(now.getHours()).padStart(2, "0");
			const min = String(now.getMinutes()).padStart(2, "0");
			const ss = String(now.getSeconds()).padStart(2, "0");

			const data = await this.fetchJsonWithFallback(
				`/calendar/${dd}-${mm}-${yyyy}/${hh}:${min}:${ss}/`,
				"./Collections/calendar.json"
			);

			let names = [];
			if (data?.tabCalendar?.Day) {
				const fn = data.tabCalendar.Day.FirstName || [];
				const st = data.tabCalendar.Day.Saint || [];
				names = [...fn, ...st].filter((v) => v && v !== "NULL");
			} else if (data?.ephemeride?.[mm]?.[dd]) {
				const dayInfo = data.ephemeride[mm][dd];
				names = [...(dayInfo.prenom || []), ...(dayInfo.saint || [])].filter((v) => v && v !== "NULL");
			} else if (data?.Prenoms?.[mm]?.[dd]) {
				names = data.Prenoms[mm][dd].filter((v) => v && v !== "NULL");
			}

			const el = document.querySelector("#myDatation");
			if (el && names.length > 0) {
				const uniqueNames = [...new Set(names)];
				el.textContent = `Saint(s) : ${uniqueNames.slice(0, 3).join(", ")} - `;
			}
		} catch (error) {
			return console.error("Erreur:", error.message);
		}
	}

	async myReadme() {
		try {
			const response = await fetch("./README.md", this.myInit);

			if (!response.ok) throw new Error("Fichier README.md non trouvé");
			const text = await response.text();

			if (typeof showdown !== "undefined") {
				showdown.setFlavor("github");
				const converter = new showdown.Converter();

				converter.setOption("noHeaderId", "true");
				const html = converter.makeHtml(text);

				const container = document.querySelector("#myReadMe>.my-shell-content");
				if (container) container.innerHTML = html;
			}
		} catch (error) {
			return console.error("Erreur:", error.message);
		}
	}

	async textToASCII(T = document.title, L = 4, H = 5, char = "#") {
		const alpha = " -_!.ABCDEFGHIJKLMNOPQRSTUVWXYZ?";
		const tmp = T.trim().split("");
		let ROW = "";

		if (!this.asciiTemplate) {
			const response = await fetch("./Collections/ascii.txt", this.myInit);
			if (!response.ok) throw new Error("Fichier ascii.txt non trouvé");
			this.asciiTemplate = await response.text();
		}

		const lines = this.asciiTemplate.split("\n");
		for (const buffer of lines) {
			if (!buffer.trim()) continue;

			for (const c of tmp) {
				const position = alpha.indexOf(c.toUpperCase());
				const pos = position !== -1 ? position : 32;
				ROW += buffer.slice(pos * L, pos * L + L);
			}
			ROW += "\n";
		}
		return ROW.replace(/#/g, char);
	}

	async loopTxt2ASCII(T = document.title, L = 4, H = 5, char = "#") {
		try {
			const ROW = await this.textToASCII(T, L, H, char);
			const outputEl = document.getElementById("output");
			if (outputEl) outputEl.textContent = ROW;

			const htmlEl = document.querySelector("html");
			if (htmlEl && htmlEl.parentNode) {
				const monCommentaire = document.createComment(`\n${ROW}`);
				htmlEl.parentNode.insertBefore(monCommentaire, htmlEl);
			}
		} catch (error) {
			return console.error("Erreur:", error.message);
		}
	}
}
