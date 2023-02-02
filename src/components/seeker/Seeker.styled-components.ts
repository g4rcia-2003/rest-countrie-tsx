import styled from "styled-components";
export const SeekerComponent = styled.section`
	width: 100%;
	background-color: ${({ theme }) => theme.elements};
	display: flex;
	justify-content: space-between;
	position: relative;
	padding: 0.95rem 1.75rem;
	border-radius: 0.25rem;
	box-shadow: 1px 1px 1em rgba(0, 0, 0, 0.2);

	svg {
		width: 1.1rem;
		color: ${({ theme }) => theme.text};
	}

	input {
		color: ${({ theme }) => theme.text};
		background-color: transparent;
		border: none;
		width: 85%;
		font-family: "Nunito Sans", sans-serif;

		::placeholder {
			color: ${({ theme }) => theme.text};
			font-size: 0.75rem;
		}
		&:focus {
			outline: none;
		}
	}

	@media only screen and (min-width: 1440px) {
		width: 37.4%;
		padding: 1.05rem 1.8rem;

		input {
			width: 90%;
			font-size: 1rem;

			::placeholder {
				font-size: 0.9rem;
			}
		}
	}
`;
