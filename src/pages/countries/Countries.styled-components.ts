import styled from "styled-components";
export const CountriesStyled = styled.section`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr;
	grid-column-gap: 0px;
	grid-row-gap: 3rem;

	@media only screen and (min-width: 1440px) {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: 1fr;
		grid-column-gap: 4.7rem;
		grid-row-gap: 3rem;
	}
`;
