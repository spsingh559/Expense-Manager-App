import React from 'react';
import {Grid,Row,Col,Carousel} from 'react-bootstrap';
import RaisedButton from 'material-ui/RaisedButton';

import AddExpenses from './AddExpenses';
import ShowExpenses from './ShowExpenses';
export default class NewExpenses extends React.Component{
    state={
        data:[],
        timeStamp:''
    }

    submit=(obj)=>{
        this.setState({timeStamp:obj});
        
        let newData=[{name:obj.name,amount:obj.amount}].concat(this.state.data);

        this.setState({data:newData})
    }

    render(){

        return(

            <div className="background">
            <Grid style={{marginTop:"90px"}}>  
            <Row>
                <Col xs={6}>
            <AddExpenses submit={this.submit}/>
            </Col>
            <Col xs={6}>
            <ShowExpenses data={this.state.data} timeStamp={this.state.timeStamp}/>
            <Row>
                <Col xs={12}>
                <RaisedButton label="Submit" primary={true} fullWidth={true} />
                </Col>
                </Row>
            </Col>
            
            </Row>
            </Grid>
            </div>
        )
    }
}