import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ThemeContextProvider } from "./context";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<ThemeContextProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</ThemeContextProvider>
);
