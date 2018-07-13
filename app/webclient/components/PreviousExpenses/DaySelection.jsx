import React from 'react';
import {Grid,Row,Col,Carousel} from 'react-bootstrap';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import DatePicker from 'material-ui/DatePicker';
import FlatButton from 'material-ui/FlatButton';
// import DaySelection from './DaySelection';

const data=[
    {
    
        _id:"232943",
        day:"12th",
        month:"july",
        year:"2018",
        expenses:[
          {
            name:"Grocerry",
            amount:300
          },
          {
            name:"Milk",
            amount:40
          },
          {
            name:"Chicken",
            amount:100
          },
          {
            name:"books",
            amount:1200
          }
        ]
      
},
{
    
    _id:"232943",
    day:"13th",
    month:"july",
    year:"2018",
    expenses:[
      {
        name:"Namkeen",
        amount:300
      },
      {
        name:"tea",
        amount:40
      },
      {
        name:"fish",
        amount:100
      }
    ]
  
}
]

export default class DaySelection extends React.Component{
    state={
        deliveryDateFrom:"",
        open: false,
    }

    handleOpen = () => {
        this.setState({open: true});
      };
    
      handleClose = () => {
        this.setState({open: false});
      };

    ChangeDeliveryDateFrom = (event, date) => this.setState({deliveryDateFrom: date});

    specificDate=()=>{
        this.setState({open:true});
    }

    today=()=>{
        this.props.today(data);
    }

    specificDateSubmit=()=>{
        this.props.today(data);
        this.setState({open:false});

    }

    render(){

        const actions = [
            <FlatButton
              label="Cancel"
              primary={true}
              onClick={this.handleClose}
            />,
            <FlatButton
              label="Submit"
              primary={true}
              keyboardFocused={true}
              onClick={this.specificDateSubmit}
            />,
          ];
      

        return(

           
            <Row>
              <Col xs={2}>
              <RaisedButton label="Today" primary={true} onTouchTap={this.today} />

              </Col>
              <Col xs={2}>
              <RaisedButton label="Yesterday" primary={true} onTouchTap={this.yesterday} />

              </Col>
              <Col xs={2}>
              <RaisedButton label="Previous Week" primary={true}  onTouchTap={this.week}/>

              </Col>
              <Col xs={2}>
              <RaisedButton label="This month" primary={true}  onTouchTap={this.month}/>

              </Col>
              <Col xs={2}>
              <RaisedButton label="This Year" primary={true}  onTouchTap={this.year}/>

              </Col>
              <Col xs={2}>
              <RaisedButton label="Specific Date" primary={true}  onTouchTap={this.specificDate}/>

              </Col>
              <Dialog
          title="Select The Date for Expenses"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
        <DatePicker name="fromDate"
         
         onChange={this.handleChangeDeliveryDateFrom}
         autoOk={this.state.autoOk}
         mode="landscape"
         floatingLabelText="Oh Do i remember date?"
       />
         
        </Dialog>

                
            
            </Row>
           
        )
    }
}