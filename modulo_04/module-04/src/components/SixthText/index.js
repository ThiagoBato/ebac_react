import React from "react";
import ShowText from "../ShowText";
import ShowDate from "../ShowDate";
import ShowTime from "../ShowTime";

const FirstText = () => {
    return (
        <>
            <h6>
                <ShowText text="Hello World!" />
            </h6>
            <ShowTime />
            <ShowDate />
        </>
    );
};

export default FirstText;
