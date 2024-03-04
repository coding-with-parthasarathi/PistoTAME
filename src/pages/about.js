import React from 'react';
import { CRow,CCol,CCard,CCardImage,CCardBody,CCardTitle,CCardText} from '@coreui/react';
import './neon.css';
import './about.css';
import demonImage from '../assets/demon.jpg';
import '@coreui/coreui/dist/css/coreui.min.css';
const About = () => {
	return (
		<div className='about'
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "centre",
				alignItems: "centre"
			}}
		>
			<link rel="preconnect" href="https://fonts.googleapis.com"/>
			<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
			<link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@700&display=swap" rel="stylesheet"/>
			<div class="logo"><b><span>About</span><span> Us</span></b></div>
			<center>
			<CCard className="mb-3" style={{ display: "flex", flexDirection: "column",maxWidth: '90%'}}>
  				<CRow className="g-0">
					<CCol md={4}>
					<CCardImage src={'https://mitindia.edu/Mit_Codes_custom/MIT_banner/img/landscape/01.jpg'} height={300}/>
					</CCol>
					<CCol md={8}>
					<CCardBody>
						<CCardTitle style={{ fontFamily:"Rajdhani",fontSize: "30px", color:'black'}}>Madras Institute of Technology</CCardTitle>
						<CCardText style={{ fontFamily:"Times New Roman",fontSize: "25px", color:"black"}}>
						A pioneer in technical education, Madras Institute of Technology is one of the four department universities of 
						Anna University and is a forerunner in various engineering fields. Established in 1949, it produces top notch
						engineers as well as elite artists who excel in their respective disciplines. MIT has received many awards which
						includes an award for the Best Overall Performance,awarded by ISTE during the year 1999.
						</CCardText>
					</CCardBody>
					</CCol>
  				</CRow>
			</CCard>
			<CCard className="mb-4" style={{ display: "flex", flexDirection: "column",maxWidth: '90%'}}>
  				<CRow className="g-0">
					<CCol md={8}>
					<CCardBody>
						<CCardTitle style={{ fontFamily:"Rajdhani",fontSize: "30px", color:'black'}}>Pistoboltz</CCardTitle>
						<CCardText style={{ fontFamily:"Times New Roman",fontSize: "25px", color:"black"}}>
						Pistoboltz, MIT's annual symposium by Mechanical engineers, provides a vital platform for Tamilnadu's aspiring engineers since 2015. Fostering collaboration with renowned companies and individuals, it promotes knowledge exchange and skill development. Pistoboltz highlights MIT and Anna University's expertise, facilitating learning for private organization students. This annual event serves as a social gathering for sharing knowledge and showcasing technological advancements.
						</CCardText>
					</CCardBody>
					</CCol>
					<CCol md={4}>
					<CCardImage src={demonImage} height={310}/>
					</CCol>
  				</CRow>
			</CCard>
			</center>
		</div>
	);
};
export default About;