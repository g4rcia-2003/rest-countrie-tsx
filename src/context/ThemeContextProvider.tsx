import React, { createContext, useEffect, useState } from "react";
import { childrenPropsInterfaces, dataContextInterfaces } from "./interface";

export const DataContext = createContext<dataContextInterfaces>({
	theme: "Light",
	changeTheme() {},
});

export const ThemeContextProvider: React.FC<childrenPropsInterfaces> = ({
	children,
}) => {
	const [theme, setTheme] = useState<string>(localStorage.theme);

	useEffect(() => {
		localStorage.setItem("theme", theme);
	}, [theme]);

	const changeTheme = () => {
		setTheme(theme === "Light" ? "Dark" : "Light");
	};

	return (
		<DataContext.Provider value={{ changeTheme, theme }}>
			{children}
		</DataContext.Provider>
	);
};
