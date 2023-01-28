/* Colors App */
const darkModeElements = "hsl(209, 23%, 22%)";
const darkModeBackground = "hsl(207, 26%, 17%)";
const lightModeText = "hsl(200, 15%, 8%)";
const lightModeInput = "hsl(0, 0%, 52%)";
const lightModeBackground = "hsl(0, 0%, 98%)";
const darkModeText = "hsl(0, 0%, 98%)";
const lightModeElements = "hsl(0, 0%, 100%)";

/* Weights App */
const semiBold = 300;
const bold = 600;
const ExtraBold = 800;

export const Dark = {
	elements: darkModeElements,
	body: darkModeBackground,
	input: darkModeElements,
	text: darkModeText,
	extraBold: ExtraBold,
	semiBold: semiBold,
	bold: bold,
};

export const Light = {
	elements: lightModeElements,
	body: lightModeBackground,
	input: lightModeInput,
	text: lightModeText,
	extraBold: ExtraBold,
	semiBold: semiBold,
	bold: bold,
};
