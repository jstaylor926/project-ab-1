import * as React from 'react';
import Layout from '../components/UI/Layout';
import Greeting from '../features/Greeting';
import {greetingsReducer, initialState} from '../state/Greeting/reducer'


function Home() {
  const [{message, enteredName}, dispatch] = React.useReducer(greetingsReducer, initialState);
  const [startCount, setStartCount] = React,useState(0);
  const [count, setCount] = React.useState(0);
  const setCountCallback = React.useCallback(() => {
    
  })
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'enteredName', 
      payload: e.target.value
    });
    dispatch({
      type: 'message',
      payload: e.target.value
    })
  }

  return (
    <Layout>
      <header>
        <h1>HOME PAGE</h1>
      </header>

      <Greeting message={message} enteredName={enteredName} greetingDispatcher={dispatch} />
    </Layout>
  )
}

export default Home