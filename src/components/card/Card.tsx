import { Link } from "react-router-dom";
import { CardCountrie, DataCard } from "./Card.styled-components";
import { CardProps } from "./CardInterface";

const Cards = ({ img, name, population, region, capital, link }: CardProps) => {
	return (
		<Link to={`/${link}`}>
			<CardCountrie>
				<div>
					<img src={`${img}`} alt={`Image Flag ${name}`} width='100%' />
				</div>
				<DataCard>
					<h2>{name}</h2>
					<p>
						<b>Population:</b> {population.toLocaleString("en")}
					</p>
					<p>
						<b>Region:</b> {region}
					</p>
					<p>
						<b>Capital:</b> {capital}
					</p>
				</DataCard>
			</CardCountrie>
		</Link>
	);
};

export default Cards;
