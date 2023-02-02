import { ContainerIcon, FilterStyled } from "./Filter.styled-components";
import { DownIcon, UpIcon } from "@/icons";
import { useState, useContext } from "react";
import { ListContinent } from "./ListContinent";
import { ContinentList } from "@/models";
import { FilterDropDown } from "./FilterDropDown";
import { DataContext } from "@/context";

const Filter = () => {
	const { setRegionSelected, regionSelected } = useContext(DataContext);
	const [dropDown, setDropDown] = useState<boolean>(false);

	const changeRegion = (region: string) => {
		setRegionSelected(region);
		setDropDown(!dropDown);
	};

	return (
		<FilterDropDown>
			<FilterStyled>
				<p>Filter By {regionSelected}</p>
				<ContainerIcon onClick={() => setDropDown(!dropDown)}>
					{dropDown ? <UpIcon /> : <DownIcon />}
				</ContainerIcon>
			</FilterStyled>
			<ListContinent variant={dropDown}>
				<ul>
					{ContinentList.map(
						({ name }) =>
							name !== regionSelected && (
								<li key={name} onClick={() => changeRegion(name)}>
									{name}
								</li>
							)
					)}
				</ul>
			</ListContinent>
		</FilterDropDown>
	);
};

export default Filter;
