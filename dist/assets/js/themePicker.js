const themePicker = document.getElementById('js-theme-picker');

themePicker.addEventListener('change', function changeTheme(event){

	for (let i = 0; i < event.target.options.length; i++) {

		document.body.classList.remove(event.target.options[i].value);

	}

	setTheme(event.target.value);

});

function setTheme(value) {
	sessionStorage.setItem('edmill-theme', value);
	document.body.classList.add(value);
};

const theme = localStorage.getItem('edmill-theme');

if (theme) {
	sessionStorage.value = theme;
	setTheme(theme);
};
