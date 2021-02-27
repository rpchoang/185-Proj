import React, { Component } from 'react';
import Itab from './indtab.js';

class Tablist extends Component {
	render() {
		console.log("id is"+this.props.activetab)

		return (

			this.props.tabs.map((tab) =>
				<a><Itab out = {tab} activetab = {this.props.activetab} ctab = {this.props.ctab}/></a>
				)
		)
	}
}

export default Tablist;