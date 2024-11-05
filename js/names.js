const autoText = document.querySelector('.names');
const names = ['Sagyngali !', 'Sako !'];

let nameIndex = 0;
let characterIndex = 0;

const addText = () => {
	let interval = setInterval(() => {
		characterIndex++;
		autoText.textContent = `${names[nameIndex].slice(0, characterIndex)}`;
		if (characterIndex === names[nameIndex].length) {
			setTimeout(() => {
				clearInterval(interval);
				removeText();
			}, 1000)
		}
	}, 300)
}
addText();
const removeText = () => {
	let interval = setInterval(() => {
		if (autoText.textContent.length) {
			characterIndex--;
			autoText.textContent = `${names[nameIndex].slice(0, characterIndex)}`;
		} else{
			clearInterval(interval);
			nameIndex++;
			if (nameIndex === names.length) {
				nameIndex = 0;
			}
			addText();
		}
	}, 100)
}

