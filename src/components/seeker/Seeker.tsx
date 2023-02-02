import { DataContext } from "@/context";
import { SearchIcon } from "@/icons";
import { ChangeEvent, useContext } from "react";
import { SeekerComponent } from "./Seeker.styled-components";

const Seeker = () => {
	const { setInputValue, inputValue } = useContext(DataContext);

	const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setInputValue(value);
	};
	return (
		<SeekerComponent>
			<SearchIcon />
			<input
				placeholder='Search for a country...'
				value={inputValue}
				onChange={e => changeInput(e)}
			/>
		</SeekerComponent>
	);
};

export default Seeker;
