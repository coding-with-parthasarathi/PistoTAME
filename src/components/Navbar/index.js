// components/Navbar/index.js
import './index.css';
import React from "react";
import MediaQuery from 'react-responsive';
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
	return (
		<>
			<MediaQuery maxDeviceWidth={450}>
			<Nav style={{float:'right'}}>
			<CDropdown style={{paddingRight:'40px', height:'60px', paddingTop:'20px'}}>
				<link rel="preconnect" href="https://fonts.googleapis.com"/>
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
				<link href="https://fonts.googleapis.com/css2?family=Kode+Mono&display=swap" rel="stylesheet"/>
					<CDropdownToggle color='warning' style={{fontFamily:'Kode Mono', fontSize:'17.5px', color:'black'}}>Register</CDropdownToggle>
					<CDropdownMenu>
						<CDropdownItem href="https://docs.google.com/forms/d/e/1FAIpQLSc3zESJSABkjQszE6G8kbf_zU1ZAP3-ZV_A-nSoDFLprFsrmw/viewform">Events</CDropdownItem>
						<CDropdownItem href="https://docs.google.com/forms/d/e/1FAIpQLSfCRjvelgLIWtuww32OcJlopjmBNhnEYzbjpHLbzzFO212CXA/viewform">Workshops</CDropdownItem>
					</CDropdownMenu>
			</CDropdown>
			<CDropdown>
				<CDropdownToggle color='black'><Bars/></CDropdownToggle>
				<CDropdownMenu style={{backgroundColor:'black'}}>
				<NavLink to="/home">
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
				</Nav>	
				</MediaQuery>
			<Nav>
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
						<CDropdownToggle color='warning' style={{fontFamily:'Kode Mono', fontSize:'17.5px', color:'black'}}>Register</CDropdownToggle>
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
		</>
	);
};

export default Navbar;
