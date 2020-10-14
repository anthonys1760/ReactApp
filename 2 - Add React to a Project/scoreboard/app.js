
const desc = 'I just learned how to create a React node and render it into the DOM';
const myTitleID = 'main-title';
const name = 'Anthony';


const header = (
    <header>
        <h1 id={myTitleID}>{ name }'s First React Element!</h1>
        <p className="">{ desc }</p>
        <input value={10 * 20} />
    </header>
);

ReactDOM.render(
    header,
    document.getElementById('root')
);

console.log(title);