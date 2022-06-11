import React from 'react';
import {Row, Col} from 'react-bootstrap';





function Content(){

    return(
        <div>
            

          <h1>  Featured Comics </h1>

            <Row>

                <Col>
                    
           <div>
               <img className="comic-feature" src ={require(`../../assets/comic-nick-alexander.jpg`)}/>
            
            </div> 
                </Col>

            </Row>
            <Row>

            <Col>
                
            <div>
            <img className="comic-feature" src ={require(`../../assets/comic-ryan-cheaves.jpg`)}/>

            </div> 
            </Col>

            </Row>
        </div>
    );
}


export default Content;