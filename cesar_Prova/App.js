import { CurrentRenderContext, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native'
import CardsPage from './src/pages/DashboardPage';
import RegisterPage from './src/pages/RegisterPage'
import LoginPage from './src/pages/LoginPage'
import PasswordRecoverPage from './src/pages/PasswordRecoverPage'


export default function App() {

  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name="LoginPage" component={LoginPage}
        options=
        {
        { title: 'Login',
          headerStyle:{
            backgroundColor: 'red',
          },
          headerTitleStyle:{
            fontWeight: 'bold',
            fontSize: 20,
          }
        }
        }></Stack.Screen>
        <Stack.Screen name="DashboardPage" component={CardsPage}
        ></Stack.Screen>
        <Stack.Screen name="RegisterPage" component={RegisterPage}
        ></Stack.Screen>
        <Stack.Screen name="PasswordRecoverPage" component={PasswordRecoverPage}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

/*<Stack.Screen name="DashboardPage" component={DashboardPage}
        ></Stack.Screen>
        <Stack.Screen name="RegisterPage" component={RegisterPage}
        ></Stack.Screen>
        <Stack.Screen name="LoginPage" component={LoginPage}
        ></Stack.Screen>
        <Stack.Screen name="PasswordRecoverPage" component={PasswordRecoverPage}
        ></Stack.Screen>*/

const styles = StyleSheet.create({
  container: {
      backgroundColor: 'orange',
      margin: 15,
      padding: 10,
      borderWidth: 2,
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
  }
});
