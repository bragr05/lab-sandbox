// Use example: <HelloDestruct personInfo={{name: "John", age: 25, favColor: "blue"}} HelloFn={HelloFn}/>

import React from "react";

export default function HelloDestruct({ personInfo, HelloFn }) {
    const { name = "Anonymous", age, favColor } = personInfo;

    return (
        <div>
            <h1>
                Hello from HelloDestruct, {name}! Its {age} and color fav{" "}
                {favColor}
            </h1>
            <button
                onClick={() => {
                    HelloFn(name);
                }}
            >
                Hello
            </button>
        </div>
    );
}
