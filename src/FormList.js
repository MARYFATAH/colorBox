import React, { Component } from 'react'


export default class FormList
    extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: '',
            height: '',
            color: ''

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

     handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
    }
    handleSubmit(evt) {
        evt.preventDefault();
        this.props.create(this.state);
        this.setState({
            width: '',
            height: '',
            color: ''
        })
    }
    
  render() {
    return (
      <div className='App'>
            <form>
                <lable style={{margin:'1rem'}} htmlFor=''>Height:</lable>
                <input
                    type='text'
                    name='height'
                    value={this.state.height}
                    id='height'
                    
                    onChange={this.handleChange}
                >
                </input>  
                  <lable style={{margin:'2rem'}}>Width:</lable>
                <input
                    name='width'
                    value={this.state.width}
                    id='width'
                    type='text'
                     onChange={this.handleChange}
                >
                </input>  
                  <lable style={{margin:'2rem'}}>Color:</lable>
                <input
                    name='color'
                    value={this.state.color}
                    id='color'
                    type='text'
                     onChange={this.handleChange}
                >
                </input>  
                   <lable style={{margin:'2rem'}}>Border Radius:</lable>
                <input
                    name='borderRadius'
                    value={this.state.borderRadius}
                    id='borderRadius'
                    type='text'
                     onChange={this.handleChange}
                >
                </input> 
                <button
                    onClick={this.handleSubmit}
                >Add Color!</button>
        </form>
      </div>
    )
  }
}
