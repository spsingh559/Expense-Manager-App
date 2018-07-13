import React from 'react';
import Divider from 'material-ui/Divider';
import {Grid,Row,Col,Carousel} from 'react-bootstrap';
export default class TotalExpenses extends React.Component{

    render(){

        return(
            <div>
             
                  <Row>
                      <center> <h2> Total Expenses </h2></center>
                      </Row>
                      <Row style={{marginTop:"10px"}}>
                  <Col xs={6} >
                  <h4>July Expense</h4>
                  <Divider />
                  <h3>15,348 Rs</h3>
                  </Col>
                  <Col xs={6}>
                  <h4>2018 Expenses</h4>
                  <Divider />
                  <h3>1,98,348 Rs</h3>
                  </Col>
                  </Row>
                </div>
        )
    }
}