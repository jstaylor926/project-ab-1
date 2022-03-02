import React, { useReducer, useCallback, useState, useEffect } from 'react';
import Greeting from "../../features/Greeting";
import ListCreator, { ListItem } from '../../components/ListCreator/ListCreator';

const reducer = (state: any, action: any) => {
    console.log("enteredNameReducer");
    switch(action.type) {
        case "enteredName":
            if(state.enteredName === action.payload) {
                return state;
            }
            return { ...state, enteredName: action.payload}
        case "message":
            return { ...state, message: `Hello, ${action.payload}` }
        default:
            throw new Error("Invalid action type " + action.type);
    }
}

const initialState = {
    enteredName: "",
    message: "",
};

function ProjectHooks() {
    const [{ message, enteredName }, dispatch] = useReducer(reducer, initialState);
    const [startCount, setStartCount] = useState(0);
    const [count, setCount] = useState(0);
    const setCountCallback = useCallback(() => {
        const inc = count + 1 > startCount ? count + 1 : Number(count + 1) + startCount;
        setCount(inc);
    }, [count, startCount]);
    const [listItems, setListItems] = useState<Array<ListItem>>();

    useEffect(() => {
        const li = [];
        for(let i = 0; i < count; i++) {
            li.push({ id: i });
        }
        setListItems(li);
    }, [count]);

    const onWelcomeBtnClick = () => {
        setCountCallback();
    }

    const onChangeStartCount = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStartCount(Number(e.target.value));
    }

    console.log("App.tsx render");
    return (
        <div className="App">
            <header className="App-header">
                {/*<img src={logo} className="App-logo" alt="logo" />*/}


                <div style={{marginTop: '10px'}}>
                    <label>Enter a number and well increment it</label>
                    <br/>
                    <input value={startCount} onChange={onChangeStartCount} style={{width: '.75rem'}} />&nbsp;
                    <label>{count}</label>
                    <br/>
                    <button onClick={onWelcomeBtnClick}>Increment count</button>
                </div>

                <div>
                    <ListCreator listItems={listItems} />
                </div>
            </header>
            <div style={{ padding: '5rem', height: '100%', width: '100%'}}>
                <Greeting
                    message={message}
                    enteredName={enteredName}
                    greetingDispatcher={dispatch} />

            </div>
        </div>
    )
}

export default ProjectHooks;
