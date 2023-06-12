import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', padding:'20px',
        width: '30%',
        height: '250px',
        backgroundColor: 'green',
        borderRadius: '10px',
        marginBottom: '10px'
    },
    ImagemCarta: {
        width: '100%',
        height: '100%',
        padding: '80px',
    },
    viewDados: {
        width: '80%',
        padding: '5px'
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        paddingBottom:'20px'
    },
    descricao: {
        marginBottom: 10,
        color: 'white'
    },
    btnComprar:{
        borderRadius: 10,
        width: 10
    }
});

export default styles;