import React from "react";
import {render} from "react-dom";

// TwoWheel as a Class Component
export class TwoWheeler extends React.Component {
    render() {
        return ( 
             
				    <div  className="alert alert-warning" style={{border: '1px solid grey'}}>
						<h1 style={{color:'blue', margin:'5px 5px 5px 5px'}}> Two Wheeler </h1>
						<ul>
							<li>
								<b>Name :</b> {this.props.name}
							</li>
							<li>
								<b>By :</b> {this.props.specs.manufacturer}
							</li>
						</ul>
					</div>
				 
      
        );
    } 
}

 
