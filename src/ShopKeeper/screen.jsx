import { useState } from 'react';
import '../ShopKeeper/index.css';

function Screen() {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    const characters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', '|', '\\', ':', ';', '"', "'", '<', '>', ',', '.', '?'];

    const [screen, setScreen] = useState(1);
    const [clickCounts, setClickCounts] = useState({ prev: 0, next: 0, buttons: {} });

    // Define screens with 4x6 content
    const screens = [
        { content: [...numbers, '!', '@', '#', '$', '%', '^', '&', '*', '(', ')'] }, // Screen 1
        { content: letters.slice(0, 12).concat(['-', '_', '=', '+']) }, // Screen 2
        { content: letters.slice(12).concat(['[', ']', '{', '}', '|']) }, // Screen 3
        { content: characters.slice(12) } // Screen 4
    ];

    const handleNext = () => {
        setScreen((prevScreen) => (prevScreen < screens.length ? prevScreen + 1 : prevScreen));
        setClickCounts(prevCounts => ({ ...prevCounts, next: prevCounts.next + 1 }));
    };

    const handlePrev = () => {
        setScreen((prevScreen) => (prevScreen > 1 ? prevScreen - 1 : prevScreen));
        setClickCounts(prevCounts => ({ ...prevCounts, prev: prevCounts.prev + 1 }));
    };

    const handleButtonClick = (item) => {
        setClickCounts(prevCounts => ({
            ...prevCounts,
            buttons: {
                ...prevCounts.buttons,
                [item]: (prevCounts.buttons[item] || 0) + 1
            }
        }));
    };

    return (
        <div id="screen">
            <div className="button-group">
                {screens[screen - 1].content.map((item, index) => (
                    <button key={index} className="typewriter-button" onClick={() => handleButtonClick(item)}>{item}</button>
                ))}
            </div>
            <div className="navigation">
                <button onClick={handlePrev} className="typewriter-button" disabled={screen === 1}>Prev</button>
                <button onClick={handleNext} className="typewriter-button" disabled={screen === screens.length}>Next</button>
            </div>
            <ClickCountForm clickCounts={clickCounts} />
        </div>
    );
}

function ClickCountForm({ clickCounts }) {
    return (
        <div className="click-count-form">
            <h4>Click Tracker</h4>
            <p>Previous button clicked: {clickCounts.prev} times</p>
            <p>Next button clicked: {clickCounts.next} times</p>
            {Object.entries(clickCounts.buttons).map(([button, count], index) => (
                <p key={index}>Button "{button}" clicked: {count} times</p>
            ))}
        </div>
    );
}

export default Screen;
