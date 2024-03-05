import React from 'react';
import './neon.css';
import pic1 from './pic1.png';
import pic2 from './pic2.png';
import pic3 from './pic3.png';
const Tame = () => {
	return (
		<div className='tame'
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center"
			}}
		>
			<div class="logo"><b>The<span> Association</span> of<span> Mechanical Engineers</span></b></div>
		<center style={{fontFamily:'Times New Roman', fontSize:'30px', color:'white', margin: '30px'}}>
		The Association of Mechanical Engineers or TAME is an
organization started in the year of 2018. The
association consists of more than 250 members to start
with and its numbers would only increase in the
foreseeable future. Owing to the grand reception
TAME got during the inauguration, a technical
symposium was conducted which benefited the
association members and the people who participated
in it through the exposure to the latest technologies
available in the college facility.
		<div style={{display: "flex", flexDirection: "row",  padding: "20px", justifyContent: 'space-evenly', alignItems: 'center', whiteSpace:'10px'}}>
		<img src={pic1} alt='pic1' height='350px' />
		<img src={pic2} alt='pic2' height='350px'/>
		<img src={pic3} alt='pic3' height='350px'/>
		</div>
		</center>	
		</div>
	);
};
export default Tame;