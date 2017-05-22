import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  View
} from 'react-native';

import {
    NumberTypeSelector,
    NumberInput,
    BINARY,
    DECIMAL,
    HEXADECIMAL,
} from './components.js';

const ss = require('./style.js');

class NumberConverter extends Component {
    // constructor
    constructor(props) {
        super(props);

        // State
        this.state = {
            inputType: BINARY,
            outputType: BINARY,
            inputNumber: 0,
            outputNumber: 0
        }

        // Bind functions
        this.changeInputType = this.changeInputType.bind(this);
        this.changeOutputType = this.changeOutputType.bind(this);
        this.changeInputNumber = this.changeInputNumber.bind(this);
    }

    // Functions that deal with user input
    changeInputType(val) {
        let that = this;
        return () => {
            that.setState({inputType: val});
            console.log(that.state);
        }
    }

    changeOutputType(val) {
        let that = this;
        return () => {
            that.setState({outputType: val});
            console.log(that.state);
        }
    }

    changeInputNumber(val) {
        this.setState({inputNumber: val});
    }

    // Produce output
    produceOutput() {
        var result = parseInt(this.state.inputNumber, this.state.inputType);
        if (isNaN(result)) return "INVALID INPUT";
        result = result.toString(this.state.outputType);
        return result.toUpperCase();
    }

    // Render
    render() {
        return (
            // Body
            <View style={{backgroundColor: '#0a0', flex: 1}}>
                {/* Title bar */}
                <View style={ss.titleBar}>
                    <Text style={ss.titleBarText}>
                        Number Converter
                    </Text>
                </View>
                {/* Input Section */}
                <View style={[ss.section, {backgroundColor: '#7295A6'}]}>
                    <Text style={ss.title}>Input:</Text>
                    <NumberTypeSelector
                        func={this.changeInputType}
                        type={this.state.inputType}
                    />
                    <NumberInput
                        func={this.changeInputNumber}
                        val={this.state.inputNumber}
                        type={this.state.inputType}
                    />
                </View>

                {/* Output Section */}
                <View style={[ss.section, {backgroundColor: '#465B66', flex: 1}]}>
                    <Text style={ss.title}>Output:</Text>
                    <NumberTypeSelector
                        func={this.changeOutputType}
                        type={this.state.outputType}
                    />
                    <View style={ss.outputContainer}>
                        <Text style={ss.textInput}>{this.produceOutput()}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

AppRegistry.registerComponent('NumberConverter', () => NumberConverter);
