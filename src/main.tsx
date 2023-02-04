import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ContextProvider } from "./context";
import { Suspense } from "react";
import { Loading } from "./components";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<Suspense fallback={<Loading />}>
		<ContextProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ContextProvider>
	</Suspense>
);
