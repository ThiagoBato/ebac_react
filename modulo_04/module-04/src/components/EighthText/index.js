import React from "react";
import ShowDate from "../ShowDate";
import ShowTime from "../ShowTime";
import ShowText from "../ShowText";

const FirstText = () => {
    return (
        <>
            <p>
                <small>
                    <ShowText text="Hello World!" />
                </small>
            </p>
            <ShowTime />
            <ShowDate />
        </>
    );
};

export default FirstText;
