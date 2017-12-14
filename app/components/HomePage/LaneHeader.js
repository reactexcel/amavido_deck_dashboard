import React, { Component } from "react";

export class LaneHeader extends Component { // eslint-disable-line react/prefer-stateless-function

  buttonHandler = () => {
    this.props.removeRegion( this.props.id );
  }

  render() {
    return (
       <div>
        <header
          style={{
            borderBottom: '2px solid #c5c5c5',
            paddingBottom: 6,
            marginBottom: 10,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
        >
          <div style={{fontSize: 14, fontWeight: 'bold'}}>
            {this.props.title}
          </div>
          {this.props.label &&
            <div style={{width: '30%', textAlign: 'right', fontSize: 13}}>
              <button onClick={this.buttonHandler} style={{cursor: 'pointer'}}>
                X
              </button>
            </div>}
        </header>
      </div>
    )
  }
}

export default LaneHeader