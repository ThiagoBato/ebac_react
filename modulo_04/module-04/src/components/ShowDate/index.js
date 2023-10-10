import React, { useState } from "react";

function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${date}/${month}/${year}`;
}

const ShowDate = () => {
    const [currentDate] = useState(getDate());
    return (
        <>
            <span className="dateSpan">{currentDate}</span>
        </>
    );
};

export default ShowDate;
