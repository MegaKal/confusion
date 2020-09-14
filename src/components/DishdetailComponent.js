import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
        CardTitle } from 'reactstrap';
import * as moment from 'moment'

 export default class Dishdetail extends Component {
         renderComments(comments) {
                 const comment = comments.map(com => {

                        return(
                                <ul class="list-unstyled">
                                        <li key={com.id}>
                                                {com.comment } <br/> -- {com.author}, {new Date(com.date).toDateString()}
                                        </li>
                                </ul>
                         );

                 })
                 return(
                         <div className="text-justify">
                                <h4>Comments</h4>
                                {comment}
                         </div>
                 );
         }

        render(){

                const { dish } = this.props;
                if (dish == null ) return <div></div>;

                return(
                        <div className="container">
                                <div className="row">
                                        
                                        <div className="col-12 col-md-5 m-1">
                                                <Card>
                                                        <CardImg top src={dish.image} alt={dish.name} />
                                                        <CardBody>
                                                        <CardTitle>{dish.name}</CardTitle>
                                                        <CardText>{dish.description}</CardText>
                                                        </CardBody>
                                                </Card>
                                        </div>
                                        <div className="col-12 col-md-6">
                                                {this.renderComments(dish.comments)}
                                        </div>
                                </div>
                        </div>
                        
                );
        }
}