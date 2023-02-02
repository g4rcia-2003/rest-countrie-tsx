import { Card, Search } from "@/components";
import { CountriesStyled } from "./Countries.styled-components";
import { useState, useEffect, useContext } from "react";
import { APIInterface, getData } from "@/api";
import { DataContext } from "../../context/ContextProvider";
import { useRemoveAccent } from "../../hooks/useRemoveAccent";
import { AppStyled } from "@/layouts";

const Countries = () => {
	const { regionSelected, inputValue, setInputValue } = useContext(DataContext);
	const [data, setData] = useState<APIInterface[]>([]);

	useEffect(() => {
		const res = useRemoveAccent(regionSelected);
		getData(regionSelected === "All" ? `all` : `region/${res}`)
			.then(resp => setData(resp))
			.catch(err => {
				console.log(err);
			});

		setInputValue("");
	}, [regionSelected]);

	useEffect(() => {
		const res = inputValue.toLowerCase();
		getData(res.length === 0 ? "all" : `name/${res}`).then(resp =>
			setData(resp)
		);
	}, [inputValue]);

	return (
		<AppStyled>
			<Search />
			<CountriesStyled>
				{data.map(({ name, flags, population, region, capital }) => (
					<Card
						key={name.common}
						name={name.common}
						img={flags.png}
						population={population}
						region={region}
						capital={capital}
						link={name.official}
					/>
				))}
			</CountriesStyled>
		</AppStyled>
	);
};

export default Countries;
