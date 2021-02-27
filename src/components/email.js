import React, {Component} from "react";
import './style.css';

class EmailBody extends Component{
	validateEmail(){
		var goodemail = document.getElementById("emailok");
		var errmsg = document.getElementById("alertnotice");
		goodemail.style.display ="none";
		errmsg.style.display = "none";

		var idemail = document.getElementById("idemail").value

		var inputval = document.getElementById("idemail").value;
		if ((idemail.indexOf('.com')>-1 || idemail.indexOf('.edu')>-1) && idemail.indexOf('@') > -1){
			goodemail.style.display = "block";
		}else{
			errmsg.style.display = "block";
		}

	}

	exitnotification(){
		var goodemail = document.getElementById("emailok");
		var errmsg = document.getElementById("alertnotice");
		goodemail.style.display ="none";
		errmsg.style.display = "none";

	}

	render(){
		return(
			<form>
				<p>Please Enter Email:</p><br />
				<input type="email" id="idemail" defaultValue="E-mail" /><br /><br />
				<div className="subbutton" onClick={this.validateEmail} backgroundColor="black" color="white"><p>Validate email</p></div>
				
				<div className="alert" id="alertnotice">
				    <span className="closebutton" onClick={this.exitnotification}>×</span>
				    <p>ERROR INVALID EMAIL</p>
				</div>
			    <div className="good" id="emailok">
				    <span className="closebutton" onClick={this.exitnotification}>×</span>
				    <p>Good email</p>
			    </div>
			</form>


		)
	};
}

export default EmailBody