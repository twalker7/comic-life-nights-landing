import React from 'react';


function Comics(){
    return(
        <div>
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


export default Comics; 