import React, {Component} from 'react';
import './Result.scss'
import './Main.scss'
import {Link} from 'react-router-dom';
//import guy from "../assets/guy.png"

class Result extends Component {
    state={
        filteredArray: [],
        stateSet: false
    }

    filterForm = React.createRef();

    loadResult=()=>{
        this.setState({originalArray: this.props.result});
        console.log(this.state.originalArray)
    }



    render(){
        //const result = this.props.result;
        return(
            <section className="filter-and-cards"> 
                <div className="result__cards">
                {this.props.result.map(item=>{
                    return(
                        <Link to={`/details/${item.place_id}`}>
                            <div className="result__card">
                                <p className="result__card--name">{item.name}</p>
                            </div>
                        </Link>
                    )
                })}
                </div>
        </section>
    )
}}
    
export default Result;