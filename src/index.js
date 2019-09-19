import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0,
      name: null
    };
  }

  handleChange = event => {
    this.setState({name: event.target.value});
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({name:this.state.name, count: this.state.count + 1});
  };


  render() {
    return (
      <React.Fragment>
        <div>
          <div>Name: {this.state.name}</div>
          <div># of Updates: {this.state.count}</div>
        </div>
        <form onSubmit={this.handleSubmit} >
          <input type="text" value={this.state.name} onChange={
            this.handleChange
          } />
          <button type="submit">Change Name</button>
        </form>
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
