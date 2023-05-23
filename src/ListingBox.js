import React, { Component } from 'react';
import Box from './Box.js';
import FormList from './FormList.js';



export default class ListingBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [ ],
    };
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
  }
  remove(id) {
    this.setState({
      boxes: this.state.boxes.filter(box => box.id !== id)
    });
  }

  create = (newBox) => {
    this.setState({
      boxes: [...this.state.boxes, newBox],
    });
  };

  render() {
    const boxes = this.state.boxes.map((box) => (
      <Box
        key={box.id}
        id={box.id}
        width={box.width}
        height={box.height}
        color={box.color}
        border={box.border}
        borderRadius={box.borderRadius}
        removeBox={()=> this.remove(box.id)}
      />
    ));

    return (
        <div>
        <FormList create={this.create}
          remove={this.remove } />
        {boxes}
        
      </div>
    );
  }
}
