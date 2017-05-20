// Import
import { StyleSheet } from 'react-native'

// Button Border Radius
const BBR = 8;

// Stylesheet
const style = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        //flex: 1
    },
    buttonMiddle: {
        padding: 12,
        marginLeft: 1,
        marginRight: 1,
        backgroundColor: '#607D8B',
        color: '#FFF'
    },
    buttonFirst: {
        borderTopLeftRadius: BBR,
        borderBottomLeftRadius: BBR
    },
    buttonLast: {
        borderTopRightRadius: BBR,
        borderBottomRightRadius: BBR
    },
    buttonActive: {
        backgroundColor: '#B3E5FF',
        color: '#232E33'
    },
    title: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 12
    },
    section: {
        padding: 12,
    },
    outputContainer: {
        borderWidth: 1,
        borderColor: '#232E33',
        backgroundColor: '#7295A6',
        padding: 4,
        marginTop: 8,
        marginBottom: 4
    },
    textInput: {
        color: '#FFF',
        fontSize: 18
    }
});

// Export
module.exports = style;
