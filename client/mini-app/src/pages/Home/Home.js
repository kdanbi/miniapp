import React, {Component} from 'react';
import Main from '../../components/Main';

export default class Home extends Component{

    state={
        location: ''
    }

    componentDidMount(){
        navigator.geolocation.getCurrentPosition(
            (position)=>{
                this.setState({
                    location: `${position.coords.latitude}, ${position.coords.longitude}`
                })
            }
        )
    }

    render(){
        return (
            <Main locationValue={this.state.location}/>
        )
    }
}