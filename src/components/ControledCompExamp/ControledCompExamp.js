import React from 'react';

class ControledCompExamp extends React.Component {

    state = {
        input: 'type your text here',
        textArea: 'Area for your text',
        select: 'num1',
        checkbox: false
    }

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const {name, value} = e.target;
        this.setState({
            [name] : value
        });
    }

    handleSubmit(e) {
        console.log(this.state);
        e.preventDefault();
    }

    // handleChangeTexAr(e) {
    //     const textArea = e.target.value;
    //     this.setState({
    //         textArea
    //     });
    // }
    
    // handleChangeSelect(e) {
    //     const select = e.target.value;
    //     this.setState({
    //         select
    //     });
    // }

    render() {


        return(
            <div>
                
                <form onSubmit={this.handleSubmit}>

                    <input type='text' name='input' value={this.state.input} onChange={this.handleChange}/>

                    <input type='checkbox' name='checkbox' value={this.state.input} onChange={this.handleChange}/>

                    <textarea name='textArea' value={this.state.textArea} onChange={this.handleChange}/>

                    <select name='select' value={this.state.select} onChange={this.handleChange}>
                        <option value='num1'>Number 1</option>
                        <option value='num2'>Number 2</option>
                        <option value='num3'>Number 3</option>
                        <option value='num4'>Number 4</option>
                    </select>

                    <button>Get value</button>

                </form>

            </div>
        )
    }
}

export default ControledCompExamp;