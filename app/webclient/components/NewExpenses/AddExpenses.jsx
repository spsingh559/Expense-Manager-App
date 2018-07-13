import React from 'react';
import {Grid,Row,Col,Carousel} from 'react-bootstrap';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import { Divider } from 'material-ui';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
const style={
    instanceCountStyle:{
      height:"200px",
      width:"100%",
      borderRadius: "6px",
      border: "solid 1px #d5d5d5",
      align:"center"
    },
    instanceStatusStyle:{
      height:"100%",
     
      
      textAlign:"center",
      borderRadius: "6px",
      border: "solid 1px #d5d5d5",
    },
    CloudChartStyle:{
      height:"500px",
      marginTop:"50px",
      width:"400px",
      borderRadius: "6px",
      border: "solid 1px #d5d5d5"
    },
    platFormStyle:{
      height:"500px",
      marginLeft:"198px",
      marginTop:"50px",
      width:"400px",
      borderRadius: "6px",
      border: "solid 1px #d5d5d5"
    }
  }

export default class AddExpenses extends React.Component{

    state={
        deliveryDateFrom:"",
        name:"",
        amount:"",
        quantity:""
    }

    submit=()=>{
        if(this.state.name==""|| this.state.amount==""){
            alert('field is missing')
        }else{
        let currentDate=this.state.deliveryDateFrom;
        let day=currentDate.getDate();
        let month=currentDate.getMonth() + 1;
        let year=currentDate.getFullYear();
        
        let obj={
            userid:"Raj",
            day:day,
            month:month,
            year:year,
            qty:this.state.amount,
            price:this.state.amount,
            category:this.state.name
        }
        console.log(obj);
        this.setState({name:"",amount:"",quantity:"",deliveryDateFrom:""})
        this.props.submit(obj);
    }
    }

    handleChangeDeliveryDateFrom = (event, date) => this.setState({deliveryDateFrom: date});
    render(){

        return(
            <div style={style.instanceStatusStyle}>
            <Row>
                <center><h2>Add Expenses </h2></center>
                </Row>
                <Row>
                    <Col xs={6}>
                    <TextField
  value={this.state.name}
      hintText=" Item Name"
      onChange = {(event,newValue) => this.setState({name:newValue})}
      floatingLabelText="I bought this item"
    //   fullWidth={true}
    />
    <br />
    <TextField
    type="number"
  value={this.state.amount}
      hintText=" Enter Amount"
      onChange = {(event,newValue) => this.setState({amount:newValue})}
      floatingLabelText="I paid around this much Rs"
    //   fullWidth={true}
    />
                    </Col>
                    <Col xs={6}>
                    <Row>
                    <DatePicker name="fromDate"
         
         onChange={this.handleChangeDeliveryDateFrom}
         autoOk={this.state.autoOk}
         mode="landscape"
         floatingLabelText="Oh Do i remember date?"
         // fullWidth={true}
        
       />
                        </Row>
                        <Row>
                        <TextField
    type="number"
  value={this.state.quantity}
      hintText=" Enter Quantity"
      onChange = {(event,newValue) => this.setState({quantity:newValue})}
      floatingLabelText="how much is the new item?"
    //   fullWidth={true}
    />
                            </Row>
                    </Col>
                    <Row>
                    <center>
       <FloatingActionButton style={style}>
     <ContentAdd onTouchTap={this.submit}/>
   </FloatingActionButton>
   </center>  
                        </Row>
                    </Row>
   
           
            </div>
        )
    }
}