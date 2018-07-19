import React, { component } from 'react';

import Input from './input';

  class Card extends Component/*global Component*/ {
    render() {
        return (
            <div className="card">
                { Input('color') }
                { Input('Plural Noun') }
            </div>
        );
    }
}

export default Card;