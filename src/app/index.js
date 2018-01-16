import React from "react";
import {render} from "react-dom";

import {TwoWheeler} from "./components/TwoWheeler";
import {FourWheeler} from "./components/FourWheeler";
import {AppHeader} from "./components/AppHeader";
import {AppFooter} from "./components/AppFooter";


class App extends React.Component {
    render() {
		let twoWheelSpecs = {manufacturer : "Royal Enfield"};
		let fourWheelSpecs = {manufacturer : "Maruti Suzuki"};
        
        let headerComponent =  ( 
                                 <div className="row">
                                    <div className="col-xs-10 col-xs-offset-1" >
                                       <AppHeader/>
                                    </div>
                                  </div>
                                );
        
        let footerComponent = (
                                <div className="row" style={{marginTop: '350px'}}>
                                      <div className="col-xs-10 col-xs-offset-1" >
                                         <AppFooter/>
                                      </div>
                                </div>
                              );
		
        return ( 
			 <div className="container"  >
            
            { headerComponent }
				    
            <div className="row col-xs-10 col-xs-offset-1" style={{border: '1px solid grey'}} >
            <br/>   
            <div className="row">
                      <div className="col-xs-10 col-xs-offset-1" >
                         <TwoWheeler name="Enfield Classic" specs={twoWheelSpecs}/>
                      </div>
                </div>
				   
              <br/>
            
              <div className="row">
                  <div className="col-xs-10 col-xs-offset-1">
                        <FourWheeler name="Grand Vitara" specs={fourWheelSpecs}/>
                   </div>
               </div>
            </div>
            
             
            { footerComponent }
			  </div>
        );
    } 
}

render( < App / > , document.getElementById("app"));
