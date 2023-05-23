import React, { Component } from 'react'

export default class Box extends Component {
  render() {
      return (
        <div>
              <div style={
              {
        width: `${this.props.width}em`,
        height: `${this.props.height}em`,
        backgroundColor: this.props.color,
        border: `${this.props.border}em` ,
        borderRadius: `${this.props.borderRadius}em`,
        // Add any other styles you want
      }
      
              }>Box</div>
            <div>
                <button style={{margin:'0.5rem'}}>X</button>
            </div>
        </div>
        
        
    )
  }
}
