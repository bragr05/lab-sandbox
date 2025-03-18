// To import the HelloWorld and ByeWorld components in another file, use the following syntax:
// import HelloWorld, { ByeWorld } from "./components/HelloWorld";

import React from 'react';

export function ByeWorld() {
  return (
    <div>
        <h1>Bye, World!</h1>
    </div>
  );   
}

export default function HelloWorld() {
    const myFunction = () => {
        console.log("Hello, World!");
    }

    myFunction();

  return (
    <div>
        <h1>Hello, World!</h1>
    </div>
  );   
}

