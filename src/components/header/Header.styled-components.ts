import styled from "styled-components";

export const NavBar = styled.header`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
	background-color: ${({ theme }) => theme.elements};
	padding: 1.5rem 1rem;

	h1 {
		margin: 0;
		font-size: 1rem;
		color: ${({ theme }) => theme.text};
	}
`;

export const ContainerIcon = styled.div`
	width: 30%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: ${({ theme }) => theme.text};

	svg {
		width: 1.5rem;
		color: ${({ theme }) => theme.text};
	}
`;
