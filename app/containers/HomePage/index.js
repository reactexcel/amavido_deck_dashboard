import React, { Component } from "react";
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import * as actions from './actions';

export class HomePage extends Component { // eslint-disable-line react/prefer-stateless-function
	
	constructor (props) {
    super(props);
    this.state = {
      regionsList: []
    };
  }

  componentDidMount() {
  	this.props.getRegionsList();
  }

  componentWillReceiveProps(nextProps){
  	console.log('----nextProps')
  	console.log( nextProps )
  }

  render() {
    let isLoading = this.state.isLoading;
    return (
    	<div>
        asdasdasdasdasdasd 
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps = {}) => {
  return {
    regionsList: state.toJS().regionsList.regionsList
  }
}

function mapDispatchToProps(dispatch) {
  return {
  	getRegionsList: () =>{
  		return dispatch(actions.getRegionsList());
  	},
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
