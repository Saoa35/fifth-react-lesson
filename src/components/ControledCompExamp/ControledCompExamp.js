import React from 'react';

class ControledCompExamp extends React.Component {

    state = {
        value: 'type your text here',
        textArea: 'Area for your text'
    }

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const value = e.target.value;
        this.setState({
            value
        });
    }

    handleSubmit(e) {
        console.log(this.state.textArea);
        e.preventDefault();
    }

    handleChangeTexAr(e) {
        const textArea = e.target.value;
        this.setState({
            textArea
        });
    }

    render() {


        return(
            <div>
                
                <form onSubmit={this.handleSubmit}>
                    <input type='text' value={this.state.value} onChange={this.handleChange}/>
                    <textarea value={this.state.textArea} onChange={(e) => this.handleChangeTexAr(e)}/>
                    <button>
                        Get value
                    </button>
                </form>

            </div>
        )
    }
}

export default ControledCompExamp;