import { useState } from "react";

const FunctionalComponent = () => {
    const [value, setValue] = useState(0);

    const handlePlus = () => {
        setValue(value + 1)
    }

    const handleMinus = () => {
        if(value > 0) {
            setValue(value - 1)
        }
    }

    return(
        <div>
            <h2>Pada komponen kedua adalah Functional Component</h2>
            <h3>Disini mencoba membuat code dengan functional component
                    <br/> menambah dan mengurang angka</h3>
            <button class="button" onClick={handleMinus}>-</button>
            <span>{" "}{value}{" "}</span>
            <button class="button" onClick={handlePlus}>+</button>
        </div>
    )
}

export default FunctionalComponent