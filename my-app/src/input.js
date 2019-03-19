import React, { Component } from 'react';

class InputInfo extends Component {
    constructor(props){
        super(props) 

        this.state = {
            address: ''
        }
    }

    submitInfo = (e) => {
        e.preventDefault();
        this.props.submitAddress(this.state.address)
    }
    
    render() {
        console.log(this.state.address)
        return (
            <form onSubmit={this.submitInfo}>
                <label>Enter Zip Code or Address</label>
                <input type="text" name="address" value={this.state.address} onChange={(e)=>{
                    this.setState({
                        address:e.currentTarget.value
                    })
                   }}>
                </input>
            </form>
        )
    }
}

export default InputInfo;