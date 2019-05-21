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