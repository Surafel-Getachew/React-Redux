import React from 'react'
import {useSelector,useDispatch} from "react-redux";
import {increment,decrement,show} from "./action/index"
const App = () => {
  const counter = useSelector(state => state.count);
  const loggedIn = useSelector(state => state.loggedIn)
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter {counter}</h1>
      <button onClick = {() => dispatch(increment())}>+</button>
      <button onClick = {() => dispatch(decrement())}>-</button><br/>
      <button onClick = {() => dispatch(show())} >Hide/Seek</button>
      {loggedIn ? <h3> Valuable info i should not see</h3> : ""}
      
    </div>
  )
}

export default App;
