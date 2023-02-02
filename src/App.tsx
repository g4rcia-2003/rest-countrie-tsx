import { ThemeProvider } from "styled-components";
import Header from "@/components/header/Header";
import { useContext } from "react";
import { DataContext } from "@/context";
import { Light, Dark } from "@/styles/theme/theme";
import { GlobalStyle } from "@/styles/GlobalStyles";
import { Route, Routes } from "react-router-dom";
import { Countrie, Countries } from "@/pages";

const App = () => {
	const { theme } = useContext(DataContext);
	const isDark = theme === "Dark";
	return (
		<ThemeProvider theme={isDark ? Dark : Light}>
			<GlobalStyle />
			<Header />

			<Routes>
				<Route path='/' element={<Countries />} index />
				<Route path='/:countrie' element={<Countrie />} />
			</Routes>
		</ThemeProvider>
	);
};

export default App;
