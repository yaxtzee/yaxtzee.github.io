let theme = localStorage.getItem("theme") ?? "light"

const themeData = {
	dark: {
		bgColour: "#202020",
		textColour: "#ffffff",
		imageInvert: 1,
	},
	light: {
		bgColour: "#ffffff",
		textColour: "#000000",
		imageInvert: 0,
	}
}


function updateTheme() {
	const vars = themeData[theme]
	const root = document.documentElement

	for (const i in vars) root.style.setProperty(`--${i}`, vars[i])
}

function toggleTheme() {
	theme = theme === "dark" ? "light" : "dark"
	localStorage.setItem("theme", theme)

	updateTheme()
}

updateTheme()
