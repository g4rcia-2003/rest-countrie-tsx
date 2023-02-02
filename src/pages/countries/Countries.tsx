import { Card, Search } from "@/components";
import { CountriesStyled } from "./Countries.styled-components";
import { useState, useEffect, useContext, useRef } from "react";
import { APIInterface, getData } from "@/api";
import { DataContext } from "../../context/ContextProvider";
import { useRemoveAccent } from "../../hooks/useRemoveAccent";
import { AppStyled } from "@/layouts";

const Countries = () => {
	const { regionSelected, inputValue, setInputValue } = useContext(DataContext);
	const [data, setData] = useState<APIInterface[]>([]);
	const [notFound, setNotFound] = useState<boolean>(false);

	const debounceRef = useRef<NodeJS.Timeout>();

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
		debounceRef.current && clearTimeout(debounceRef.current);
		debounceRef.current = setTimeout(() => {
			getData(inputValue.length === 0 ? "all" : `name/${inputValue}`)
				.then(resp => {
					setData(resp);
					setNotFound(false);
				})
				.catch(err => {
					setNotFound(true);
					console.log(err);
				});
		}, 350);
	}, [inputValue]);

	return (
		<AppStyled>
			<Search />
			<CountriesStyled>
				{notFound ? (
					<p>Not Found Countrie</p>
				) : (
					data.map(({ name, flags, population, region, capital }) => (
						<Card
							key={name.common}
							name={name.common}
							img={flags.png}
							population={population}
							region={region}
							capital={capital}
							link={name.official}
						/>
					))
				)}
			</CountriesStyled>
		</AppStyled>
	);
};

export default Countries;
