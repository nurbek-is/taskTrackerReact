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
  const card = prompt('enter card')
  console.log(card)
}
render () {
  return (
    <div className="container">
      <div className="box backlog">
      <div className='header card'>Backlog</div>
      {this.state.backlog.map(card => {
        return (
         <React.Fragment>
          <div className='card'>{card}</div>
         </React.Fragment> 
        )
      })}
      <div onClick ={()=> this.addCard('backlog')} className='add-card'> + Add Card</div>
    </div>

      <div className="box todo">
      <div className='header card'>To Do</div>
      {this.state.todo.map(card => {
        return (
          <React.Fragment>
            <div className='card'>{card}</div>
          </React.Fragment> 
        )
      })}
      <div onClick ={()=>this.addCard('todo')} className='add-card'> + Add Card</div>
      </div>
      
      <div className="box progress">
      <div className='header card'>Progress</div>
      {this.state.progress.map(card => {
        return (
         <React.Fragment>
          <div className='card'>{card}</div>
         </React.Fragment> 
        )
      })}
      <div onClick ={()=> this.addCard("progress")} className='add-card'> + Add Card</div>
      </div>

      <div className="box done">
      <div className='header card'>Done</div>
      {this.state.done.map(card => {
        return (
         <React.Fragment>
          <div className='card'>{card}</div>
         </React.Fragment> 
        )
      })}
       <div onClick ={() => this.addCard('done')} className='add-card'> + Add Card</div>
      </div>

    </div>
    );
  }
}

export default App;
