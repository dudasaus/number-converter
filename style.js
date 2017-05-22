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
        color: '#FFF',
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
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 12
    },
    section: {
        paddingTop: 12,
        paddingLeft: 16,
        paddingRight: 16
    },
    titleBar: {
        height: 48,
        backgroundColor: '#B3E5FF',
        elevation: 2,
        justifyContent: 'center',
        paddingLeft: 16
    },
    titleBarText: {
        fontSize: 16,
        color: '#FFF',
        fontWeight: 'bold'
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
