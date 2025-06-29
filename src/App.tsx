import React from 'react';
import './App.css';

function App() {
    const names = ["Mary", "Sveta", "Viktor", "Ignat"]
    const users = [
        {id: 1, name: "Mary"},
        {id: 2, name: "Sveta"},
        {id: 7,name: "Ignat"},
        {id: 9,name: "Viktor"}]
    const liElements = users.map((u) => <li key={u.id}>{u.name}</li>)

    return (
        <div className="App">
            {liElements}

        </div>
    );
}

export default App;
