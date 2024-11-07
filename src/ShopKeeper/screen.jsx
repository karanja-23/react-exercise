import { useState } from 'react';
import '../ShopKeeper/index.css';

function Screen() {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    const characters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', '|', '\\', ':', ';', '"', "'", '<', '>', ',', '.', '?'];

    const [screen, setScreen] = useState(1);

    // Define screens with 4x6 content
    const screens = [
        { content: [...numbers, '!', '@', '#', '$', '%', '^', '&', '*', '(', ')'] }, // Screen 1
        { content: letters.slice(0, 12).concat(['-', '_', '=', '+']) }, // Screen 2
        { content: letters.slice(12).concat(['[', ']', '{', '}', '|']) }, // Screen 3
        { content: characters.slice(12) } // Screen 4
    ];

    const handleNext = () => {
        setScreen((prevScreen) => (prevScreen < screens.length ? prevScreen + 1 : prevScreen));
    };

    const handlePrev = () => {
        setScreen((prevScreen) => (prevScreen > 1 ? prevScreen - 1 : prevScreen));
    };

    return (
        <div id="screen">
            <div className="button-group">
                {screens[screen - 1].content.map((item, index) => (
                    <button key={index} className="typewriter-button">{item}</button>
                ))}
            </div>
            <div className="navigation">
                <button onClick={handlePrev} className="typewriter-button" disabled={screen === 1}>Prev</button>
                <button onClick={handleNext} className="typewriter-button" disabled={screen === screens.length}>Next</button>
            </div>
        </div>
    );
}

export default Screen;
