import React from "react";
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "ANE8863", date: "2022-06-16", endValue: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleChange2(event) {
    this.setState({ date: event.target.value });
  }

  handleSubmit(event) {
    fetch(
      `https://aerodatabox.p.rapidapi.com/flights/number/${this.state.value}/${this.state.date}`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "57fe8f8eb7msh82261eb4f369855p1fe5e5jsn4f53cd281531",
          "X-RapidAPI-Host": "aerodatabox.p.rapidapi.com",
        },
      }
    )
      .then((response) => response.json())
      .then((json) => this.setState({ endValue: JSON.stringify(json) }));

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Flight Number:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          Date:
          <input
            type="text"
            value={this.state.date}
            onChange={this.handleChange2}
          />
        </label>
        <p>{this.state.value}</p>
        <p>{this.state.date}</p>
        <h1>{this.state.endValue}</h1>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
class App extends React.Component {
  state = {
    arr: "xddd",
    method: "GET",
    url: "https://aerodatabox.p.rapidapi.com/flights/number/ANE8863/2022-06-16",
    headers: {
      "X-RapidAPI-Key": "57fe8f8eb7msh82261eb4f369855p1fe5e5jsn4f53cd281531",
      "X-RapidAPI-Host": "aerodatabox.p.rapidapi.com",
    },
  };

  arrCheck = () => {
    console.log(this.state.arr);
    // this.state.arr.map((item) => console.log(item));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.arrCheck}>arrCheck</button>
          <button onClick={this.fetchApi}>fetch api</button>
          <h1>{this.state.arr}</h1>
          <p>{process.env.REACT_APP_DEMO}</p>

          <NameForm></NameForm>
        </header>
      </div>
    );
  }
}

export default App;
