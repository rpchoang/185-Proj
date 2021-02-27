import './App.css';

import Body from "./components/body.js"
import Tablist from "./components/tablist.js"
import { Component } from 'react';

class App extends Component{

	constructor(){
		super();
		this.state = {active:1}
		this.changetab = (id) => {
			this.setState({
				active: id
			})
		}

		this.handleScroll = this.handleScroll.bind(this);
		this.scrollToTop = this.scrollToTop.bind(this);
	}

	componentDidMount(){
		document.addEventListener("scroll", this.handleScroll)
	}

	handleScroll(){
		var rootElement = document.documentElement;
		var scrollToTopBtn = document.querySelector(".scrollToTop")
		var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight

		if ((rootElement.scrollTop / scrollTotal ) > 0.25) {
			scrollToTopBtn.style.opacity = 1;
        } else {
        	scrollToTopBtn.style.opacity = 0;
        }
	}

	scrollToTop() { 
		var rootElement = document.documentElement;
		rootElement.scrollTo({
			top: 0,
			behavior: "smooth"
		})
	}



	render(){
		const tabs =[
		{id:1, title:'Text'},
		{id:2, title:'Image'}, 
		{id:3, title:'Table'},
		{id:4, title:'Video'}, 
		{id:5, title:'Email'}
		]


		return (
			<div className="App">
				<h1> Welcome to Ronalds Page </h1>
				<div className="navbar">
					<Tablist tabs ={tabs} activetab={this.state.active} ctab = {this.changetab}/>
				</div>
				<div className = "main-body">
					<Body activetab = {this.state.active}/>
				</div>

				<button onClick={this.scrollToTop} className = "scrollToTop">Back To Top</button>
			</div>
		);
	}

}

export default App;
