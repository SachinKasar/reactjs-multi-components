import React from "react";

// FourWheel as a Functional Component
export const FourWheel = (props) => {
    return ( 
		 <div className="container">
			<div className="row">
				<div className="row">
					<h1> FourWheel </h1>
					<ul>
						<li>
							<b>Name :</b>  {props.name}
						</li>
						<li>
							<b>By :</b>  {props.specs.manufacturer}
						</li>
					</ul>
				</div>
			</div>
		  </div>
        );
};
