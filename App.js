const root = ReactDOM.createRoot(document.getElementById('root'))

class Button extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.props.event()
    }
    render() {
        return <button id={this.props.ID} className={this.props.Class} onClick={this.handleClick}>{this.props.text}</button>
    }
}

function testing() {
    console.log('abc');
}

function App() {
    return <div>
        <Button ID="button_1" Class="Button" text="Hello World!" event={testing}/>
    </div>
}

root.render(<App/>)