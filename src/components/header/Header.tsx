import { DataContext } from "@/context";
import { useContext } from "react";
import DarkIcon from "../icons/DarkIcon";
import { ContainerIcon, NavBar } from "./Header.styled-components";

const Header = () => {
	const { changeTheme } = useContext(DataContext);

	return (
		<NavBar>
			<h1>Where in the world?</h1>
			<ContainerIcon onClick={changeTheme}>
				<DarkIcon />
				<p>Dark Mode</p>
			</ContainerIcon>
		</NavBar>
	);
};

export default Header;
