import { Component } from "react";

interface State {
  signed: boolean;
}

interface Props {}

export default class User extends Component<{}, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      signed: false,
    };
  }

  componentDidMount() {
    //document.addEventListener();
    this.setState({ signed: true });
  }

  componentDidUpdate() {}

  componentWillUnmount() {
    // document.removeEventListener();
  }

  componentDidCatch() {} //Error boundary

  render() {
    return <h1>{this.state.signed}</h1>;
  }
}
