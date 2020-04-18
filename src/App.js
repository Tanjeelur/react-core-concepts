import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const Gandus = ['tudu-nafi','mula','hati'];
  const products =[{name:'Alu',price:'$45.33'},
                    {name:'piaj',price:'$70.33'},
                  {name:'potol',price:'40'},
                 {name:'begun',price:'$30'},
                {name:'chili',price:'$19.6'}]
  const nayoks = ['joshim','Razzak','Dipjol','Kalia'];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Users></Users>
        <Counter></Counter>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(pd => <Product product={pd}></Product>)
        }
        
        <Person name = "Samiul Rafid" naika = "shabnur"></Person>
        <Person name = "Abid talukder" naika = "Shabana"></Person>
        <Person name = "Muhibur Rahman" naika = "Mowshumi"></Person>
        <Person name = {Gandus[2]} naika = "Bobita"></Person>
      </header>
    </div>
   
  );
}
function Users(){
  const [users, setUsers]= useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  },[])
  return(
    <div>
      <h3>Dynamic users:{users.length}</h3>
      <ul>
        
          {users.map(user =><li>{ user.email}</li>)}
  {users.map(user => <li>{user.name}:{user.phone}</li>)}
        
      </ul>
    </div>
  )
}
function Counter(){
  const [count, setcount] = useState(0);
  return (
    <div>
      <h1>
        count:{count}
      </h1>
      <button onMouseMove={() => setcount(count-1)}>puppy</button>
      <button onClick={() => setcount(count +1)}>click</button>
    </div>
  )
}
function Product(props){
 const ProductStyle = {
    border:'3px solid gray',
    borderRadius:'5px',
    width:'200px',
    height:'200px',
    boxShadow:'10px 10px 30px white',
    margin:'2px',
    float:'left'

  }
  return (
    <div style={ProductStyle}>
      <h3>name:{props.product.name}</h3>
      <h5>price:{props.product.price}</h5>
      <button>Buy now</button>
    </div>
  )
}
function Person(props) { 
  const personSyle = {
    color:"yellow",
    border:'3px solid blue',
    margin:'5px'
  } 
return (
  <div style={personSyle} >
    <h1>Name:{props.name}</h1>
    <h3>Hero of {props.naika}</h3>
  </div>
)
}
export default App;
