import React, { Component } from "react";
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import _ from 'lodash'
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

  _checkRegionLaneExist = (regionId) => {
    let match = _.find(this.state.villagesBoard, function(o) { 
      return o.region.id === regionId; 
    });
    if(match){
      return true;
    }
    return false;
  }

  _doGetRegionVillagesList = (region) => {
    if(!this._checkRegionLaneExist(region.id)){
      this.props.getRegionVillagesList(region)
    }
  }

  render() {
    return (
    	<div>
        <BoardRegion 
          regionsList={this.state.regionsList}
          villagesBoard={this.state.villagesBoard}
          getRegionVillagesList={this._doGetRegionVillagesList}
          removeRegion={this.props.removeRegion}
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
  	getRegionsList: () => {
  		return dispatch(actions.getRegionsList());
  	},
    getRegionVillagesList: (region) => {
      return dispatch(actions.getRegionVillagesList(region));
    },
    removeRegion: ( regionId ) => {
      return dispatch(actions.removeRegion(regionId));
    },
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
