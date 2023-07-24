
export function themePicker() {

	const themePickerEl = document.getElementById('js-theme-picker');

	themePickerEl.addEventListener('change', function changeTheme(event){

		setTheme(event.target.value);

	});

	function setTheme(value) {

		localStorage.setItem('edmill-theme', value);

		for (let i = 0; i < themePickerEl.options.length; i++) {

			document.body.classList.remove(themePickerEl.options[i].value);

		}

		document.body.classList.add(value);
	};

	const theme = localStorage.getItem('edmill-theme');

	if (theme) {

		themePickerEl.value = theme;

		setTheme(theme);

	} else {

		setTheme(themePickerEl.value);

	};

}