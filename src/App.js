import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      isLogged : true,
      students : [
        {id:1, name:"Mouli", age:23},
        {id:2, name:"Yamini", age:26},
        {id:3, name:"Aruna", age:23},
        {id:4, name:"Mounika", age:21},
        {id:5, name:"Shammu", age:22},
        {id:6, name:"Ram", age:100},
        {id:7, name:"Seetha", age:100},
        {id:8, name:"Prema", age:21},
        {id:9, name:"Poori", age:20},
        {id:10, name:"Gayu", age:22},
        {id:11, name:"Sravani", age:22},
        {id:12, name:"Lokesh", age:22},
        {id:13, name:"Sai", age:22},
        {id:14, name:"Bhanu", age:22},
        {id:15, name:"Sumanth", age:22},
        {id:16, name:"Bharath", age:23},
        {id:17, name:"Charitha", age:23},
        {id:18, name:"Ooha", age:21},
        {id:19, name:"Jincy", age:20},
        {id:20, name:"Lekha", age:21}
      ]
    }
  }
  render(){
    return(<div>
      {this.state.isLogged && this.state.students.map(student => (
        <div key={student.id} className="student-label">
          <h2>{student.name}</h2>
          <p>Age : {student.age}</p>
        </div>
      ))}
    </div>)
  }
}
export default App;
