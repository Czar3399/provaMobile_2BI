import { ActivityIndicator, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native';
import { View } from 'react-native';
import Carta from '../../components/Cartas';

const listaCartas = [
  {
    titulo: "Dragao Azul",
    descricao: "Este lendário dragão é uma poderosa máquina de destruição. Praticamente invencível, muito poucos enfrentaram essa magnifica criatura e viveram para contar a história. \nAtaque : 3000\nDefesa : 2500",
    urlImagem: "https://yugiohblog.konami.com/br/wp-content/uploads/2018/10/CaosAzul.jpg"
  },
  {
    titulo: "Dark Ruler Ha Des",
    descricao: "Não pode ser Invocado por Invocação-Especial do Cemitério. Negue os efeitos dos monstros destruídos em batalhas com monstros do Tipo Demônio que você controla. \nAtaque : 2450\nDefesa : 1600",
    urlImagem: "https://pm1.narvii.com/6213/509bfd4e845b710a402361769f0ce4a86510701a_hq.jpg"
  },
  {
    titulo: "Mago negro",
    descricao: "O mago definitivo em termos de ataque e defesa.\n\n\nAtaque : 2500\nDefesa : 2100",
    urlImagem: "https://http2.mlstatic.com/D_NQ_NP_875202-MLB31568105126_072019-O.jpg"
  },
  {
    titulo: "Clayman, o HERÓI do Elemento",
    descricao: "Um HERÓI do Elemento com um corpo de argila construído para durar. Ele conserva os seus colegas HERÓIS do Elemento a todo o custo.\n\nAtaque : 800\nDefesa : 2000",
    urlImagem: "https://cdnx.jumpseller.com/deckscards/image/28260651/resize/1200/1200?1665112754"
  }
]

export default function CardsPage(){

  /*
    let [filmes, setFilmes] = useState([]);

    const baseUrl = 'https://api.otaviolube.com/api/filmes?populate=*';

    useEffect(function(){
        fetch(baseUrl)
        .then(data => data.json())
        .then(objeto => {
            console.log(objeto);
            setFilmes(objeto.data)
        })
    }, []);
    */
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView horizontal>
              {
                <View>
                  <Carta carta={listaCartas[0]}/>
                  <Carta carta={listaCartas[1]}/>
                  <Carta carta={listaCartas[2]}/>
                  <Carta carta={listaCartas[3]}/>
                </View>
              }
            </ScrollView> : <ActivityIndicator size={'large'}/>
        </SafeAreaView>
    );

}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'orange',
      justifyContent: 'center',
      width: '100%',
      height: '20%'
    },
    loadingText:{
      fontSize: 50,
      fontWeight: 'bold',
      justifyContent: 'center'
    }
  });