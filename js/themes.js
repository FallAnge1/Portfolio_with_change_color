const barbie = document.querySelectorAll('#barbie-theme');
const green = document.querySelectorAll('#green-theme');
const red = document.querySelectorAll('#red-theme');
const blue = document.querySelectorAll('#blue-theme');


function toggleTheme(theme) {
	const themes = ['barbie-theme', 'green-theme', 'red-theme', 'blue-theme']
	if (document.body.classList.contains(theme)) {
		document.body.classList.remove(theme);
	}
	else {
		document.body.classList.remove(...themes);
		document.body.classList.add(theme);
	}
}
barbie.forEach(button => {
	button.addEventListener('click', () =>
	{
		toggleTheme('barbie-theme');
	})
});
green.forEach(button => {
		button.addEventListener('click', () =>
		{
			toggleTheme('green-theme');
		})
});
red.forEach(button => {
	button.addEventListener('click', () =>
	{
		toggleTheme('red-theme');
	})
});
blue.forEach(button => {
	button.addEventListener('click', () =>
	{
		toggleTheme('blue-theme');
	})
});