import React from 'react';
import {Table, Row,Col,Grid} from 'react-bootstrap';

import EachExpenseListRow from './EachExpenseListRow';
export default class EachShowExpenses extends React.Component{

    render(){

        let newData=this.props.data.expenses.map((data,i)=>{
                return(
                    <EachExpenseListRow 
                    key={i}
                    data={data}
                    />
                )
        })

        return(
             <div className="panel panel-primary">

        <div className="panel-heading" style={{backgroundColor: "rgb(0, 188, 212)",
    borderColor: "rgb(0, 188, 212)"}}>
    <center>{"This is how much you spend on "+this.props.data.day+" "+this.props.data.month+ " "+this.props.data.year}
    </center></div>
      
      
        <Table  bordered style={{textAlign:"center"}}>
  
  <tbody>
            
            {newData}
            </tbody>
            </Table> 
      </div>
        )
    }
}