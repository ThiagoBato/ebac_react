import React from "react";
import ShowDate from "../ShowDate";
import ShowTime from "../ShowTime";
import ShowText from "../ShowText";

const FirstText = () => {
    return (
        <>
            <p>
                <strong>
                    <ShowText text="Hello World!" />
                </strong>
            </p>
            <ShowTime />
            <ShowDate />
        </>
    );
};

export default FirstText;
