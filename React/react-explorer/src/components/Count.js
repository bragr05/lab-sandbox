import React, { useState, useEffect } from "react";

export default function Count() {
    const [countState, setCountState] = useState(0);

    useEffect(() => {
        document.title = `Count: ${countState}`;
    });

    let Increment = () => {
        setCountState(countState + 1);
    };

    return (
        <div>
            <h1>Cool count</h1>
            <p>{countState}</p>
            <button onClick={Increment}>Increment</button>
        </div>
    );
}
