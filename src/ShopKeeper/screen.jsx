function Screen() {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    	
    const characters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', '|', '\\', ':', ';', '"', "\'", '<', '>', ',', '.', '?'];
    return (
        <div id="screen">
            {letters.map((letter, index) => (
                <button key={index} className="typewriter-button">{letter}</button>
            ))}
            {numbers.map((number, index) => (
                <button key={index} className="typewriter-button">{number}</button>
            ))}
            {characters.map((character, index) => (
                <button key={index} className="typewriter-button">{character}</button>
            ))}

        </div>
    );
}
export default Screen