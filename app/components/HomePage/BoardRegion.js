import React, { Component } from "react";
import { Board } from "react-trello";
import CardRegion from './CardRegion';
import LaneHeader from './LaneHeader';

export class BoardRegion extends Component { // eslint-disable-line react/prefer-stateless-function

  _beautifyVillagesData( villages ){
    return villages.map((village)=>{
      village.id = village._id;
      village.disableClick = true;
      return village
    })
  }

  _getBoardData( rList, vList ){
    let lanes = [
      {
        id: 'lane1',
        title: 'Regions',
        cards: rList,
        showSearchBar: true
      }
    ]
    if( vList.length > 0  ){
      vList.map((vL) => {

        let vTitle = vL.region.name.de;
        if( vL.villages.length === 0 ){
          vTitle = vTitle + ' - ( No Village found )'
        }

        lanes.push({
          id: vL.region.id,
          title: vTitle,
          label: '-',
          cards: this._beautifyVillagesData( vL.villages )
        })
      })
    }
    return {
      lanes: lanes
    }
  }

  render() {
    let boardData = this._getBoardData( this.props.regionsList, this.props.villagesBoard );
    return (
    	<div>
        <Board 
          data={boardData} 
          customCardLayout
          customLaneHeader={<LaneHeader {...this.props} />}
          draggable={true}
        >
          <CardRegion getRegionVillagesList={this.props.getRegionVillagesList} {...this.props}/>
        </Board>
      </div>
    );
  }
}

export default BoardRegion;