import React from 'react';

class ControledCompExamp extends React.Component {

    state = {
        value: 'type your text here'
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
        console.log(this.state.value);
        e.preventDefault();
    }

    render() {


        return(
            <div>
                
                <form onSubmit={this.handleSubmit}>
                    <input type='text' value={this.state.value} onChange={this.handleChange}/>
                    <button>
                        Get value
                    </button>
                </form>

            </div>
        )
    }
}

export default ControledCompExamp;