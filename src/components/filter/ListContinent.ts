import styled from "styled-components";
export const ListContinent = styled.div<{ variant: boolean }>`
	width: 100%;
	border-radius: 0.3rem;
	padding: 0.96rem 1.55rem;
	background-color: ${({ theme }) => theme.elements};
	visibility: ${({ variant }) => (variant ? "visible" : "hidden")};
	z-index: 999;

	ul {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	li {
		list-style: none;
		color: ${({ theme }) => theme.text};
		font-size: 0.75rem;
	}

	@media only screen and (min-width: 1440px) {
		padding: 0.99rem 1.5rem;
		li {
			font-size: 0.95rem;
		}
	}
`;
