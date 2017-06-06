import React from "react";

class Saved extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Saved</h3>
        </div>
        <div className="panel-body text-center">

          <h1>Save Articles:</h1>
          <p>{this.props.address}</p>

        </div>
      </div>
    );
  }
}

// Export the component back for use in other files
export default Saved;
