import React, { Component } from 'react';
import Box from './Box.js';
import FormList from './FormList.js';



export default class ListingBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [
        {
          width: '20',
          height: '20',
          color: 'blue',
          border: '1',
          borderRadius: '2',
        },
        {
          width: '20',
          height: '20',
          color: 'pink',
          border: '1',
          borderRadius: '2',
        },
      ],
    };
  }

  create = (newBox) => {
    this.setState({
      boxes: [...this.state.boxes, newBox],
    });
  };

  render() {
    const boxes = this.state.boxes.map((box, index) => (
      <Box
        key={index}
        width={box.width}
        height={box.height}
        color={box.color}
        border={box.border}
        borderRadius={box.borderRadius}
      />
    ));

    return (
        <div>
         <FormList create={this.create} />
        {boxes}
        
      </div>
    );
  }
}
