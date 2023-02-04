import styled from "styled-components";
export const CardCountrie = styled.div`
	width: 76.2%;
	margin: auto;
	background-color: ${({ theme }) => theme.elements};
	height: 20.95rem;
	border-radius: 0.3rem;
	box-shadow: 1px 1px 1em rgba(0, 0, 0, 0.2);

	div {
		width: 100%;
		height: 10rem;
		border-top-left-radius: 0.3rem;
		border-top-right-radius: 0.3rem;

		img {
			width: 100%;
			height: 100%;
			border-top-left-radius: 0.3rem;
			border-top-right-radius: 0.3rem;
		}
	}

	@media only screen and (min-width: 600px) {
		width: 100%;
	}
`;

export const DataCard = styled.section`
	color: ${({ theme }) => theme.text};
	padding: 1.6rem 1.4rem;
	display: flex;
	flex-direction: column;
	gap: 0.4rem;

	h2 {
		font-size: 1.1rem;
		font-weight: ${({ theme }) => theme.semibold};
		letter-spacing: 0.01rem;
		margin-bottom: 0.5rem;
	}

	p {
		font-size: 0.8rem;
	}

	b {
		letter-spacing: 0.02rem;
	}
`;
