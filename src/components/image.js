import React, {Component} from 'react';
import yeet from "../images/yeet.png"
import brain from "../images/brain.jpg"
import srslybro from "../images/srslybro.jpg"
import twittermeme from  "../images/twittermeme.png"
import frontend from "../images/frontend.png"
import freddy from "../images/freddy.png"
import bird from "../images/bird.jpg"
import cat from "../images/cat.jpg"
import georgelopez from "../images/georgelopez.jpg"
import johncena from "../images/johncena.jpg"
import tomnjerry from "../images/tomnjerry.jpg"
import danny from "../images/danny.jpg"
import "./style.css"

class ImageBody extends Component {
	constructor() {
		super();
		this.wrapperRef = React.createRef();
		this.closePhoto = this.closePhoto.bind(this);
		this.overRideFunc = this.overRideFunc.bind(this);
		this.openPhoto = this.openPhoto.bind(this);
	}

	openPhoto(event){
        var modal = document.getElementById("imgpopout");
        var imgpopout = document.getElementById("myimg");

        imgpopout.src = event.target.src;
        modal.style.display = "block";
	}

	closePhoto(event){
		var modal = document.getElementById("imgpopout");
		var imgpopout = document.getElementById("myimg");

		modal.style.display = "none";
	}

	overRideFunc(event){
        event.stopPropagation();
	}

	render(){
		return (
			<div className = "body">
				<div className="img_table">
					<div className="images"> <img onClick={this.openPhoto} src={yeet}/> </div>
					<div className="images"> <img onClick={this.openPhoto} src={srslybro}/> </div>
					<div className="images"> <img onClick={this.openPhoto} src={brain}/> </div>
					<div className="images"> <img onClick={this.openPhoto} src={twittermeme}/> </div>
					<div className="images"> <img onClick={this.openPhoto} src={frontend}/> </div>
					<div className="images"> <img onClick={this.openPhoto} src={freddy}/> </div>
					<div className="images"> <img onClick={this.openPhoto} src={bird}/> </div>
					<div className="images"> <img onClick={this.openPhoto} src={cat}/> </div>
					<div className="images"> <img onClick={this.openPhoto} src={georgelopez}/> </div>
					<div className="images"> <img onClick={this.openPhoto} src={johncena}/> </div>
					<div className="images"> <img onClick={this.openPhoto} src={tomnjerry}/> </div>
					<div className="images"> <img onClick={this.openPhoto} src={danny}/> </div>
				</div>

				<div id="imgpopout" className="popout" onClick={this.closePhoto}>
        			<img className="photoenlrg" id="myimg" onClick={this.overRideFunc}/>
    			</div>
			</div>
			)
	}


}

export default ImageBody