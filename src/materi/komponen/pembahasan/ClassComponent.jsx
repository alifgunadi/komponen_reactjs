import React from "react";


class ClassComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0
        }

        this.handlePlus = this.handlePlus.bind(this);
        this.handleMinus = this.handleMinus.bind(this);
    }

    handlePlus(){
        this.setState({value: this.state.value + 1});
    }
    handleMinus(){
        if(this.state.value > 0) {
            this.setState({value: this.state.value - 1});
        }
    }



    render() {
        return(
            <div>
                <h1>Ini Tugas Basic Component</h1>
                <h5>By: Muhammad Alif Gunadi</h5>
                <h2>Pada komponen pertama adalah Class Component</h2>
                <h3>Disini mencoba membuat code dengan class component
                    <br/> menambah dan mengurang angka</h3>
                <button class="button" onClick={this.handleMinus}>-</button>
                <span>{" "}{this.state.value}{" "}</span>
                <button class="button" onClick={this.handlePlus}>+</button>
            </div>

        )
    }
}

export default ClassComponent