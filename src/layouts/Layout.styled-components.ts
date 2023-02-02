import styled from "styled-components";
export const AppStyled = styled.section`
	width: 100%;
	padding: 1.45rem 4%;
	box-sizing: border-box;
	position: relative;
	top: 5rem;
	min-height: calc(100vh - 5rem);
	display: flex;
	flex-direction: column;
	gap: 2.05rem;

	@media only screen and (min-width: 1440px) {
		padding: 3rem 5.5%;
		gap: 3rem;
	}
`;
