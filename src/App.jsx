class SubPage extends React.Component {
  render() {
    const file = this.props.file;
    return (
      <div className="container-fluid">
      <img src={file} class="img-fluid mx-auto rounded d-block" alt="Responsive image"/>
      </div>
    );
  }
}

class WelcomePage extends React.Component {
  render() {
    const file1 = "./resource/CS5425.png";
    const file2 = "./resource/problem-motivation.png";
    return (
      <div className="container-fluid">
        <h2 style={{"text-align": "center"}} >Hi there, this is the website for CS5425 project</h2>
        <img src={file1} class="img-fluid mx-auto rounded d-block" alt="Responsive image" />
        <img src={file2} class="img-fluid mx-auto rounded d-block" alt="Responsive image" />
      </div>
    );
  }
}

class NewPage extends React.Component {
  render() {
    const file = "./resource/CS5425.jpg";
    return (
      <div className="container-fluid">
        <h2 style={{"text-align": "center"}} >We will continue adding more analysis results...</h2>
        <img src={file} class="img-fluid mx-auto rounded d-block" alt="Responsive image" />
      </div>
    );
  }
}

class Home extends React.Component {

  constructor() {
    super();
    this.state = { 
      display: -1,
     };
  }

  componentDidMount() {
  }

  setDisplay(x) {
    this.setState({
        display : x,
      })
  }

  render() {
    return (
      <React.Fragment>
        <h1 style={{"text-align": "center"}}>Ukraine Russia War Twitter Sentiment Analysis </h1>
        <hr />
        <div class="container-fluid row">
          <div class="col btn-group btn-group-lg mr-2" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-primary btn-lg" onClick={() => { this.setDisplay(-1) }}>Home</button>
          </div>
          <div class="col btn-group btn-group-lg mr-2" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-primary btn-lg" onClick={() => { this.setDisplay(0) }}>Overview</button>
          </div>
          <div class="col btn-group btn-group-lg mr-2" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-primary btn-lg" onClick={() => { this.setDisplay(1) }}>02/21 to 02/27</button>
          </div>
          <div class="col btn-group btn-group-lg mr-2" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-primary btn-lg" onClick={() => { this.setDisplay(2) }}>02/28 to 03/06</button>
          </div>
          <div class="col btn-group btn-group-lg mr-2" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-primary btn-lg" onClick={() => { this.setDisplay(3) }}>03/07 to 03/13</button>
          </div>
          <div class="col btn-group btn-group-lg mr-2" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-primary btn-lg" onClick={() => { this.setDisplay(4) }}>03/14 to 03/20</button>
          </div>
          <div class="col btn-group btn-group-lg mr-2" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-primary btn-lg" onClick={() => { this.setDisplay(5) }}>continuing...</button>
          </div>
        </div>

        <hr />
        {this.state.display == -1 && (<WelcomePage />)}
        {this.state.display == 0 && (<SubPage file={"/resource/overview.jpg"}/>)}
        {this.state.display == 1 && (<SubPage file={"/resource/feb21_feb27.png"}/>)}
        {this.state.display == 2 && (<SubPage file={"/resource/feb28_mar06.png"}/>)}
        {this.state.display == 3 && (<SubPage file={"/resource/mar07_mar13.png"}/>)}
        {this.state.display == 4 && (<SubPage file={"/resource/mar14_mar20.png"}/>)}
        {this.state.display == 5 && (<NewPage />)}
      </React.Fragment>
    );
  }
}

const element = <Home />;

ReactDOM.render(element, document.getElementById('contents'));
