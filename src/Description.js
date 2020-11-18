import React, { Component } from "react";

class Description extends Component {
  state = {
    visibility: "hidden",
    descVisibility: false,
    descriptionProp: "",
    nested: true,
    nestedToDo: [],
  };

  handleDescription = (prop) => {
    this.setState({
      titleProp: prop.taskName,
      descriptionProp: prop.description,
      nested: prop.nested,
      nestedToDo: prop.nestedToDo,
    });
    if (this.state.descVisibility) {
      this.setState({
        visibility: "hidden",
        descVisibility: false,
      });
    } else {
      this.setState({
        visibility: "visible",
        descVisibility: true,
      });
    }
  };

  render() {
    console.log(this.props);
    return (
      <div
        className={"description"}
        style={{
          visibility: this.state.visibility,
          // pointerEvents: this.state.pointerEvents,
        }}>
        <div>{this.state.titleProp}</div>
        <textarea
          className='descriptionprop'
          value={this.state.descriptionProp}
          onChange={(e) => {
            this.setState({ descriptionProp: e.target.value });
          }}
        />
        <div>
          {this.state.nested ? this.state.nestedToDo : "nothing is hereeeee"}
        </div>
      </div>
    );
  }
}

export default Description;
