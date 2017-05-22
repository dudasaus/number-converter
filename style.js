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
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 8,
        paddingBottom: 8,
        marginLeft: 8,
        marginRight: 8,
        backgroundColor: colors.white,
        color: colors.main,
        borderRadius: 2
    },
    buttonFirst: {
        // borderTopLeftRadius: BBR,
        // borderBottomLeftRadius: BBR
        marginLeft: 0
    },
    buttonLast: {
        // borderTopRightRadius: BBR,
        // borderBottomRightRadius: BBR
        marginRight: 0
    },
    buttonActive: {
        backgroundColor: colors.main,
        color: colors.white,
        fontWeight: 'bold'
    },
    title: {
        color: colors.main,
        fontSize: 16,
        // fontWeight: 'bold',
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
        borderBottomWidth: 2,
        borderColor: colors.black,
        backgroundColor: colors.white,
        padding: 4,
        marginTop: 8,
        marginBottom: 4
    },
    textInput: {
        color: colors.black,
        fontSize: 18
    },
    footer: {
        alignItems: 'center',
        paddingBottom: 8,
        backgroundColor: colors.white
    },
    footerText: {
        fontSize: 10
    },
    link: {
        fontSize: 10,
        color: colors.main,
        textDecorationLine: 'underline'
    }
});

// Export
module.exports = style;
