import React from 'react';
import {Row, Col} from 'react-bootstrap';





function FeatureContent(){

    return(
        <div className="content-component">
            
  
              
              <img id="jumbotron" src={require(`../../assets/flyer.jpg`)} alt="Comic Life Nights 6/18/2022 Event Promotion"/>
   

          <h1 className="section-title" id="meet-the-comics">  Meet the Comics </h1>

                    
           <div>
               <img className="comic-feature" src ={require(`../../assets/comic-nick-alexander.jpg`)} alt="Comedian Nick Alexander"/>
            
            </div> 
 

                
            <div>
            <img className="comic-feature" src ={require(`../../assets/comic-ryan-cheaves.jpg`)} alt="Comedian Ryan Cheaves" />

            </div> 

            <div>
            <img className="comic-feature" src ={require(`../../assets/comic-terrence-murphy.jpg`) } alt="Comedian Terrence Murphy Jr."/>

            </div> 

            <div>
            <img className="comic-feature" src ={require(`../../assets/comic-del-harrison.jpeg`)} alt="Comedian Del Harrison"/>

            </div> 

        </div>
    );
}


export default FeatureContent;