import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ContextProvider } from "./context";
import { Suspense } from "react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<Suspense fallback={<p>Loading ...</p>}>
		<ContextProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ContextProvider>
	</Suspense>
);
