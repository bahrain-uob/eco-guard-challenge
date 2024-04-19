import React from "react";

function Print() {
    function handlePrint() {
        window.print();
    }

    return (
        <button onClick={handlePrint}>Print</button>
    );
}

export default Print;
