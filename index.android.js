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
const BINARY = 0, DECIMAL = 1, HEXADECIMAL = 2;

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

    changeSelection(s) {
        let that = this;
        return () => {
            that.setState({
                selection: s
            });
        }
    }

    render() {
        return (
            <View style={ss.buttonContainer}>
                <NTSButton
                    style={[ss.buttonMiddle, ss.buttonFirst]}
                    name="Binary"
                    onPress={this.changeSelection(BINARY)}
                    active={(this.state.selection == BINARY)}
                />
                <NTSButton
                    style={[ss.buttonMiddle]}
                    name="Decimal"
                    onPress={this.changeSelection(DECIMAL)}
                    active={(this.state.selection == DECIMAL)}

                />
                <NTSButton
                    style={[ss.buttonMiddle, ss.buttonLast]}
                    name="Hexadecimal"
                    onPress={this.changeSelection(HEXADECIMAL)}
                    active={(this.state.selection == HEXADECIMAL)}
                />
            </View>
        );
    }
}

class NumberInput extends Component {
    constructor(props) {
        super(props);
        this.state = { text: '00000000' };
    }

    render() {
        return (
            <TextInput
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
            />
        );
    }
}

class InputSection extends Component {
    render() {
        return (
            <View style={[ss.section, {backgroundColor: '#AAF'}]}>
                <Text style={ss.title}>Input:</Text>
                <NumberTypeSelector/>
                <NumberInput/>
            </View>
        );
    }
}

class OutputSection extends Component {
    render() {
        return (
            <View style={[ss.section, {backgroundColor: '#FAA'}]}>
                <Text style={ss.title}>Output:</Text>
                <NumberTypeSelector/>
                <View style={ss.outputContainer}>
                    <Text>00001111</Text>
                </View>
            </View>
        );
    }
}

class NumberConverter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputType: BINARY,
            outputType: BINARY,
            intputNumber: 0,
            outputNumber: 0
        }
    }
    render() {
        return (
            <View>
                <InputSection
                    type={this.state.inputType}
                    number={this.state.inputNumber}
                />
                <OutputSection
                    type={this.state.outputType}
                    number={this.state.outputNumber}
                />
            </View>
        );
    }
}

AppRegistry.registerComponent('NumberConverter', () => NumberConverter);
