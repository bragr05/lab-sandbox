// Use example: <HelloPerson personInfo={{name: "John", age: 25, favColor: "blue"}} HelloFn={HelloFn}/>

import React from "react";

export default function HelloPerson(props) {
    return (
        <div>
            <h1>
                Hello, {props.personInfo.name}! Its {props.personInfo.age} and
                color fav {props.personInfo.favColor}
            </h1>
            <button
                onClick={() => {
                    props.HelloFn(props.personInfo.name);
                }}
            >
                Hello
            </button>
        </div>
    );
}
