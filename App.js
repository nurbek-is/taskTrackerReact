import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      backlog:["Chat","Rest","Implement REST backend"],
      todo:["JS Code", "HTML","Fix HTML code"],
      progress:["React"],
      done:["Babel",'Reddux'],
    }
  }
addCard = (name) => {
  //get Data from User
  const card = prompt('enter card');
  //get box from state
  const box= this.state[name]
  //add card into into box
  box.push(card);
  this.setState({[name]:box})
}
render () {
  return (
    <div className="container">
      <div className="box backlog">
      <div className='header card'>Backlog</div>
      {this.state.backlog.map((card,ind) => <div key={String(ind)} className='card'>{card}</div>
       )}
      <div onClick ={()=> this.addCard('backlog')} className='add-card'> + Add Card</div>
    </div>
      <div className="box todo">
      <div className='header card'>To Do</div>
      {this.state.todo.map((card,ind) => <div key={String(ind)} className='card'>{card}</div>
       )}
      <div onClick ={()=>this.addCard('todo')} className='add-card'> + Add Card</div>
      </div>
      
      <div className="box progress">
      <div className='header card'>Progress</div>
      {this.state.progress.map((card,ind) => <div key={String(ind)} className='card'>{card}</div>
       )}
      <div onClick ={()=> this.addCard("progress")} className='add-card'> + Add Card</div>
      </div>

      <div className="box done">
      <div className='header card'>Done</div>
      {this.state.done.map((card,ind) => <div key={String(ind)} className='card'>{card}</div>
       )}
       <div onClick ={() => this.addCard('done')} className='add-card'> + Add Card</div>
      </div>
    </div>
    );
  }
}

export default App;
