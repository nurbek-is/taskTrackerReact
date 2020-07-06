import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }

render () {
  return (
    <div className="container">
      <div className="box backlog">
      <div className='header card'>Backlog</div>
      <div className='card'>Implement Chat</div>
      <div className='card'>Implement Chat</div>
      <div className='card'>Implement REST backend</div>
      <div className='add-card'> + Add Card</div>
    </div>

      <div className="box todo">
      <div className='header card'>To Do</div>
      <div className='card'>Implement Chat</div>
      <div className='card'>Fix JS code</div>
      <div className='card'>Clean HTML</div>
      <div className='add-card'> + Add Card</div>
      </div>
      
      <div className="box progress">
      <div className='header card'>Progress</div>
      <div className='card'>Implement Chat</div>
      <div className='card'>Fix JS code</div>
      <div className='card'>Clean HTML</div>
      <div className='add-card'> + Add Card</div>
      </div>

      <div className="box done">
      <div className='header card'>Done</div>
      <div className='card'>Implement Chat</div>
      <div className='card'>Fix JS code</div>
      <div className='card'>Clean HTML</div>
      <div className='add-card'> + Add Card</div>
      </div>

    </div>
    );
  }
}

export default App;
