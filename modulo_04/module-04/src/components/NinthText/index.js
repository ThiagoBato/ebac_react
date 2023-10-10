import React from "react";
import ShowDate from "../ShowDate";
import ShowTime from "../ShowTime";
import ShowText from "../ShowText";

const FirstText = () => {
    return (
        <>
            <p>
                <em>
                    <ShowText text="Hello World!" />
                </em>
            </p>
            <ShowTime />
            <ShowDate />
        </>
    );
};

export default FirstText;
