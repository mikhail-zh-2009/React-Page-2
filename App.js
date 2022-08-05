const root = ReactDOM.createRoot(document.getElementById('root'))

class Button extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        window.open(this.props.link, '_blank');
    }
    render() {
        return <button id={this.props.ID} className={this.props.Class} onClick={this.handleClick}>GitHub</button>
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

class Image extends React.Component {
    constructor(props) {
        super(props)
        this.inner = this.props.inner
    }
    render() {
        return <img src={this.props.Source} className="Panel-Image"/>
    }
}

function OpenGithub() {
    window.open('https://github.com/mikhail-zh-2009/React-Page-2', '_blank');
}

function App() {
    return <div>
        <Panel inner={ <div> <Button ID="github_button" Class="Button" link="https://github.com/mikhail-zh-2009/React-Page"/> ReactJS Calculator <br/> <Image Source="project-react-page.png"/> </div> }/>
        <Panel inner={ <div> <Button ID="github_button" Class="Button" link="https://github.com/mikhail-zh-2009/React-Page-2"/> This Page <br/> <Image Source="image.png"/>  </div> }/>
        <Panel inner={ <div> <Button ID="github_button" Class="Button" link="https://github.com/mikhail-zh-2009/Web-Page-One"/> System Converter <br/> <Image Source="project-web-page-one.png"/>  </div> }/>
        <Panel inner={ <div> <Button ID="github_button" Class="Button" link="https://github.com/mikhail-zh-2009/Web-Page-01.08.2022"/> Bubbles! <br/> <Image Source="project-bubbles.png"/>  </div> }/>
    </div>
}

root.render(<App/>)