import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { DISHES } from '../shared/dishes';
import Dishdetail from './DishdetailComponent';
import Menu from './MenuComponent';

export default class Main extends Component {
        constructor() {
                super();
                this.state = {
                        selectedDish: null,
                        dishes: DISHES
                }
        }

        onDishSelect(dishID) {
                this.setState({selectedDish: dishID});
        }

        render(){
                return(
                        <div>
                                <Navbar dark color="primary">
                                        <div className="container">
                                                <NavbarBrand href="/">
                                                        Restorante Con Fusion
                                                </NavbarBrand>
                                        </div>
                                </Navbar>

                                <Menu dishes={this.state.dishes} onClick={(dishId) => {this.onDishSelect(dishId)} }/>
                                <Dishdetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
                                
                        </div>
                );
        }
}