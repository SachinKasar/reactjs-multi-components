import React from "react";

// FourWheel as a Functional Component
export const FourWheeler = (props) => {
    return ( 
        <div  className="alert alert-warning" style={{border: '1px solid grey'}}>
		  
					<h1 style={{color:'red' , margin:'5px 5px 5px 5px'}}> Four Wheeler </h1>
					<ul>
						<li>
							<b>Name :</b>  {props.name}
						</li>
						<li>
							<b>By :</b>  {props.specs.manufacturer}
						</li>
					</ul>
				</div>
			 
        );
};
