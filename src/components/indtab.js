import React, { Component } from 'react';

function Itab(props){

	const addstyle = () => {
		if(props.out.id == props.activetab){
			return {     
				backgroundColor: '#333',
				color: 'whitesmoke' 
			}
		} else{
			return {     
				backgroundColor: '#ADD8E6',
				color: 'black' 
			}
		}
	};

	console.log(props)

	return (
		<a style = {addstyle()} onClick = {props.ctab.bind(this,props.out.id)} >{props.out.title}</a>
	);
}

export default Itab;