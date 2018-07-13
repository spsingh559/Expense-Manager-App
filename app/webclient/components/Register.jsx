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
      confirmPassword:'',
      phoneNumber:"",
      emailID:""
    }
    
  }
  
  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired
    }
  }

  username=(e)=>{
    this.setState({username:e.target.value})
  }
  password=(e)=>{
    this.setState({password:e.target.value})
  }
  confirmPassword=(e)=>{
    this.setState({confirmPassword:e.target.value})
  }
  phoneNumber=(e)=>{
    this.setState({phoneNumber:e.target.value})
  }
  emailID=(e)=>{
    this.setState({emailID:e.target.value})
  }


  signUp=()=>{
    this.setState({signUpStatus:true});
  }


  loginClick=()=>{
    // this.context.router.push('/');

    let obj={
        username:this.state.username,
        password:this.state.password,
        confirmPassword:this.state.confirmPassword,
        phoneNumber:this.state.phoneNumber,
        emailID:this.state.emailID
    }

    console.log('registration obj is ', obj);

    if(this.state.password==this.state.confirmPassword){
        Axios({
            method:'post',
            url:"http://laas-123.eastus.cloudapp.azure.com:8080/api/registration",
            data:obj
            })
            .then((data) => {
                console.log(data);
                if(data.data=="success"){
                   alert('registration successful');
                   this.context.router.push('/login');
                }else{
                    alert('Server Issue, Try Again after some Time')
                }
                
            // console.log('new trade connected to server for post is');
            // console.log(data.data);
            // alert('Transaction hash for new trade is'+ data.data);
          
                   
            })
            .catch((error) => {
            console.log(error);
            console.log(error+"error in new Trade");
            });

    }else{
        alert('Passowrd do not match')
    }
  }

  navigationLandingPage=()=>{
    this.context.router.push('/login');
  }

  render() {

    
      return (
        <div>
        <AppBar
            title="My Expenses"
            style={{position: "fixed",top:'0'}}
           >
          <FlatButton style={style.labelStyle1} label="Login" onTouchTap={this.navigationLandingPage} />
          </AppBar>
        <div className="backgroundLogin">
        <center>
        <div style={{height:'100%',width:'600px',marginTop:'70px',borderRadius: "6px",border: "solid 1px black"}}  >
        {/* <pap style={{height:'300px',width:'500px',backgroundColor:'white',marginTop:'200px'}}> */}


        <h3 style={{marginTop: '10px'}}>
        Register Today for NextGen Expenses Manager 
        </h3>
        <br />
        <TextField
      
      hintText="User Name"
      inputStyle={{color:"white"}}
      hintStyle={{color:"white"}}
      floatingLabelStyle={{color:"white"}}
      floatingLabelText="Enter User Name"
      onChange = {this.username}
    /><br />
    <TextField
      type="number"
      hintText="Enter Phone Number"
      inputStyle={{color:"white"}}
      hintStyle={{color:"white"}}
      floatingLabelStyle={{color:"white"}}
      floatingLabelText="Enter Phone Number"
      onChange = {this.phoneNumber}
    /><br />
     <TextField
      type="email"
      hintText="Enter Email ID"
      inputStyle={{color:"white"}}
      hintStyle={{color:"white"}}
      floatingLabelStyle={{color:"white"}}
      floatingLabelText="Enter Email ID"
      onChange = {this.emailID}
    /><br />
  
    <TextField
    type="password"
      hintText=" Set Password"
      inputStyle={{color:"white"}}
      hintStyle={{color:"white"}}
      floatingLabelStyle={{color:"white"}}
      onChange = {this.password}
      floatingLabelText="Set Password"
    /><br />
    <TextField
    type="password"
      hintText=" Confirm Password"
      inputStyle={{color:"white"}}
      hintStyle={{color:"white"}}
      floatingLabelStyle={{color:"white"}}
      onChange = {this.confirmPassword}
      floatingLabelText="Confirm Password"
    /><br />
        <div style={{marginTop:"50px"}}>
        <RaisedButton label="Register" primary={true}  onTouchTap={this.loginClick}/>
        </div>
        </div>
        </center>
        </div>
        </div>
        )
    }
  }