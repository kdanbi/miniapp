import React from 'react';
import './Result.scss'

const Result = (props) => {
    const result = props.result;

    return(
        <>  
        <fieldset class="radiogroup"> 
            <legend>Price Level</legend> 
            <ul class="radio"> 
                <li><input type="radio" name="crust" id="crust1" value="deep" /><label for="crust1">Deep dish</label></li> 
                <li><input type="radio" name="crust" id="crust2" value="thick" /><label for="crust2">Thick</label></li> 
                <li><input type="radio" name="crust" id="crust3" value="hand" /><label for="crust3">Hand thrown</label></li> 
                <li><input type="radio" name="crust" id="crust4" value="thin" /><label for="crust4">Thin</label></li> 
            </ul> 
        </fieldset> 

        <fieldset class="radiogroup"> 
            <legend>Rating</legend> 
            <ul class="radio"> 
                <li><input type="radio" name="crust" id="crust1" value="deep" /><label for="crust1">Deep dish</label></li> 
                <li><input type="radio" name="crust" id="crust2" value="thick" /><label for="crust2">Thick</label></li> 
                <li><input type="radio" name="crust" id="crust3" value="hand" /><label for="crust3">Hand thrown</label></li> 
                <li><input type="radio" name="crust" id="crust4" value="thin" /><label for="crust4">Thin</label></li> 
            </ul> 
        </fieldset> 

            {result.map(item=>{
                return(
                    <>
                        
                        <div className="result__card">
                            <p>{item.name}</p>
                            {(item.price_level) ? <p>{`price level: ${item.price_level}`}</p> : <p>price level unavailable</p>}
                            {(item.rating) ? <p>{`rating: ${item.rating}`}</p> : <p>rating unavailable</p>}
                            <p>{item.vicinity}</p>
                        </div>
                    </>
                )
            })}
        </>
    )
}

export default Result;