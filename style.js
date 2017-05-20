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
        backgroundColor: '#EEE'
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
        backgroundColor: '#FFF'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 12
    },
    section: {
        padding: 12
    },
    outputContainer: {
        borderWidth: 1,
        padding: 4,
        marginTop: 8,
        marginBottom: 4
    }
});

// Export
module.exports = style;
