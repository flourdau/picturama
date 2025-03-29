/**	MyTxt2ASCII
 *	@description:	transform string to ASCII art 
*/
export default class MyTxt2ASCII {
	constructor() {this.loopTxt2ASCII()}

	async loopTxt2ASCII(T = document.title, L = 4, H = 5, char = '@') {
		const alpha = " -_!.ABCDEFGHIJKLMNOPQRSTUVWXYZ?";
		const tmp = T.trim().split('');
		let ROW = "";

		try {
			const response = await fetch('./ascii.txt');

			if (!response.ok)
				throw new Error('Fichier ascii.txt non trouvé');

			const text = await response.text();
			const lines = text.split('\n');

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
			document.getElementById('output').textContent = ROW;
		}
		catch (error) {console.error("Erreur:", error.message);}
	}
}