import React, { component } from 'react';

import Input from './input'

class Card extends Component {
    render() {
        return (
            <div className="card">
                { Input() }
            </div>
        )
    }
}

export default Card;