import React from "react";
import ShowDate from "../ShowDate";
import ShowTime from "../ShowTime";
import ShowText from "../ShowText";

const FirstText = () => {
    return (
        <>
            <h5>
                <ShowText text="Hello World!" />
            </h5>
            <ShowTime />
            <ShowDate />
        </>
    );
};

export default FirstText;
