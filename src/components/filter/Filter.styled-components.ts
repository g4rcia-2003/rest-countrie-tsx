import styled from "styled-components";
export const FilterStyled = styled.div`
	width: 100%;
	background-color: ${({ theme }) => theme.elements};
	position: relative;
	color: ${({ theme }) => theme.text};
	display: flex;
	border-radius: 0.3rem;
	padding: 1rem 1.38rem;
	justify-content: space-between;

	p {
		font-size: 0.7rem;
	}

	svg {
		width: 100%;
	}

	@media only screen and (min-width: 1440px) {
		padding: 1.11rem 1.4rem;

		p {
			font-size: 0.9rem;
		}
	}
`;

export const ContainerIcon = styled.div`
	width: 1rem;
	height: 1rem;
`;
