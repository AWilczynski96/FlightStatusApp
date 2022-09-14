import React from "react";
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "ANE8863",
      date: "2022-06-16",
      departureAirport: "(lotnisko wyjściowe)",
      arrivalAirport: "(lotnisko docelowe)",
      departureScheduledTimeLocal: "(godzina wylotu)",
      arrivalScheduledTimeLocal: "(godzina przylotu)",
      airline: "(linia lotnicza)",
      aircraft: "(model samolotu)",
    };

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
      //.then((json) => this.setState({ endValue: JSON.stringify(json) }))
      .then((json) => {
        this.setState({
          departureAirport: JSON.stringify(json[0].departure.airport.name),
        });
        this.setState({
          arrivalAirport: JSON.stringify(json[0].arrival.airport.name),
        });
        this.setState({
          departureScheduledTimeLocal: JSON.stringify(
            json[0].departure.scheduledTimeLocal
          ),
        });
        this.setState({
          arrivalScheduledTimeLocal: JSON.stringify(
            json[0].arrival.scheduledTimeLocal
          ),
        });
        this.setState({
          airline: JSON.stringify(json[0].airline.name),
        });
        this.setState({
          aircraft: JSON.stringify(json[0].aircraft.model),
        });
      });
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Numer Lotu :
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          Data:
          <input
            type="text"
            value={this.state.date}
            onChange={this.handleChange2}
          />
        </label>
        <p>
          `Lot z {this.state.departureAirport} o godzinie lokalnej{" "}
          {this.state.departureScheduledTimeLocal} do{" "}
          {this.state.arrivalAirport} o godzinie{" "}
          {this.state.arrivalScheduledTimeLocal} `
        </p>
        <p>
          `Lot z {this.state.departureAirport} o godzinie lokalnej{" "}
          {this.state.departureScheduledTimeLocal} do{" "}
          {this.state.arrivalAirport} o godzinie{" "}
          {this.state.arrivalScheduledTimeLocal} `
        </p>
        <p>
          `Lot z {this.state.departureAirport} o godzinie lokalnej{" "}
          {this.state.departureScheduledTimeLocal} do{" "}
          {this.state.arrivalAirport} o godzinie{" "}
          {this.state.arrivalScheduledTimeLocal} `
        </p>
        <p>
          `Lot z {this.state.departureAirport} o godzinie lokalnej{" "}
          {this.state.departureScheduledTimeLocal} do{" "}
          {this.state.arrivalAirport} o godzinie{" "}
          {this.state.arrivalScheduledTimeLocal} `
        </p>
        <p>Linie lotnicze {this.state.airline}</p>
        <p>Model Samolotu {this.state.aircraft}</p>
        <input type="submit" value="Szukaj" />
      </form>
    );
  }
}
// class ItemList extends React.Component {
//   render() {
//     return (
//       <li>{this.props.airlane.name} - {this.props.example}</li>
//     )
//   }
// }
class App extends React.Component {
  state = {};

  arrCheck = () => {
    console.log(this.state.arr);
    // this.state.arr.map((item) => console.log(item));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <p>{process.env.REACT_APP_DEMO}</p> */}

          <NameForm></NameForm>
        </header>
      </div>
    );
  }
}

export default App;
