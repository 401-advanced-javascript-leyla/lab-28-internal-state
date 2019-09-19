import React from 'react';

import Form from './Form';

export default class App extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        count: 0,
        name: null
      };
    }

    handleNameChange = (newName) => {
        this.setState(previousState => {
            return {
                name: newName,
                count: previousState.count + 1
            }
        });
    };
  
    render() {
      return (
        <React.Fragment>
          <div>
            <div>Name: {this.state.name}</div>
            <div># of Updates: {this.state.count}</div>
          </div>
          <Form name={this.state.name} count={this.state.count} handleNameChange={this.handleNameChange} />
        </React.Fragment>
      );
    }
  }