import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: "100%",
        justifyContent: 'space-between',
        padding: 10,
        marginTop: 5,
        marginBottom: 5,
    },
    lefContainer: {
        flexDirection: 'row',
        width: "80%",
    },
    midContainer: {
        justifyContent: 'space-around',
        width: "100%",
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 50,
        marginRight: 15,
    },
    username: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    lastMessage: {
        fontSize: 16,
        color: 'grey',
        width: '100%',
    },
    time: {
        fontSize: 12,
        color: 'grey'
    },
});

export default styles;
