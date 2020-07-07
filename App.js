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

moveRight = (name,ind) => {
  //get box from state
  const box = this.state[name];
  const todo = this.state.todo;
  //add card into next box
  todo.push(box[ind]);
  //remove card from the current box
  box.splice(ind,1)
  //Setting State
  this.setState({todo,[name]:box})
}
render () {
  return (
    <div className="container">
      <div className="box backlog">
      <div className='header card'>Backlog</div>
      {this.state.backlog.map((card,ind) => { 
        return  (<div key={String(ind)} className='card'>
        {card}
      <span onClick={() => this.moveRight('backlog', ind)} className="move-right">right</span>
        </div>
      )
      })}
      <div onClick ={()=> this.addCard('backlog')} className='add-card'> + Add Card</div>
    </div>
      <div className="box todo">
      <div className='header card'>To Do</div>
      {this.state.todo.map((card,ind) => { 
        return  (<div key={String(ind)} className='card'>
        <span className="move-left">left</span>
        {card}
        <span className="move-right">right</span>
        </div>
      )
      })}
      <div onClick ={()=>this.addCard('todo')} className='add-card'> + Add Card</div>
      </div>
      
      <div className="box progress">
      <div className='header card'>Progress</div>
      {this.state.progress.map((card,ind) => { 
        return  (<div key={String(ind)} className='card'>
        <span className="move-left">left</span>
        {card}
        <span className="move-right">right</span>
        </div>
      )
      })}
      <div onClick ={()=> this.addCard("progress")} className='add-card'> + Add Card</div>
      </div>

      <div className="box done">
      <div className='header card'>Done</div>
      {this.state.done.map((card,ind) => { 
        return  (<div key={String(ind)} className='card'>
        <span className="move-left">left</span>
        {card}
        <span className="move-right">right</span>
        </div>
      )
      })}
       <div onClick ={() => this.addCard('done')} className='add-card'> + Add Card</div>
      </div>
    </div>
    );
  }
}

export default App;
