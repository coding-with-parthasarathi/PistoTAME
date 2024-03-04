import React from 'react';
import './neon.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
//import { Center } from '@chakra-ui/react';

const MapEmbed = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7636884722365!2d80.1358735!3d12.946335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525fac595c29ff%3A0xb76082ae18b51418!2sMadras%20Institute%20of%20Technology%2C%20Anna%20University!5e0!3m2!1sen!2sin!4v1485858036904"
      width="100%"
      height="300" 
      frameborder="0"
      style={{ border: 0, marginBottom: '20px' }} 
      allowfullscreen=""
      aria-hidden="false"
      tabindex="0"
      title="MIT Anna University Map"
    ></iframe>
  );
};

const Contacts = () => {
  const handleEmailLinkClick = () => {
    window.location.href = 'mailto:tame4918@gmail.com'; // Replace with the desired email address
  };

  return (
    <div className='contacts'
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div className="logo"><b><span>Contact</span><span> Us</span></b></div>
      <div className="container">
        <div className="row info-map-boxes pb-0">
          {/* Left Info Map Box */}
          <div className="col-md-6 col-sm-12">
            <div className="info-map-boxes-item fa fa-globe" style={{  backgroundColor: '#DFCFBE', color: '#9B2335',textAlign:'center',borderRadius:'20px',height:'90%',width:'80%',padding:'10px', float:'left' }}>
              <h1>Address</h1>
              <p>
                MIT ROAD, RADHA NAGAR, <br/>
				CHROMPET, CHENNAI, <br/>
				TAMILNADU 600044
              </p>
            </div>
          </div>
          {/* Right Info Map Box */}
          <div className="col-md-6 col-sm-12" >
            <div className="info-map-boxes-item fa fa-phone" style={{backgroundColor: '#DFCFBE', color: '#9B2335',textAlign:'center',borderRadius:'20px',height:'90%',width:'80%', padding:'10px', float:'right'}}>
              <h1>Contact Details</h1>
              <p>
                PHONE : 044 00000  <br/>
                <a href="mailto:tame4918@gmail.com" onClick={handleEmailLinkClick}>tame4918@gmail.com</a><br/>
				        REACH US : <a href="https://www.instagram.com/pistoboltz_mit/">  <FontAwesomeIcon icon={faInstagram} size="lg" /> </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Map */}
      <div className='Map'
        style={{
          width:"50%",
          height:"100%",
		  paddingTop:'100px',
		  paddingBottom:'100px',
		  overflow: 'hidden',
        }}
      >     
        <MapEmbed/>
      </div>
    </div>
  );
};

export default Contacts;
