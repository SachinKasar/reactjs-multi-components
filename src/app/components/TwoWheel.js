import React from "react";
import {render} from "react-dom";
// TwoWheel as a Class Component
export class TwoWheel extends React.Component {
    render() {
        return ( 
		    <div className="container">
                <div className="row">
				    <div className="row">
						<h1> TwoWheel </h1>
						<ul>
							<li>
								<b>Name :</b> {this.props.name}
							</li>
							<li>
								<b>By :</b> {this.props.specs.manufacturer}
							</li>
						</ul>
					</div>
				</div>
				</div>
      
        );
    } 
}
