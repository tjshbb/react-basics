import React from 'react';
import Fruits from './components/Fruits';
import FruitsCounter from './components/FruitsCounter';
import './App.css';

/**
 * The main App component.
 * @returns {JSX.Element} A JSX element.
 */
function App(): JSX.Element {
    // Create an array of fruits
    const [fruits] = React.useState([
        { id: 1, fruitName: 'Apple' },
        { id: 2, fruitName: 'Banana' },
        { id: 3, fruitName: 'Cherry' },
        { id: 4, fruitName: 'Date' },
        { id: 5, fruitName: 'Elderberry' }
    ]);

    return (
        <div className="App">
            <h1>Where should the state go?</h1>
            <Fruits fruits={fruits} />
            <FruitsCounter fruits={fruits} />
        </div>
    );
}

export default App;