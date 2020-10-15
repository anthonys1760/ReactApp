
const players = [
    {
        name: "Guil",
        score: 50,
        id: 1
      },
      {
        name: "Treasure",
        score: 85,
        id: 3
      },
      {
        name: "Ashley",
        score: 95,
        id: 5
      },
      {
        name: "James",
        score: 80,
        id: 9
      }
];

//Component 1 (This is the scoreboard)(Arrow Functions being used here)
//Here is your Arrow Function
const Header = (props) => {
    //This is what you are returning
return (
    //This is where your HTML goes
        <header>
            <h1>{props.title}</h1>
            <span className="stats">Players: {props.totalPlayers}</span>
        </header>
);
}

//Component 2 (This is the player name category)
const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">
                {props.name}
            </span>
            <Counter score={props.score} />
        </div>
    );
}

//Component 3
const Counter = (props) => {
    return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score">{props.score}</span>
            <button className="counter-action increment"> + </button>
        </div>
    );
}

const App = (props) => {
    return (
        <div className="scoreboard">
            <Header title="My Scoreboard" 
            totalPlayers={ props.initialPlayers.length} />

            {/*Players list */}
            {props.initialPlayers.map( player =>
                <Player
                    name={player.name} 
                    score={player.score}
                    key={player.id}
                />
            )}
            
        </div>
    );
}

//This component is rendering your other components to the DOM
ReactDOM.render(
    <App initialPlayers={players}/>,
    document.getElementById('root')
);

