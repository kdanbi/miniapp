import React, {Component} from 'react';
import './Result.scss'
import {Link} from 'react-router-dom';

class Result extends Component {
    state={
        originalArray: [],
        filteredArray: [],
        stateSet: false
    }


    filterForm = React.createRef();

    loadResult=()=>{
        this.setState({originalArray: this.props.result});
    }

    filterResult =(event)=>{
        event.preventDefault();
        const myForm = this.filterForm;
        const rating = Number(myForm.current[1].value);
        const priceLevel = Number(myForm.current[0].value);
        const oldArray = this.state.originalArray;
        this.setState({originalArray: oldArray.filter(item => (item.rating>= rating && item.price_level >= priceLevel))})
    }

    render(){
        const result = this.props.result;
        return(
            <>  
            <button onClick={this.loadResult}>Load result</button>
        <form action="" ref={this.filterForm} onSubmit={this.filterResult}>
            <input type="text" name="priceLevel" placeholder="price level"/>
            <label htmlFor="price-level"></label>
            <input type="text" name="rating" placeholder="rating"/>
            <label htmlFor="rating"></label>
            <button type="submit">Filter</button>
        </form>

            {this.state.originalArray.map(item=>{
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
}}
    

export default Result;