import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        padding: 15,
        marginHorizontal: 20,
        marginVertical: 5,
        borderRadius: 5,
    },
    text: {
        color: 'gray',
        fontSize: 14,
    },
    line: {
        padding: 10,
        borderRadius: 5
    },
    item: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 2,
        marginVertical: 5,
    },
    button: {
    backgroundColor: 'rgba(255, 0, 0, 0.4)',
    }

})
export default style;