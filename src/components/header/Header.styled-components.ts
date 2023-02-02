import styled from "styled-components";

export const NavBar = styled.header`
	width: 100vw;
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
	background-color: ${({ theme }) => theme.elements};
	padding: 1.9rem 1rem;
	position: fixed;
	z-index: 999;

	h1 {
		margin: 0;
		font-size: 0.85rem;
		color: ${({ theme }) => theme.text};
	}

	@media only screen and (min-width: 1440px) {
		padding: 1.5rem 5rem;
		h1 {
			font-size: 1.5rem;
		}
	}
`;

export const ContainerIconDrop = styled.div`
	width: 25%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: ${({ theme }) => theme.text};

	svg {
		width: 0.9rem;
		fill: ${({ theme }) => theme.text};
	}

	p {
		font-size: 0.78rem;
	}

	@media only screen and (min-width: 1440px) {
		width: 8.4%;

		svg {
			width: 1rem;
		}

		p {
			font-size: 1.05rem;
		}
	}
`;