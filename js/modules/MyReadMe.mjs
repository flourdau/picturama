/** MyReadMe
 *  @description: Get Readme.md in GitHut et convert markdown to html
*/
export default class MyReadMe {
	constructor() {
		this.tmp = false
		this.data = this.myFetchConvert(this)
	}	
	
	myFetchConvert() {
		const myInit = {
			method: 'GET',
			headers: {"X-Requested-With" : "XMLHttpRequest"}
		}

		fetch("./README.md", myInit)
			.then(function(response) {
				return response.text()
		})
		.then(function(data) {
			showdown.setFlavor('github')
			
			const converter = new showdown.Converter()
			converter.setOption('noHeaderId', 'true')
		
			const html = converter.makeHtml(data)
			document.querySelector('#myReadMe>.my-shell-content').innerHTML = html
		})
	}
}