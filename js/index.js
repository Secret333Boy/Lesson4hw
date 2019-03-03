/*Сделать транслитеризацию*/
const ru = ['а','б','в','г','д','е','ё','ж','з','и','й','к','л','м','н','о','п','р','с','т','у','ф','х','ц','ч','ш','щ','ы','э','ю','я','ъ','ь'];
const lat = ['a','b','v','g','d','e','e','j','z','i','y','k','l','m','n','o','p','r','s','t','u','f','h','c','ch','sh','shch','y','e','yu','ya','',''];

var text = prompt('This service will make translitaration of yout text:', '');

function isUpperCase(char) {
		if (is_ru(char.toLowerCase()) && char === char.toUpperCase()) {
			return true;
		} else{
			return false;
		}
}

var upperLettersID = [];

for (var i = 0; i < text.length; i++) {
	if (isUpperCase(text[i])) {
		upperLettersID.push(i);
	}
}
text = text.toLowerCase();

function is_ru(char) {
	if (ru.indexOf(char) != -1) {
		return true;
	} else{
		return false;
	}
}

function translitarate(str) {
	var result = '';
	for (var i = 0; i < str.length; i++) {
		if (is_ru(str[i])) {
			var id = ru.indexOf(str[i]);
			result += upperLettersID.indexOf(i) != -1 ? `${lat[id][0].toUpperCase()}${lat[id].substring(1, lat[id].length)}` : lat[id];
		} else{
			result += upperLettersID.indexOf(i) != -1 ? str[i].toUpperCase() : str[i];
		}
	}
	return result;
}

console.log(translitarate(text));