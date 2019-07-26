import React, {Component} from 'react';
import './Result.scss'
import './Main.scss'
import {Link} from 'react-router-dom';
import guy from "../assets/guy.png"

class Result extends Component {
    state={
        originalArray: [],
        filteredArray: [],
        stateSet: false
    }

    filterForm = React.createRef();

    loadResult=()=>{
        this.setState({originalArray: this.props.result});
        console.log(this.state.originalArray)
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
        //const result = this.props.result;
        return(
            <section className="filter-and-cards">  
                <div className="filter-and-button">
                <img className="guy "src={guy} alt="guy"/>
                    <button className="loadButton btn btn--stripe btn--radius" onClick={this.loadResult}>Find NOW</button>
                    <form action="" ref={this.filterForm} onSubmit={this.filterResult}>
                        <input type="text" name="priceLevel" placeholder="price level (1 - 4)"/>
                        <label htmlFor="price-level"></label>
                        <input type="text" name="rating" placeholder="rating (1 - 4)"/>
                        <label htmlFor="rating"></label>
                        <button className="loadButton btn btn--stripe btn--radius" type="submit">Filter</button>
                    </form>
                </div>

                <div className="result__cards">
                {this.state.originalArray.map(item=>{
                    return(
                        <Link to={`/details/${item.place_id}`}>
                            <div className="result__card">
                                <p className="result__card--name">{item.name}</p>
                                {/* {(item.price_level) ? <p className="result__card--price">{`price level: ${item.price_level}`}</p> : <p className="result__card--price"></p>}
                                {(item.rating) ? <p className="result__card--rating">{`rating: ${item.rating}`}</p> : <p className="result__card--rating">rating unavailable</p>}
                                <p className="result__card--address">{item.vicinity}</p> */}
                            </div>
                        </Link>
                    )
                })}
                </div>
        </section>
    )
}}
    
export default Result;