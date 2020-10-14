
//Component 1 (This is the scoreboard)(Arrow Functions being used here)
//Here is your Arrow Function
const Header = () => {
    //This is what you are returning
return (
    //This is where your HTML goes
        <header>
            <h1>Scoreboard</h1>
            <span className="stats">Players: 1</span>
        </header>
);
}

//Component 2 (This is the player name category)
const Player = () => {
    return (
        <div className="player">
            <span className="player-name">
                Anthony
            </span>
            <Counter />
        </div>
    );
}

//Component 3
const Counter = () => {
    return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score">35</span>
            <button className="counter-action increment"> + </button>
        </div>
    );
}

const App = () => {
    return (
        <div className="scoreboard">
            <Header />

            {/*Players list */}
            <Player />
        </div>
    )
}

//This component is rendering your other components to the DOM
ReactDOM.render(
    <App />,
    document.getElementById('root')
);

