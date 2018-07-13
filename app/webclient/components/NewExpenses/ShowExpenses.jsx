

import React from 'react';
import {Grid,Row,Col,Carousel} from 'react-bootstrap';
import {
    Table
  } from 'react-bootstrap';

export default class ShowExpenses extends React.Component{

    render(){
        console.log('today expenses');
        // console.log(this.props.data.expenses);
        
       
       if(this.props.data.length!=0){

        return(
             <Table  bordered style={{textAlign:"center"}}>
  <thead  >
 
    <tr >
	
      <th colSpan={2} style={{textAlign:"center"}}>{this.props.data[0].day+" / "+this.props.data[0].month+ " / "+this.props.data[0].year}</th>
    </tr>
  </thead>
  <tbody>
            
            <tr>
                <td>
                    Quantity
               
                    </td>
                    <td>
                        {this.props.data[0].qty}
                        </td>
                </tr>
                <tr>
                <td>
                    Price
               
                    </td>
                    <td>
                    {this.props.data[0].price}
                        </td>
                </tr>
                <tr>
                <td>
                    Catagory
               
                    </td>
                    <td>
                        {this.props.data[0].category}
                        </td>
                </tr>
            
            </tbody>
            </Table>
        )
    }else{
       return <center> <h3>Hey, still you have not added Anything?</h3></center>
    }
}

}
