//React: Use the Lifecycle Method componentWillMount

// special methods that provide opportunities to perform actions at specific points in the lifecycle of a component, called lifecyle hooks/methods.

// Example of methods: 

// componentWillMount()

// componentDidMount()

// componentWillReceiveProps()

// shouldComponentUpdate()

// componentWillUpdate()

// componentDidUpdate()

// componentWillUnmount()


class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    // change code below this line
    console.log("MyComponent will mount!");
    // change code above this line
  }
  render() {
    return <div />
  }
};