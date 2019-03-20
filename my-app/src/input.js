import React, { Component } from 'react';
import Header from 'react'

class InputInfo extends Component {
    constructor(props){
        super(props) 

        this.state = {
            address: '',
            location: '',
        }
    }

    submitInfo = (e) => {
        e.preventDefault();
        this.props.submitAddress(this.state.address, this.state.location)
        console.log('location:', this.state.location)
    }
    
    render() {
        // console.log('address:', this.state.address)
        return (
            <form onSubmit={this.submitInfo}>
                <label>Enter Zip Code or Address</label>
                <input type="text" name="address" value={this.state.address} onChange={(e)=>{
                    this.setState({
                        address:e.currentTarget.value
                    })
                   }}>
                </input>
                <label>Please enter a location of your preference</label>
                <input type="text" name="location" value={this.state.location} onChange={(e)=>{
                    this.setState({
                        location:e.currentTarget.value
                    })
                   }}>
                </input>
                <button>Submit</button>
            </form>
        )
    }
}

export default InputInfo;