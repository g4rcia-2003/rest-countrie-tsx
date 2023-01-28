import { ThemeProvider } from "styled-components";
import Header from "@/components/header/Header";
import { useContext } from "react";
import { DataContext } from "@/context";
import { Light, Dark } from "./styles/theme/theme";
import { GlobalStyle } from "./styles/GlobalStyles";

const App = () => {
	const { theme } = useContext(DataContext);
	const isDark = theme === "Dark";
	return (
		<ThemeProvider theme={isDark ? Dark : Light}>
			<GlobalStyle />
			<Header />
		</ThemeProvider>
	);
};

export default App;
