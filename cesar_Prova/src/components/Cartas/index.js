import { Button, Image, View, Text } from "react-native";
import styles from "./styles";

export default function Carta(props){
    return (
        <View style={styles.container}>
            <View style={styles.viewImagem}>
                <Image style={styles.ImagemCarta} source={{uri: props.carta.urlImagem}}/>
            </View>
            <View style={styles.viewDados}>
                <Text style={styles.titulo}>{props.carta.titulo}</Text>
                <Text style={styles.descricao}>{props.carta.descricao}</Text>
                <Button title="Trocar" style={styles.btnTroca}></Button>

            </View>
        </View>
    );
}