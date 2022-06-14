import React from 'react';
import {Row, Col} from 'react-bootstrap';





function Content(){

    return(
        <div className="content-section">
            
            <div>  
              <h1> Next Up.. </h1>  
              <img id="jumbotron" src={require(`../../assets/flyer.jpg`)}/>
            </div>

          <h1>  Featured Comics </h1>

                    
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