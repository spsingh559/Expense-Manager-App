import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav.jsx';
import Footer from './footer.jsx';



export default class ParentComponent extends React.Component{
	static get contextTypes() {
	    return {
	      router: React.PropTypes.object.isRequired
	    }
	  }

	render(){
	

		return(
			<div>
			<Nav />
			{this.props.children}
			<Footer />
			</div>
			);
	}
}