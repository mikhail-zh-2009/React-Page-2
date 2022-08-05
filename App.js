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

class Panel extends React.Component {
    constructor(props) {
        super(props)
        this.inner = this.props.inner
    }
    render() {
        return <div className="Panel">{this.inner}</div>
    }
}

function OpenGithub() {
    window.open('https://github.com/mikhail-zh-2009/React-Page-2', '_blank');
}

function App() {
    return <div>
        <Panel inner={
            <div>
                <Button ID="github_button" Class="Button" text="GitHub" event={OpenGithub}/>
            </div>
        }/>
    </div>
}

root.render(<App/>)