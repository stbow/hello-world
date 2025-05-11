// SIMPLE JSX ELEMENT:
const JSX = <div></div>;

const JSX1 = (
  <div className="myDiv">
    <h1>Add a class to this div</h1>
  </div>
);

// STATELESS FUNCTIONAL COMPONENT:
const MyComponent = function() {
  return (
    <div className='customClass' />
  );
}

// ES6 CLASS COMPONENT:
const CurrentDate = (props) => {
  return (
    <div>
      <p>The current date is: {props.date}</p>
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        <CurrentDate date={Date()}/>
      </div>
    );
  }
};

ReactDOM.render(<Calendar />, document.getElementById("challenge-node"));

// DEFAULT PROPS
const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
    </div>
  )
};

ShoppingCart.defaultProps = { items: 0 };

// OVERRIDING DEFAULT PROPS
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}

Items.defaultProps = {
  quantity: 0
}

class ShoppingCart1 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items quantity={10}/>
  }
};

// DEFINE REQUIRED TYPES FOR PROPS
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

Items.propTypes = { quantity: PropTypes.number.isRequired };

Items.defaultProps = {
  quantity: 0
};

class ShoppingCart2 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items />
  }
};

//ACCESS PROPS IN ES6 CLASS COMPONENT
class App extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
            <Welcome name="saber"/>
        </div>
    );
  }
};

class Welcome extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
          <p>Hello, <strong>{this.props.name}</strong>!</p>
        </div>
    );
  }
};

/* A stateless functional component is any function you write which accepts props and returns JSX. A stateless component, on the other hand, is a class that extends React.Component, but does not use internal state (covered in the next challenge). Finally, a stateful component is a class component that does maintain its own internal state. You may see stateful components referred to simply as components or React components. */

// STATES

class MyComponent2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello"
    };
    // bind function to the component
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      text: "You clicked!"
    });
  }
  render() {
    return (
      <div>
        { /* Call function */ }
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.text}</h1>
      </div>
    );
  }
};

// TOGGLE STATE
class MyComponent4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    // bind the thing to the component
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }
  // write function
  toggleVisibility() {
    this.setState(state => ({
      visibility: state.visibility ? false : true
    }))
  }
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
};

// DO MORE THINGS
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // Change code below this line
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
    // Change code above this line
  }
  // Change code below this line
  increment() {
    this.setState(state => ({
      count: state.count +1
    }))
  };
  decrement() {
    this.setState(state => ({
      count: state.count -1
    }))
  };
  reset() {
    this.setState(state => ({
      count: 0
    }))
  };
  // Change code above this line
  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};
