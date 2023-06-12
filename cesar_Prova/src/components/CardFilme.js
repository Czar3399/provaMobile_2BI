import { Link } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View, Image, Dimensions, Button } from "react-native";

const baseUrl = "https://api.otaviolube.com";

const MAX_WIDTH = Dimensions.get('window').width * 0.925
const MAX_HEIGHT = Dimensions.get('window').height * 0.965

export default function CardFilme( { filme } ){
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={{uri: baseUrl + filme.poster.data.attributes.formats.thumbnail.url}}/>
            <Text style={styles.titulo}>{filme.titulo}</Text>
            <Text style={styles.sinopse}>{filme.sinopse.length > 200 ? filme.sinopse.substring(0,200) + "..." : filme.sinopse}</Text>
            <Link style={styles.linkDetails} to={{screen : "DetailsPage", params: {filme: filme}}}>Saiba mais...</Link>
            <Link style={styles.linkBuy} to={{screen : "MoviesBuyPage", params: {filme: filme}}}>Comprar ingresso</Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',
        margin: 15,
        padding: 10,
        borderWidth: 2,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        height: MAX_HEIGHT,
        width: MAX_WIDTH
    },
    img: {
        height: 200,
        width: 150,
        resizeMode: "cover",
        marginBottom: 15
    },
    titulo:{
        fontSize: 25,
        fontWeight: "bold",
        margin: 10
    },
    sinopse:{
        fontSize: 15,
        marginBottom: 10,
        textAlign: "justify"
    },
    button:{
        width: 150,
        height: 35,
        margin: 10,
        borderWidth: 2,
        backgroundColor: 'orange',
        alignItems: "center",
        justifyContent: "center",
        marginTop: 50
    },
    buttonText:{
        padding: 5,
        fontSize: 18,
        fontWeight: "bold"
    },
    linkDetails:{
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 50,
        textDecorationLine: "underline"
    },
    linkBuy:{
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 80,
        textDecorationLine: "underline"
    }
  });
