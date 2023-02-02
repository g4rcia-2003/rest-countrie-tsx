import React, { createContext, useEffect, useState } from "react";
import { childrenPropsInterfaces, dataContextInterfaces } from "./interface";

export const DataContext = createContext<dataContextInterfaces>(
	{} as dataContextInterfaces
);

export const ContextProvider: React.FC<childrenPropsInterfaces> = ({
	children,
}) => {
	const [theme, setTheme] = useState<string>(localStorage.theme);
	const [regionSelected, setRegionSelected] = useState<string>("All");
	const [inputValue, setInputValue] = useState<string>("");

	useEffect(() => {
		localStorage.setItem("theme", theme);
	}, [theme]);

	const changeTheme = () => {
		setTheme(theme === "Light" ? "Dark" : "Light");
	};

	return (
		<DataContext.Provider
			value={{
				changeTheme,
				theme,
				setRegionSelected,
				setInputValue,
				regionSelected,
				inputValue,
			}}
		>
			{children}
		</DataContext.Provider>
	);
};
