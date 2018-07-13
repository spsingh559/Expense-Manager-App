// import React from 'react';
// import {Grid,Row,Col,Carousel} from 'react-bootstrap';
// import RaisedButton from 'material-ui/RaisedButton';

// export default class ShowExpenses extends React.Component{

//     render(){

//         return(

//             <div >
//             ShowExpenses
//             </div>
//         )
//     }
// }

import React from 'react';
import {Grid,Row,Col,Carousel} from 'react-bootstrap';
import {
    Table
  } from 'react-bootstrap';

export default class ShowExpenses extends React.Component{

    render(){
        console.log('today expenses');
        // console.log(this.props.data.expenses);
        let total=0;
        if(this.props.data.length!=0){
        let newData=this.props.data.map((data)=>{
            total=total+parseInt(data.amount);
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
	
      <th colSpan={2} style={{textAlign:"center"}}>{this.props.timeStamp.day+" / "+this.props.timeStamp.month+ " / "+this.props.timeStamp.year}</th>
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
    }else{
       return <center> <h3>Hey, still you have not added Anything?</h3></center>
    }
}

}
