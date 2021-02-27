import React, {Component} from "react";
import './style.css';

class VideoBody extends Component{
	render(){
		return(
			<div className = "vid_table">
			<iframe width="560" height="315" src="https://www.youtube.com/embed/O7vpIpgNYec" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="Videos"></iframe>
			<iframe width="560" height="315" src="https://www.youtube.com/embed/fvtQYsckLxk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="Videos"></iframe>
			<iframe width="560" height="315" src="https://www.youtube.com/embed/AbonVshOLf0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="Videos"></iframe>
    		<iframe width="560" height="315" src="https://www.youtube.com/embed/clPL0VsXhlo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

		)
	};
}

export default VideoBody