import React, { Component } from "react";

export class CardRegion extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div onClick={()=>{
        this.props.getRegionVillagesList({
          headline: this.props.headline,
          id: this.props.id,
          name: this.props.name
        })
      }}>
        <header style={{borderBottom: '1px solid #eee', paddingBottom: 6, marginBottom: 10,display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}} >
          <div style={{ fontSize: 14, fontWeight: 'bold' }}>{this.props.name.de}</div>
        </header>
        <div style={{ fontSize: 12, color: '#BD3B36' }}>
          <div style={{ color: '#4C4C4C' }}>{this.props.headline.de}</div>
        </div>
      </div>
    )
  }
}

export default CardRegion