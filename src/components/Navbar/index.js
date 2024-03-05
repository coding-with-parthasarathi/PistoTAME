// components/Navbar/index.js
import './index.css';
import React from "react";
import { useMediaQuery } from 'react-responsive';
import { CDropdown,CDropdownToggle, CDropdownItem,CDropdownMenu} from '@coreui/react';
import pb from './logo.gif';
import tame from './tame.png';
import '@coreui/coreui/dist/css/coreui.min.css';
import {
	Nav,
	NavLink,
	Bars,
	NavMenu
} from "./NavbarElements";

const Navbar = () => {
	const isMobile = useMediaQuery({ maxWidth: 1370 });
	return (
		<>
			{isMobile ? (
			<Nav className="navbar-expand-lg" style={{position:'fixed', width:'100vw', justifyContent: 'space-between'}}>
			<CDropdown style={{paddingLeft:'40px'}}>
				<CDropdownToggle color='black'><Bars/></CDropdownToggle>
				<CDropdownMenu style={{backgroundColor:'black', textAlign:'center'}}>
				<NavLink to="/home" style={{textAlign:'center'}}>
						Home
					</NavLink>
                    <NavLink to="/about" >
						About Us
					</NavLink>
					<NavLink to="/events" activeStyle>
						Events & Workshops
					</NavLink>
					<NavLink to="/team" activeStyle>
						Team
					</NavLink>
					<NavLink to="/sponsors" activeStyle>
						Sponsors
					</NavLink>
					<NavLink to="/contacts" activeStyle>
						Contact Us
					</NavLink>
					<NavLink to="/tame">
						Tame
					</NavLink>
				</CDropdownMenu>
				</CDropdown>
				<CDropdown style={{height:'60px', paddingTop:'20px', paddingRight:'20px'}}>
				<link rel="preconnect" href="https://fonts.googleapis.com"/>
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
				<link href="https://fonts.googleapis.com/css2?family=Kode+Mono&display=swap" rel="stylesheet"/>
					<CDropdownToggle color='warning' style={{fontFamily:'Kode Mono', fontSize:'17.5px', color:'black', borderRadius:'6px'}}>Register</CDropdownToggle>
					<CDropdownMenu>
						<CDropdownItem href="https://docs.google.com/forms/d/e/1FAIpQLSc3zESJSABkjQszE6G8kbf_zU1ZAP3-ZV_A-nSoDFLprFsrmw/viewform">Events</CDropdownItem>
						<CDropdownItem href="https://docs.google.com/forms/d/e/1FAIpQLSfCRjvelgLIWtuww32OcJlopjmBNhnEYzbjpHLbzzFO212CXA/viewform">Workshops</CDropdownItem>
					</CDropdownMenu>
			</CDropdown>
				</Nav>	
			) : (
			<Nav className="navbar-expand-lg">
				<NavMenu>
					<NavLink to="/home">
						<img src={pb} alt='pb' height='85px'/>
					</NavLink>
                    <NavLink to="/about" >
						About Us
					</NavLink>
					<NavLink to="/events" activeStyle>
						Events & Workshops
					</NavLink>
					<NavLink to="/team" activeStyle>
						Team
					</NavLink>
					<NavLink to="/sponsors" activeStyle>
						Sponsors
					</NavLink>
					<NavLink to="/contacts" activeStyle>
						Contact Us
					</NavLink>
					<CDropdown>
					<link rel="preconnect" href="https://fonts.googleapis.com"/>
					<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
					<link href="https://fonts.googleapis.com/css2?family=Kode+Mono&display=swap" rel="stylesheet"/>
						<CDropdownToggle color='warning' style={{fontFamily:'Kode Mono', fontSize:'17.5px', color:'black', borderRadius:'6px'}}>Register</CDropdownToggle>
						<CDropdownMenu>
							<CDropdownItem href="https://docs.google.com/forms/d/e/1FAIpQLSc3zESJSABkjQszE6G8kbf_zU1ZAP3-ZV_A-nSoDFLprFsrmw/viewform">Events</CDropdownItem>
							<CDropdownItem href="https://docs.google.com/forms/d/e/1FAIpQLSfCRjvelgLIWtuww32OcJlopjmBNhnEYzbjpHLbzzFO212CXA/viewform">Workshops</CDropdownItem>
						</CDropdownMenu>
					</CDropdown>
					<NavLink to="/tame">
						<img src={tame} alt='tame' height='85px'/>
					</NavLink>
				</NavMenu>
			</Nav>
			)}
		</>
	);
};

export default Navbar;
