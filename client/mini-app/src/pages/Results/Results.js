import React, {Component} from 'react';
import Result from '../../components/Result';

export default class Results extends Component{
    state = {
        results: []
    }

    componentDidMount(){
        this.setState({results: this.props.history.location.state.result})
    }

    render(){
        return(
            <div>
                <Result result={this.state.results}/>
            </div>
        )
    }
}