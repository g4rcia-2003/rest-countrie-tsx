import { APIInterface, getData } from "@/api";
import { BackIcon } from "@/icons";
import { LayoutInfoCountrie } from "@/layouts";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useRemoveAccent } from "../../hooks/useRemoveAccent";
import {
	Button,
	ImageCountrie,
	InfoCountrie,
} from "./Countrie.styled-components";

interface Currencie {
	name: string;
}

interface Languages {
	language: string[];
}

const Countrie = () => {
	const { countrie } = useParams();
	const [data, setData] = useState<APIInterface>();
	const [currencies, setCurrencies] = useState<Currencie[]>();
	const [language, setLanguage] = useState<Languages[]>();

	useEffect(() => {
		const res = useRemoveAccent(countrie);
		getData(`name/${res}?fullText=true`)
			.then(data => {
				setData(data[0]);
				setCurrencies(
					Object.values(data[0].currencies).map(currencies => currencies.name)
				);

				setLanguage(Object.values(data[0].languages));
			})
			.catch(err => {
				console.error(err);
			});
	}, []);

	return (
		<LayoutInfoCountrie>
			<Link to={"/"}>
				<Button>
					<BackIcon />
					<p>Back</p>
				</Button>
			</Link>
			<div className='infoCountrie'>
				<ImageCountrie>
					<img src={data?.flags.png} alt={`Flag Image ${data?.name}`} />
				</ImageCountrie>
				<InfoCountrie>
					<div className='data'>
						<div className='one'>
							<h2>{data?.name.common}</h2>
							<p>
								<span>Native Name:</span> {data?.name.official}
							</p>
							<p>
								<span>Population:</span> {data?.population.toLocaleString("en")}
							</p>
							<p>
								<span>Region:</span> {data?.region}
							</p>
							<p>
								<span>Sub Region:</span> {data?.subregion}
							</p>
							<p>
								<span>Capital:</span> {data?.capital}
							</p>
						</div>
						<div className='two'>
							<p>
								<span>Top Level Domain:</span> {data?.tld[0]}
							</p>
							<p>
								<span>Currencies:</span>{" "}
								{currencies?.map((x, i) => (
									<span key={i}>
										{x as unknown as string}
										{i === currencies.length && ","}
									</span>
								))}
							</p>
							<div className='languages'>
								<p>
									<span>Languages:</span>
									{language?.map((x, i) => (
										<span key={i}>
											{" "}
											{x as unknown as string} {i === language.length && ","}{" "}
										</span>
									))}
								</p>
							</div>
						</div>
					</div>
					<div className='border-countries'>
						<h2>Border Countries:</h2>
						<div className='countries'>
							{data?.borders.map(i => (
								<span className='countrie' key={i}>
									{i}
								</span>
							))}
						</div>
					</div>
				</InfoCountrie>
			</div>
		</LayoutInfoCountrie>
	);
};

export default Countrie;
