import styled from "styled-components";
export const SearchStyles = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2.55rem;

	@media only screen and (min-width: 1440px) {
		flex-direction: row;
		justify-content: space-between;
	}
`;
