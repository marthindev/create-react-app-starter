# React Hooks

## What are Hooks?

Hooks are functions that let you “hook into” React state and lifecycle features from function components.

## Why?

Use state and other React features without writing a class.

## What do I need?

React 16.8

## How does it work?KI:tiigidwr2

import React, { useState } from 'react';

function ClickExample() {
  // Declare a new state variable "count"
  // Register a function "setCount" to update the state
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

Setting and manipulating state with hooks:

useState returns a pair: the current state value and a function that lets you update it.

The only argument to useState is the initial state.

´´´
const [count, setCount] = useState(0);
´´´

Setting the initial state:

´´´
state = {
  count: 0
}
´´´

Updating the state:

´´´
setCount(
  this.setState({ planets: res }))
)

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

# No breaking changes

- Completely opt-in
- 100% backwards compatible
- Available now
