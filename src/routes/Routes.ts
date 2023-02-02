import { lazy, LazyExoticComponent } from "react";
import Countries from "../pages/countries/Countries";

type JSXComponent = () => JSX.Element;

interface Route {
	path: string;
	Component: LazyExoticComponent<JSXComponent> | JSXComponent;
	name: string;
	children?: Route[];
}

export const routes: Route[] = [
	{
		path: "/",
		Component: Countries,
		name: "home",
	},
	{
		path: "/:countrie",
		Component: lazy(() => import("@/pages/countrie/Countrie")),
		name: "Info-Countrie",
	},
];
