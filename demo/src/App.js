import React from "react";
const axios = require("axios");
class App extends React.Component {
  state = {
    arr: "nie ma",
    method: "GET",
    url: "https://aerodatabox.p.rapidapi.com/flights/number/ANE8863/2022-06-16",
    headers: {
      "X-RapidAPI-Key": "57fe8f8eb7msh82261eb4f369855p1fe5e5jsn4f53cd281531",
      "X-RapidAPI-Host": "aerodatabox.p.rapidapi.com",
    },
  };

  fetchApi = () => {
    fetch(this.state.url, {
      method: this.state.method,
      headers: this.state.headers,
    })
      .then((response) => response.json())
      .then((json) => this.setState({ arr: JSON.stringify(json) }));
  };
  // fetchApi = () => {
  //   //this.arr = this.arr.bind(this);
  //   axios
  //     .request({
  //       url: this.state.url,
  //       method: this.state.method,
  //       headers: this.state.headers,
  //     })
  //     .then(function (response) {
  //       //console.log(response.data);
  //       this.setState({ arr: response.data });
  //       // const xd = () => {
  //       //   this.setState({
  //       //     count: this.state.count,
  //       //   });
  //       // };
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  //   // const url = "/flightData";

  //   // fetch(url)
  //   //   .then((response) => {
  //   //     return response.json(); // converting byte data to json
  //   //   })
  //   //   .then((data) => {
  //   //     console.log(data);
  //   //     const text2 = data;
  //   //     this.setState({
  //   //       text: text2,
  //   //     });
  //   //   });
  // };
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
          <form action="../../post" method="post" className="form">
            <button type="submit">Connected?</button>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
