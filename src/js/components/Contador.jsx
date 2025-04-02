import React from "react";

const Contador = (props) => {
    return (
        <div className="bg-dark text-white d-inline-block mx-1 p-4 rounded border border-light">
            <p className="fs-1">
                {props.value}
            </p>
        </div>
    )
}

export default Contador;