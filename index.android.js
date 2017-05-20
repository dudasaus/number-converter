/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  View
} from 'react-native';

const ss = require('./style.js');
const BINARY = 2, DECIMAL = 10, HEXADECIMAL = 16;

class NTSButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        }
    }
    render() {
        let newStyle = this.props.style;
        if (this.props.active) {
            newStyle = newStyle.concat(ss.buttonActive);
        }
        return (
            <Text style={newStyle}
            onPress={this.props.onPress}>{this.props.name}</Text>
        )
    }
}

class NumberTypeSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selection: BINARY
        }
    }

    render() {
        return (
            <View style={ss.buttonContainer}>
                <NTSButton
                    style={[ss.buttonMiddle, ss.buttonFirst]}
                    name="Binary"
                    onPress={this.props.func(BINARY)}
                    active={(this.props.type == BINARY)}
                />
                <NTSButton
                    style={[ss.buttonMiddle]}
                    name="Decimal"
                    onPress={this.props.func(DECIMAL)}
                    active={(this.props.type == DECIMAL)}

                />
                <NTSButton
                    style={[ss.buttonMiddle, ss.buttonLast]}
                    name="Hexadecimal"
                    onPress={this.props.func(HEXADECIMAL)}
                    active={(this.props.type == HEXADECIMAL)}
                />
            </View>
        );
    }
}

class NumberInput extends Component {

    render() {
        return (
            <TextInput
                style={ss.textInput}
                autoCapitalize='characters'
                underlineColorAndroid='#35454D'
                selectionColor='#B3E5FF'
                onChangeText={this.props.func}
                value={this.props.val.toString()}
            />
        );
    }
}

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
