// Import
import { StyleSheet } from 'react-native'
const colors = require('./colors.js');


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
        backgroundColor: colors.plain,
        color: colors.white,
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
        backgroundColor: colors.light,
        color: colors.darkest
    },
    title: {
        color: colors.main,
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 12
    },
    section: {
        paddingTop: 12,
        paddingLeft: 16,
        paddingRight: 16,
        backgroundColor: colors.white
    },
    titleBar: {
        height: 48,
        backgroundColor: colors.main,
        elevation: 2,
        justifyContent: 'center',
        paddingLeft: 16
    },
    titleBarText: {
        fontSize: 16,
        color: colors.white,
        fontWeight: 'bold'
    },
    outputContainer: {
        borderBottomWidth: 1,
        borderColor: colors.darkest,
        backgroundColor: colors.white,
        padding: 4,
        marginTop: 8,
        marginBottom: 4
    },
    textInput: {
        color: colors.darkest,
        fontSize: 18
    }
});

// Export
module.exports = style;
