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
            <button className="remove-player" onClick={ () => props.removePlayer(props.id) }>✖</button>
                {props.name}
            </span>
            <Counter score={props.score} />
        </div>
    );
}

//Component 3
class Counter extends React.Component {
    state = {
        score: 0
    };

    incrementScore = () => {
        this.setState( prevState => {
            return {
                score: prevState.score + 1
            };
        });
    }

    decrementScore = () => {
        this.setState( prevState => {
            return {
                score: prevState.score - 1
            };
        });
    }
    render() {
        return (
            <div className="counter">
                <button className="counter-action decrement" onClick={() => this.decrementScore()}> - </button>
                <span className="counter-score">{this.state.score}</span>
                <button className="counter-action increment" onClick={() => this.incrementScore()}> + </button>
            </div>
        );
    }
}

class App extends React.Component {

    state = {
        players: [
            {
                name: "Guil",
                id: 1
              },
              {
                name: "Treasure",
                id: 3
              },
              {
                name: "Ashley",
                id: 5
              },
              {
                name: "James",
                id: 9
              }
        ]
    };

    handleRemovePlayer = (id) => {
       this.setState( prevState => {
           return {
              players: prevState.players.filter( p => p.id !== id )
           };
       });
    }

    render() {
        return (
            <div className="scoreboard">
                <Header title="My Scoreboard" 
                totalPlayers={ this.state.players.length } />
    
                {/*Players list */}
                {this.state.players.map( player =>
                    <Player
                        name={player.name} 
                        id={player.id}
                        key={player.id.toString()}
                        removePlayer={this.handleRemovePlayer}
                    />
                )}
            </div>
        );
    }
}

//This component is rendering your other components to the DOM
ReactDOM.render(
    <App />,
    document.getElementById('root')
);

