import React from 'react';

class ControledCompExamp extends React.Component {

    state = {
        value: 'type your text'
    }

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const value = e.target.value;
        this.setState({
            value
        })
    }

    render() {

        return(
            <div>
                
                <form>
                    <input type='text' value={this.state.value} onChange={this.handleChange}/>
                </form>

            </div>
        )
    }
}

export default ControledCompExamp;