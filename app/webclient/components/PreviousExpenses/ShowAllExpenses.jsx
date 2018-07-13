import React from 'react';
import {Grid,Row,Col,Carousel,Table,Panel} from 'react-bootstrap';
import RaisedButton from 'material-ui/RaisedButton';
// import NewExpenses from '../NewExpenses/NewExpenses';

import EachShowExpenses from './EachShowExpenses';

export default class ShowAllExpenses extends React.Component{
    

    render(){

        // console.log(data);
        //       data.expenses.forEach((exData)=>{
        //         row.push(
        //             <tr>
        //                 <td>{exData.name}</td>
        //                 <td>{exData.amount}</td>
        //                 </tr>
        //         )
        //       })

       

        let header=[];
        let row=[];
        console.log(this.props.data);
       let newData= this.props.data.map((data,i)=>{
            return(
                <EachShowExpenses
                    key={i}
                    data={data}
                    />
            )
        })
       
       
        return(
<Row>
    <Col xs={4}>
    </Col>
    <Col xs={4}>
    {newData}
    </Col>
    <Col xs={4}>
    </Col>
    
    
   </Row>
    

        )
    }
}