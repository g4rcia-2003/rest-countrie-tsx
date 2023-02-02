export interface childrenPropsInterfaces {
	children: JSX.Element | JSX.Element[];
}
export interface dataContextInterfaces {
	changeTheme: () => void;
	theme: string;
	setRegionSelected: Dispatch<SetStateAction<string>>;
	setInputValue: Dispatch<SetStateAction<string>>;
	regionSelected: string;
	inputValue: string;
}
