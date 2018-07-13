import React from 'react';
import { Link } from 'react-router';
import Axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import {Grid} from 'react-bootstrap';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';
// import {Link} from 'react-router';
// import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';

import {Image} from 'react-bootstrap';

const userInfo=[
    {
    username: "Jit",
    password: "123456",
    roleType: 'A' 
  },
  {
    username: "Operator",
    password: "123456",
    roleType: 'B'
  }
]

const style = {
  labelStyle: {
      width: 'auto',
      height: '22px',
      family: 'Helvetica',
      size: '18px',
      weight: 'bold',
      style: 'normal',
      stretch: 'normal',
      height: 'normal',
      spacing: 'normal',
      align: 'left',
      color: '#ffffff',
      textTransform: 'lowercase'
     },
     labelStyle1: {
      width: 'auto',
      height: '22px',
      family: 'Helvetica',
      size: '18px',
      marginLeft:"-100px",
      weight: 'bold',
      style: 'normal',
      stretch: 'normal',
      height: 'normal',
      spacing: 'normal',
      align: 'left',
      color: '#ffffff',
      textTransform: 'lowercase'
     },
  buttonBorder:{
    width: '167px',
    height: '48px',
    radius: '6px',
    margin: '8px',
    border: 'solid 1px #ffffff',
    color:'#FFFFFF'
  }
} ;

export default class Login extends React.Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
      
    }
   
  }
  
  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired
    }
  }
  

  
  loginClick=()=>{
    
    let obj={
      username:this.state.username,
      password:this.state.password
  }
  this.context.router.push('/');
// alert('clicked');
  // Axios({
  //   method:'post',
  //   url:'http://laas-123.eastus.cloudapp.azure.com:8080/api/login',
  //   data:obj
  // })
  // .then((data) => {
  //  console.log(data)
    
  //   if(data.data.response=="Succes"){
  //     sessionStorage.setItem('userLoginDetails',JSON.stringify(data.data));
      
      


  //     this.context.router.push('/');



  //   }else{
  //     alert('login Failed');
  //   }

  // })
  // .catch((error) => {
  //   console.log(error);
  //   console.log(error+"error in Login data for post");
  // });

   
  }

  navigationLandingPage=()=>{
    this.context.router.push('/register');
  }

  handleUser=(e)=>{
    this.setState({username:e.target.value})
  }
  hanldePwd=(e)=>{
    this.setState({password:e.target.value});
  }
  
  render() {
    
   
    
    
      return (
        <div>
        <AppBar
            title="MyExpenses"
            style={{position: "fixed",top:'0'}}
           >
          <FlatButton style={style.labelStyle1} label="Register" onTouchTap={this.navigationLandingPage} />
          </AppBar>
        <div className="backgroundLogin"> 
        <center>
        <div style={{height:'450px',width:'500px',marginTop:'100px',borderRadius: "6px",border: "solid 1px black"}}  >
        {/* <pap style={{height:'300px',width:'500px',backgroundColor:'white',marginTop:'200px'}}> */}


        <h2 style={{marginTop: '50px',color:"white"}}>
        Secured Authentication System
        </h2>
        {/* <br/>
        {finalImage}
        <br /> */}
        <br />

        <TextField
      
      hintText="User Name"
      hintStyle={{color:"white"}}
      inputStyle={{color:"white"}}
      floatingLabelStyle={{color:"white"}}
      floatingLabelText="Enter User Name"
      onChange = {this.handleUser}
     
    /><br />
    <TextField
    type="password"
      hintText=" Password"
      inputStyle={{color:"white"}}
      hintStyle={{color:"white"}}
      floatingLabelStyle={{color:"white"}}
      onChange = {this.hanldePwd}
      floatingLabelText="Enter Password"
     
    /><br />
        <div style={{marginTop:"50px"}}>
        <RaisedButton label="Login" primary={true}  onTouchTap={this.loginClick}/>
        </div>
        </div>
        </center>
        </div>
        </div>
        )
    }
  }