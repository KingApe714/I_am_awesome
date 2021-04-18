import React from 'react';
import CreateReservationContainer from '../reservation/create_reservation_container'

class RestaurantShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchRestaurant(this.props.match.params.restaurantId);
        // this.props.fetchMenu(this.props.match.params.restaurantId);
    }

    render() {
        if (!this.props.restaurant) return null;
        // debugger
        let photo0, photo1, photo2
        if (this.props.restaurant.photoUrls) {
            photo0 = this.props.restaurant.photoUrls[0];
            photo1 = this.props.restaurant.photoUrls[1];
            photo2 = this.props.restaurant.photoUrls[2];
        }
        // debugger
        return (
            <div>
                <img src={this.props.restaurant.photoUrl} className="rest-background"></img>
                <div className="rest-show">
                    <p className="show-title">{this.props.restaurant.name}</p>
                    <div className="rest-rate-review">
                        Reviews | Price Range | Cuisine Type
                    </div>
                    <CreateReservationContainer 
                    restaurant={this.props.restaurant}/>
                    <div className="rest-delivery-takeout">
                        <div className="del-tak-title">
                            Order delivery or takeout 
                        </div>
                        <div className="del-tak-details">
                            Takeout<br/>
                            {this.props.restaurant.phone_number}
                        </div>
                    </div>
                    <div className="description">
                        {this.props.restaurant.description}
                    </div>
                    <div className="rest-details">
                        <p className="det-title">Neighborhood</p>
                        <p className="det-detail">{this.props.restaurant.city}</p>
                        <p className="det-title">Hours of Operation</p>
                        <p className="det-detail">{this.props.restaurant.operation_hours}</p>
                        <p className="det-title">Phone Number</p>
                        <p className="det-detail">{this.props.restaurant.phone_number}</p>
                        {this.props.restaurant.executive_chef !== "N/A" ?
                        <>
                            <p className="det-title">Executive Chef</p>
                            <p className="det-detail">{this.props.restaurant.executive_chef}</p> 
                        </> : null }
                    </div>
                    <div className="rest-menu">
                        Menu
                        <img src={photo0}/>
                        <img src={photo1}/>
                        <img src={photo2}/>
                    </div>
                    <div className="rest-reviews">
                        Reviews
                    </div>
                </div>
            </div>
        )
    }
}

export default RestaurantShow