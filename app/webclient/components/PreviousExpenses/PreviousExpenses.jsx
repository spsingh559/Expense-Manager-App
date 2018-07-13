import React from 'react';
import {Grid,Row,Col,Carousel} from 'react-bootstrap';
import RaisedButton from 'material-ui/RaisedButton';
import DaySelection from './DaySelection';
import ShowAllExpenses from './ShowAllExpenses';



export default class PreviousExpenses extends React.Component{
    
    state={
        data:[]
    }

    today=(obj)=>{
        this.setState({data:obj});
    }

    render(){

       
        return(

            <div className="background">
            <Grid style={{marginTop:"90px"}}>  
            <DaySelection today={this.today}/>
           <br />
           <ShowAllExpenses data={this.state.data} />
            </Grid>
            </div>
        )
    }
}