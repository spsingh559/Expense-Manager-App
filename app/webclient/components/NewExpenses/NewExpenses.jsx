import React from 'react';
import {Grid,Row,Col,Carousel} from 'react-bootstrap';
import RaisedButton from 'material-ui/RaisedButton';
import Axios from 'axios';   
import AddExpenses from './AddExpenses';
import ShowExpenses from './ShowExpenses';
export default class NewExpenses extends React.Component{
    state={
        data:[],
        
    }

    submit=(obj)=>{
        // this.setState({timeStamp:obj});

        
        let newData=[obj].concat(this.state.data);

        this.setState({data:newData})
        Axios({
            method:'POST',
            url:'http://54.197.3.120:8080/createExpense',
            data:obj,
            headers: {  
                'Content-Type': 'application/json'
            }
            })
            .then((data) => {
                alert('success');
            })
            .catch((error) => {
                console.log(error);
                console.log(error+"error in post create expenses");
                });
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
            <ShowExpenses data={this.state.data} />
           
            </Col>
            
            </Row>
            </Grid>
            </div>
        )
    }
}