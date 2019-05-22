import React from 'react';
import './Result.scss'

const Result = (props) => {
    const result = props.result;

    return(
        <>  
            {result.map(item=>{
                return(
                    <>
                        
                        <div className="result__card">
                            <p className="result__card--name">{item.name}</p>
                            {(item.price_level) ? <p className="result__card--price">{`price level: ${item.price_level}`}</p> : <p className="result__card--price"></p>}
                            {(item.rating) ? <p className="result__card--rating">{`rating: ${item.rating}`}</p> : <p className="result__card--rating">rating unavailable</p>}
                            <p className="result__card--address">{item.vicinity}</p>
                        </div>
                    </>
                )
            })}
        </>
    )
}

export default Result;