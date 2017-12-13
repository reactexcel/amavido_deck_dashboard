import React, { Component } from "react";
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import * as actions from './actions';

import BoardRegion from '../../components/HomePage/BoardRegion';

export class HomePage extends Component { // eslint-disable-line react/prefer-stateless-function
	
	constructor (props) {
    super(props);
    this.state = {
      regionsList: [],
      villagesBoard: []
    };
  }

  componentDidMount() {
  	this.props.getRegionsList();
  }

  componentWillReceiveProps(nextProps){
    let regionsList = nextProps.regionsList.map((region)=>{
      region.id = region._id;
      return region
    })
    this.setState({
      regionsList: regionsList,
      villagesBoard: nextProps.villagesBoard
    })
  }

  render() {
    return (
    	<div>
        <BoardRegion 
          regionsList={this.state.regionsList}
          villagesBoard={this.state.villagesBoard}
          getRegionVillagesList={this.props.getRegionVillagesList}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps = {}) => {
  return {
    regionsList: state.toJS().regionsList.regionsList,
    villagesBoard: state.toJS().regionsList.villagesBoard,
  }
}

function mapDispatchToProps(dispatch) {
  return {
  	getRegionsList: () =>{
  		return dispatch(actions.getRegionsList());
  	},
    getRegionVillagesList: (region) =>{
      return dispatch(actions.getRegionVillagesList(region));
    },
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
