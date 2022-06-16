import React from "react";
class App extends React.Component {
  state = {
    text: "empty",
  };

  fetchApi = () => {
    const url = "/flightData";

    fetch(url)
      .then((response) => {
        return response.json(); // converting byte data to json
      })
      .then((data) => {
        console.log(data);
        const text2 = data;
        this.setState({
          text: text2,
        });
      });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.fetchApi}>fetch api</button>
          <h1>{this.state.text}</h1>
          <form action="../../post" method="post" className="form">
            <button type="submit">Connected?</button>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
