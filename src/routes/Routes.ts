import { lazy, LazyExoticComponent } from "react";
import Countries from "../pages/countries/Countries";

type JSXComponent = () => JSX.Element;

interface Route {
	path: string;
	Component: LazyExoticComponent<JSXComponent> | JSXComponent;
	name: string;
	children?: Route[];
}
const InfoCountrieLazy = lazy(
	/* webpackChunkName: "Chunk-Countrie-Info" */ () =>
		import("@/pages/countrie/Countrie")
);
export const routes: Route[] = [
	{
		path: "/",
		Component: Countries,
		name: "home",
	},
	{
		path: "/:countrie",
		Component: InfoCountrieLazy,
		name: "Info-Countrie",
	},
];
