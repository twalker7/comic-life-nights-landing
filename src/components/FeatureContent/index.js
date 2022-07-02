import React from 'react';
import video from '../../assets/comicnigh.mp4'



function FeatureContent(){

    return(
        <div className="homepage-component">
            
           
              <video width="320" height="240" controls autoPlay>
              <source src={require(`../../assets/comicnigh.mp4`)} type="video/mp4"></source></video>
              <img id="jumbotron" src={require(`../../assets/flyer.jpg`)} alt="Comic Life Nights 6/18/2022 Event Promotion"/>
              
              <a href="https://www.eventbrite.com/e/comic-life-nights-tickets-362170741437?aff=ebdsoporgprofile" target="_target"><h3 className="section-title" id="eventbrite-link">Purchase Tickets on Eventbrite</h3></a>


          <h1 className="section-title" id="meet-the-comics">   Meet the Comics     </h1>

                    
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