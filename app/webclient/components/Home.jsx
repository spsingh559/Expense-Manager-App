
import React from 'react';
import { Link } from 'react-router';
import Axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
// import {Grid} from 'react-bootstrap';
import {Grid,Row,Col,Carousel} from 'react-bootstrap';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
// Component 
import TodayExpenses from './Dashboard/TodayExpenses';
import TotalExpenses from './Dashboard/TotalExpenses';
// Component End



const data=[{
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
}
]

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



export default class Home extends React.Component {

  state={
    todayData:data,
    
  }

//   componentDidMount=()=>{
//     let retrievedUserDetails= JSON.parse(sessionStorage.getItem('userLoginDetails'));
//     // console.log()

// Axios({
//   method:'get',
//   url:'http://laas-123.eastus.cloudapp.azure.com:8080/api/getInstanceData/'+retrievedUserDetails.username
// })
// .then(function(response){
//   // this.context.router.push('/instanceInfo');
//     console.log(response.data);
//     var running=0;
//   var stopped=0;
//   var total=0;
//     if(response.length==0){
//       alert('no data found');
//       this.setState({instanceData:this.state.instanceData});
//     }else{
//       console.log(response.data + '----------in length>0-----------------');

//     response.data.forEach((data)=>{
//       if(data.status.currentStatus=="CREATED" ||data.status.currentStatus=="CREATING" || data.status.currentStatus=="VM AGENT UP" || data.status.currentStatus=="running"){
//         running++;
//       }else if(data.status.currentStatus=="Stopped"){
//         stopped++
//       }
//       if(data.status.currentStatus!=="Deleted"){
//         total++;
//       }
//     })

//     this.setState({running,stopped,total});
    
//     // this.setState({instanceData,instanceData});
//     this.setState({ instanceData: response.data});
//     // console.log('state data');
//     // console.log(this.state.instanceData);
//   }
// }.bind(this))

//   }
static get contextTypes() {
  return {
    router: React.PropTypes.object.isRequired
  }
}

addNew=()=>{
  this.context.router.push('/addExpenses');
}
  
  
  render() {
  console.log('today data');
  console.log(this.state.todayData)
      return (
        <div className="background">
        <Grid style={{marginTop:"90px"}}>  
    <Row> 
      <Col xs={6} style={style.instanceStatusStyle}>
        <center><h2>Todays Expenses List </h2></center>
      <TodayExpenses data={this.state.todayData}/>
      </Col>
      <Col xs={1}>
      </Col>
      <Col xs={5}>
      <Row>
       <Col xs={12} style={style.instanceCountStyle}>
     <TotalExpenses />
       </Col>
        </Row>
        <Row style={{marginTop:"50px"}}>
        <Col xs={12}>
        <center>
        <FloatingActionButton style={style}>
      <ContentAdd onTouchTap={this.addNew}/>
    </FloatingActionButton>
    </center>
       </Col>
         
          </Row>
      </Col>

      </Row>
           
          </Grid>
          </div>
      )
    }
  }



