import React, {Component} from 'react';
import TextBody from './text.js';
import ImageBody from './image.js';
import VideoBody from './table.js';
import TableBody from './video.js';
import EmailBody from './email.js';
import './style.css';

class Body extends Component {
	render(){
		var content = () => {
			var activetab = this.props.activetab;
			if (activetab == 1) {
				return <TextBody/>
			} else if (activetab == 2) {
				return <ImageBody/>
			} else if (activetab == 3) {
				return <VideoBody/>
			} else if (activetab == 4) {
				return <TableBody/>
			} else if (activetab == 5) {
				return <EmailBody/>
			}

		}

		return (content())
	}
}

export default Body;