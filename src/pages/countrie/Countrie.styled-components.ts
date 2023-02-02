import styled from "styled-components";

export const Button = styled.button`
	background-color: ${({ theme }) => theme.elements};
	border: none;
	display: flex;
	width: 100%;
	padding: 0.45rem 1.4rem;
	border-radius: 0.2rem;
	justify-content: space-between;
	align-items: center;

	svg {
		color: ${({ theme }) => theme.text};
		width: 1.1rem;
	}

	p {
		color: ${({ theme }) => theme.text};
	}

	@media only screen and (min-width: 1440px) {
		box-sizing: border-box;
		padding: 0.65rem 2.2rem;

		svg {
			width: 1.2rem;
		}
		p {
			font-size: 1rem;
		}
	}
`;

export const ImageCountrie = styled.div`
	width: 100%;
	height: 14.25rem;
	position: relative;
	top: 0.55rem;

	img {
		width: 100%;
		height: 100%;
	}

	@media only screen and (min-width: 1440px) {
		width: 43.8%;
		height: 25rem;
		top: 0;
	}
`;

export const InfoCountrie = styled.div`
	color: ${({ theme }) => theme.text};
	display: flex;
	flex-direction: column;
	gap: 1.45rem;

	p {
		font-size: 0.85rem;
	}

	& .data {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;

		span {
			font-weight: 300;
		}

		& .one {
			h2 {
				font-size: 1.35rem;
				margin-bottom: 0.65rem;
			}

			display: flex;
			flex-direction: column;
			gap: 0.81rem;
		}

		& .two {
			margin-top: 1.4rem;
			display: flex;
			flex-direction: column;
			gap: 0.81rem;

			& .language {
				p {
					font-size: 0.85rem;
				}
			}
		}
	}

	& .languages {
		span {
			font-weight: 300;
		}

		& .language {
			margin-left: 0.3rem;
		}
	}

	& .border-countries {
		margin-top: 1rem;
		display: flex;
		flex-direction: column;
		gap: 0.8rem;
		h2 {
			font-size: 0.99rem;
			font-weight: 300;
		}

		& .countries {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			grid-gap: 5px;
			width: 100%;

			& .countrie {
				background-color: ${({ theme }) => theme.elements};
				width: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				color: ${({ theme }) => theme.text};
			}
		}
	}

	@media only screen and (min-width: 1440px) {
		justify-content: center;

		p {
			font-size: 0.9rem;
		}

		& .data {
			flex-direction: row;
			height: 16rem;
			gap: 11.5rem;
			& .one {
				gap: 0.7rem;
				h2 {
					font-size: 1.88rem;
					margin-bottom: 1rem;
				}
			}

			& .two {
				margin-top: 4.5rem;
			}
		}

		& .border-countries {
			h2 {
				font-size: 1rem;
				font-weight: 600;
			}

			& .countries {
				grid-template-columns: repeat(4, 1fr);
			}
		}
	}
`;
