const themePicker = document.getElementById('js-theme-picker');

themePicker.addEventListener('change', function changeTheme(event){

	setTheme(event.target.value);

});

function setTheme(value) {

	localStorage.setItem('edmill-theme', value);

	for (let i = 0; i < themePicker.options.length; i++) {

		document.body.classList.remove(themePicker.options[i].value);

	}

	document.body.classList.add(value);
};

const theme = localStorage.getItem('edmill-theme');

if (theme) {

	themePicker.value = theme;

	setTheme(theme);

} else {

	setTheme(themePicker.value);

};
