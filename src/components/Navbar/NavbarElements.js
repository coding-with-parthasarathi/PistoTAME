// components/Navbar/navbarElements.js
//https://images.weserv.nl/?url=i.imgur.com/6QJjYMe.jpg
import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
export const Nav = styled.nav`
	background: black;
	height: 85px;
	display: flex;
	justify-content: center;
	padding: 0.2rem calc((100vw - 1000px) / 2);
	z-index: 12;
	/* Third Nav */
	/* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
	color: white;
	display: flex;
	align-items: center;
	text-decoration: none;
	width:max-content;
	padding: 0 3rem;
	height: 25%;
	@import url('https://fonts.googleapis.com/css2?family=Kode+Mono:wght@400&display=swap');
	font-family: 'Kode Mono';
	font-size: 17.5px;
	cursor: pointer;
    &:hover {
		transition: all 0.2s ease-in-out;
		color: yellow;
	}
`;

export const Bars = styled(FaBars)`
	display: none;
	color: white;
	@media screen and (max-width: 1370px) {
		display: block;
		float: right;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 75%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`;

export const NavMenu = styled.div`
	display: flex;
	align-items: center;
	width: fit-content;
	/* Second Nav */
	/* margin-right: 24px; */
	/* Third Nav */
	@media screen and (max-width: 1370px) {
		display: none;
	}
`;