import React, {Component} from "react";
import './style.css';

class TableBody extends Component{
	render(){
		return(
<body>
    
<h1>Some Cool Videos to Checkout</h1>

<table>
    
    <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Views</th>
        <th>Upload Date</th>
    </tr>
    <tr>
        <td><a href="https://www.youtube.com/watch?v=hUhisi2FBuw&t=1s">The Ingenious Design of the Aluminum Beverage Can</a></td>
        <td><p>Bill details the engineering choices underlying the design of a beverage can He explains why it is cylindrical, outlines the manufacturing steps needed to created the can, notes why the can narrows near it lid, show close ups of the double-seam that hold the lid on, and details the complex operation of the tab that opens the can. </p></td>
        <td><p>13,537,303 views</p></td>
        <td><p>Apr 14, 2015</p></td>
    </tr>
    <tr>
        <td><a href="https://www.youtube.com/watch?v=p8u_k2LIZyo">Fast Inverse Square Root — A Quake III Algorithm</a></td>
        <td><p>In this video we will take an in depth look at the fast inverse square root and see where the mysterious number 0x5f3759df comes from. This algorithm became famous after id Software open sourced the engine for Quake III. On the way we will also learn about floating point numbers and newton's method.</p></td>
        <td><p>557,273 views</p></td>
        <td><p>Nov 28, 2020</p></td>
    </tr>
    <tr>
        <td><a href="https://www.youtube.com/watch?v=ApR-kNXxLUs">Introducing VSCode Stories</a></td>
        <td><p>Stories for VSCode that way you can make fun coding stories and share them with your fellow developers.</p></td>
        <td><p>276,583 views</p></td>
        <td><p>Oct 30, 2020</p></td>
    </tr>
</table>


</body>

		)
	};
}

export default TableBody