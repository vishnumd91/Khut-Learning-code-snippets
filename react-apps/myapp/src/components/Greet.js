import { Component } from "react";

export const User = ({ fullName }) => {
  return (
    <>
      <h1>User Component: {fullName}</h1>
    </>
  );
};

const Greet = (props) => {
  const { title } = props;
  return <h1>Hello {title}</h1>;
};

export default Greet;

export class Demo extends Component {
  constructor(props) {
    super(props);
    const { username } = this.props;
    this.username = username;
  }
  render() {
    return <div>Demo Component {this.username}</div>;
  }
}
