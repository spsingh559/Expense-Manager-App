import React from 'react';
import {Grid,Row,Col,Carousel} from 'react-bootstrap';
import {
    Table
  } from 'react-bootstrap';

export default class TodayExpenses extends React.Component{

    render(){
        console.log('today expenses');
        // console.log(this.props.data.expenses);
        let total=0;
        let newData=this.props.data[0].expenses.map((data)=>{
            total=total+data.amount;
            return(
                <tr>
                    <td>{data.name}</td>
                    <td>{data.amount + " Rs"}</td>
                    </tr> 
            )
        })
       

        return(
             <Table  bordered style={{textAlign:"center"}}>
  <thead  >
 
    <tr >
	
      <th colSpan={2} style={{textAlign:"center"}}>{this.props.data[0].day+" "+this.props.data[0].month+ " "+this.props.data[0].year}</th>
    </tr>
  </thead>
  <tbody>
            
            {newData}
            <tr style={{backgroundColor:"#CCCDD1"}}>
                    <td >Total</td>
                    <td> {total + "Rs"}</td>
                    
                    </tr>
            </tbody>
            </Table>
        )
    }
}