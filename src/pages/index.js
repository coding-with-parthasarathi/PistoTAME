//background-image: url('https://i.makeagif.com/media/9-18-2018/RySj_U.gif');
import React, { Component } from "react";
import Countdown from "./countdown.js";
import './index.css';
class Home extends Component {
  render() {
    const currentDate = new Date();
    const year =
      currentDate.getMonth() === 11 && currentDate.getDate() > 23
        ? currentDate.getFullYear() + 1
        : currentDate.getFullYear();
    return (
		<div className='home'
		style={{
			display: 'flex',
			flexDirection: 'column',
			paddingBlockStart: '50px',
			alignItems: 'center',
			color: 'white'
		}}
		>
			
	 <div className='Blazing'></div>
        <Countdown date={`${year}-03-16T10:00:00`} />
      </div>
    );
  }
}
export default Home;