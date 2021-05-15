import React, { Component } from 'react';

import './input.css';

const operatoMap = {
    'Kyivstar': [67, 68, 96, 97, 98],
    'Vodafone': [50, 66, 95, 99],
    'Lifecell': [63, 73, 93],
    '3mob': [91],
    'People.net': [63, 73, 93],
    'intertelecom': [89, 94],
};

const checkOperator = operatorNumber => {
    let operatorName;
    let regexp = /\d/g;
    const operatorNuberCleared = operatorNumber.match(regexp).join('');
    Object.entries(operatoMap).map(([key, value]) => {
        if (value.includes(+operatorNuberCleared)) {
            operatorName = key;
            return
        };
    })
    return operatorName ? operatorName:'Unknown';
};

export default class Input extends Component{
    constructor(props) {
        super(props);
        this.state = {
            operatorName: '',
            regexp: /^[0-9]+$/,
            operator: '',
            phone: '',
            check: '-'
        };
        this.operator = React.createRef();
        this.phone = React.createRef();
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
      this.operator.current.focus();
    }

    handleChange(event) {
        let telephone = event.target.value;
        if (telephone === '' || this.state.regexp.test(telephone)) {
            this.setState({ [event.target.name]: telephone })
        }
        if (event.target.name === 'operator' && telephone.length > 2) {
            this.setState({operatorName: checkOperator(telephone)});
        };
        if (this.operator.current.value.length === 2 && this.phone.current.value.length === 7) {
            this.setState({check: '✔️'});
        };
    }

    render() {
        const { operatorName, check } = this.state;
        return <div>
            <span className="operator-name">{ operatorName }</span>
            <span>+38 0</span>
            <input
                type="text"
                name="operator"
                className="operator-input"
                ref={this.operator}
                onChange={this.handleChange}
                value={this.state.operator}
                />
            <span className="check-icon"> {check} </span>
            <input
                type="text"
                className="phone-input"
                name="phone"
                ref={this.phone}
                onChange={this.handleChange}
                value={this.state.phone}
                />
        </div>;
    }
}