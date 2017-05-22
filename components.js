// components.js

// requires and imports
import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View
} from 'react-native';

// const values
BINARY = 2, DECIMAL = 10, HEXADECIMAL = 16;
const ss = require('./style.js');
const colors = require('./colors.js');

// number type selector buttons
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

// number type selector
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

// number input
class NumberInput extends Component {

    render() {
        return (
            <TextInput
                style={ss.textInput}
                autoCapitalize='characters'
                underlineColorAndroid={colors.main}
                selectionColor={colors.main}
                onChangeText={this.props.func}
                value={this.props.val.toString()}
                keyboardType={(this.props.type==HEXADECIMAL)?'default':'numeric'}
            />
        );
    }
}

module.exports = {
    BINARY,
    DECIMAL,
    HEXADECIMAL,
    NumberTypeSelector,
    NumberInput
}
