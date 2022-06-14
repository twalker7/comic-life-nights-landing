import React from 'react';
import {Row, Col} from 'react-bootstrap';





function Content(){

    return(
        <div className="content-component">
            
            <div>  
              
              <img id="jumbotron" src={require(`../../assets/flyer.jpg`)}/>
            </div>

          <h1 className="section-title">  Featured Comics </h1>

                    
           <div>
               <img className="comic-feature" src ={require(`../../assets/comic-nick-alexander.jpg`)}/>
            
            </div> 
 

                
            <div>
            <img className="comic-feature" src ={require(`../../assets/comic-ryan-cheaves.jpg`)}/>

            </div> 

        </div>
    );
}


export default Content;