// events.js
import React from "react";
import { CRow, CCol, CCard, CCardImage, CCardText, CCardTitle, CCardImageOverlay } from '@coreui/react';
import './neon.css';
import './events.css';
import '@coreui/coreui/dist/css/coreui.min.css';
const Events = () => {
    return (
        <div className='events'
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center"
			}}
		>
			<div class="logo"><b><span>Events</span> & <span>Workshops</span></b></div>
				<CCol xs={12} md={6} className='grid'>
					<CCard>
					<CCardImage orientation="top" src={'https://t4.ftcdn.net/jpg/02/90/56/89/360_F_290568984_FNoCgHBmnUUvzl2qPBL9G4vtIWb06AGB.jpg'} />
					<CCardImageOverlay>
						<CCardTitle className='title'>Events</CCardTitle>
						<CCardText>
						<ol>
						<div className='list'>
						<li><a id='link' href="https://drive.google.com/file/d/18fjypaKnQUJrTUYJSuFCntffZHqn7vyg/view?usp=sharing">Mech Connection</a></li>
						<li><a id='link' href="https://drive.google.com/file/d/1CAaoOEwIhHlRwssvnQGg1omusr2IFVU1/view?usp=sharing">Design Master</a></li>
						<li><a id='link' href="https://drive.google.com/file/d/1bk6F_nnGDGsBcg5sGW3AhW2H7mVC7tim/view?usp=sharing">Tech Showdown</a></li>
						<li><a id='link' href="https://drive.google.com/file/d/1JQxlmHzuZBINNG2zwollkkxWRMGenf5L/view?usp=sharing">TAME Shark Tank</a></li>
						</div>	
						<div className='list2'>
						<li><a id='link' href="https://drive.google.com/file/d/18KRXJ3BCsFKmTVcFN5_M4UK8RAMIHdIi/view?usp=sharing">Paper Presentation</a></li>
						<li><a id='link' href="https://drive.google.com/file/d/1Juy1t1ckv0FA3Oi-yNWEIwJaJ0RJgIf3/view?usp=sharing">Line Follower racing</a></li>
						<li><a id='link' href="https://drive.google.com/file/d/10qXg4P7KfmVOyvmRH05c0Zg2FfN3uxUO/view?usp=sharing">Robo wrestling</a></li>
						<li><a id='link' href="https://drive.google.com/file/d/1WpIxBtepIB7nbxicZOb8Fm5COEWOicRZ/view?usp=sharing">F1 Quiz</a></li>
                        </div>
                        </ol>
                        </CCardText>
					</CCardImageOverlay>
					</CCard>
				</CCol>
				<CCol xs className='grid'>
					<CCard>
					<CCardImage orientation="top" src={'https://t4.ftcdn.net/jpg/05/71/83/47/360_F_571834789_ujYbUnH190iUokdDhZq7GXeTBRgqYVwa.jpg'} />
					<CCardImageOverlay>
						<CCardTitle className='title'>Workshops</CCardTitle>
						<CCardText>
						<ol>
						<div className='list'>
						<li><a id='link' href="https://drive.google.com/file/d/1VNUE5p8A2VlTquvlSJz0Z3JPMO2KV8NO/view?usp=sharing">EPC Project Design</a></li>
						<li><a id='link' href="https://drive.google.com/file/d/1pE5n-Wbh_OqxFhssqaTq9IQw8JP19qvo/view?usp=sharing">Rapid Prototyping</a></li>
						<li><a id='link' href="https://drive.google.com/file/d/1EVU0a3m0ciw8exzg5HRKLaTyc92pj6wH/view?usp=sharing">Go Kart</a></li>
						</div>	
						<div className='list2'>
						<li><a id='link' href="https://drive.google.com/file/d/14YT68-U8X_9x5JLy_4A6ODQuMaDXmkyH/view?usp=sharing">Robo Studio & <br/>Robotic Jogging/Welding</a></li>
						<li><a id='link' href="https://drive.google.com/file/d/1JRM6HX3_bqK9B1CnODc-4_BgoazvLEgI/view?usp=sharing">Industrial Automation <br/>using PLC</a></li>
						</div>
						</ol>
						</CCardText>
					</CCardImageOverlay>
					</CCard>
				</CCol>
				<CCol xs className='grid'>
                    <CCard>
					<CCardImage orientation="top" src={'https://images.thequint.com/thequint%2F2020-02%2Fbe7cd804-b429-474e-8236-87cbb816b98b%2FMaruti_Futuro_e.jpg'} />
					<CCardImageOverlay>
						<CCardTitle className='title'>Auto Expo</CCardTitle>
						<CCardText className='custom-card-text'>
						Auto Expo is one of the MIT’s premier auto shows. A signature event, that witness the best minds coming
						together on a single platform to showcases all that is best in the automotive world Previous editions of 
						Pistoboltz witnessed some of the lauded automobiles like Rolls royce,Mustang GT,Lexus, and much more
						</CCardText>
					</CCardImageOverlay>
					</CCard>
				</CCol>
		</div>
	);
};
export default Events;
