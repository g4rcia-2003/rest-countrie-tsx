import styled from "styled-components";
export const LayoutInfoCountrie = styled.section`
	padding: 2.5rem 1.75rem;
	position: relative;
	min-height: calc(100vh - 5rem);
	top: 5rem;
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
	width: 100%;
	gap: 3.46rem;

	& .infoCountrie {
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 3.45rem;
	}

	a {
		width: 32.5%;
		max-width: 6.43rem;
	}

	@media only screen and (min-width: 1000px) {
		gap: 6rem;

		& .infoCountrie {
			flex-direction: row;
			gap: 5rem;
		}
	}

	@media only screen and (min-width: 1440px) {
		padding: 5rem 5.1rem;
		gap: 5rem;

		& .infoCountrie {
			flex-direction: row;
			gap: 9rem;
		}

		a {
			width: 10.6%;
			max-width: 8.43rem;
		}
	}
`;
