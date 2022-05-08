import React from "react";
import PropTypes from 'prop-types';


class PropTypesExample extends React.Component {

    render() {

        return(

            <div>
                PropTypesExample
                <h3>
                    {this.props.name} / {this.props.age}
                </h3>
            </div>
        )
    }
}

PropTypesExample.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
}

export default PropTypesExample;