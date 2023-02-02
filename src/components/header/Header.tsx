import { DataContext } from "@/context";
import { useContext } from "react";
import { DarkIcon } from "@/icons";
import { ContainerIconDrop, NavBar } from "./Header.styled-components";

const Header = () => {
	const { changeTheme } = useContext(DataContext);

	return (
		<NavBar>
			<h1>Where in the world?</h1>
			<ContainerIconDrop onClick={changeTheme}>
				<DarkIcon />
				<p>Dark Mode</p>
			</ContainerIconDrop>
		</NavBar>
	);
};

export default Header;
