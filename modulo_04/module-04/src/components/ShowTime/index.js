import React, { useState } from "react";

const ShowTime = () => {
    const [date] = useState(new Date());

    return (
        <>
            <span>{date.toLocaleTimeString()}</span>
        </>
    );
};

export default ShowTime;
