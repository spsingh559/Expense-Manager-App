import React from 'react';

export default class EachExpenseListRow extends React.Component{

    render(){

        return(
            <tr>
            <td> {this.props.data.name}</td>
            <td>{this.props.data.amount + " Rs"} </td>
                </tr>
        )
    }
}