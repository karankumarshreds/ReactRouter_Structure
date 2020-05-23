import React, {Component} from 'react';

class ThingGenerator extends Component {
    render() {
        
        return(
            <div>
                <h1>You passed in {this.props.stuff}</h1>
            </div>
        )
    }
}

export default ThingGenerator;