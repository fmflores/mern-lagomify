import React from "react";
import { Button } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Main } from '../components';
import API from "../utils/API";

class ItemDetails extends React.Component {
    state = {
        _id: '',
        name: '',
        description: '',
        location: '',
        status: '',
        imageUrl: ''
    };

    async componentDidMount() {
        const { match: { params } } = this.props;
        const { _id, name, description, location, status, imageUrl } = await API.getItem(params.id);
        this.setState({ _id, name, description, location, status, imageUrl });
    }

    handleEditClick () {
        // allows user to edit the item
        // bring to new page?
        // or display form components on this page?
    }

    handleDonateClick = (event) => {
        // changes status to 'toDonate'
        event.preventDefault();
        console.log('the current status: ' + this.state.status);
        console.log('the current item id: ' + this.state._id);
        // changes status to 'toDonate'
        API.updateItem({
            _id: this.state._id,
            name: this.state.name,
            description: this.state.description,
            location: this.state.location,
            status: 'toDonate'
        })
        .catch(err => console.log(err));
        // bring user to page for resources to donate
    }

    handleSellClick = (event) => {
        event.preventDefault();
        console.log('the current status: ' + this.state.status);
        console.log('the current item id: ' + this.state._id);
        // changes status to 'toSell'
        API.updateItem({
            _id: this.state._id,
            name: this.state.name,
            description: this.state.description,
            location: this.state.location,
            status: 'toSell'
        })
        .catch(err => console.log(err));
        // bring user to page for resources to sell
    }

    handleTossClick = (event) => {
        event.preventDefault();
        console.log('the current status: ' + this.state.status);
        console.log('the current item id: ' + this.state._id);
        API.updateItem({
            _id: this.state._id,
            name: this.state.name,
            description: this.state.description,
            location: this.state.location,
            status: 'toToss'
        })
        .catch(err => console.log(err));
    }


    render() {
        return (
            <Main>
                <Typography variant='h2'>Item Details</Typography>
                <div>PLACEHOLDER IMAGE HERE</div>
                <Typography variant='h5'>{this.state.name}</Typography>
                <p>Item Description: {this.state.description}</p>
                <p>Location: {this.state.location}</p>
                <Button variant='contained' color='primary' onClick={this.handleEditClick}>Edit Item</Button>
                <Button variant='contained' color='primary'onClick={this.handleDonateClick}>Donate</Button>
                <Button variant='contained' color='primary' onClick={this.handleSellClick}>Sell</Button>
                <Button variant='contained' color='primary'onClick={this.handleTossClick}>Toss</Button>
            </Main>
        )
    }

}

export default ItemDetails;