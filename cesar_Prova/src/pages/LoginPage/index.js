import { Link } from '@react-navigation/native';
import { StyleSheet} from 'react-native';
import { TextInput, View } from 'react-native-web';

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
        <View style={styles.container}>
          <TextInput 
          style={styles.login}
          placeholder= "Seu login"
          />
          <TextInput 
          style={styles.senha}
          placeholder= "Sua senha"
          />
            <Link to={{screen: "RegisterPage"}} style={styles.link}> Cadastrar</Link>
            <Link to={{screen: "PasswordRecoverPage"}} style={styles.link}> Esqueci minha senha</Link>
            <Link to={{screen: "DashboardPage"}} style={styles.link}> Login</Link>
        </View>
    );

}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'orange',
      justifyContent: 'center'
    },
    login:{
      fontSize: 20,
      fontWeight: 'bold',
      justifyContent: 'center',
      borderWidth: 1,
      marginBottom: 10,
      backgroundColor: 'cyan',
      alignSelf: 'center',
      width: '85%',
    },
    senha:{
      fontSize: 20,
      fontWeight: 'bold',
      justifyContent: 'center',
      borderWidth: 1,
      marginBottom: 10,
      backgroundColor: 'cyan',
      alignSelf: 'center',
      width: '85%',
    },
    link:{
      fontSize: 20,
      margin: 20,
      borderWidth: 3,
      borderRadius: 5,
      backgroundColor: 'orange',
      alignSelf: 'center',
      textAlign: 'center',
      width: 150,
      height:65
    }
  });