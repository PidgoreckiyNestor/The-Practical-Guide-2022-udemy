import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <StatusBar style="light"/>
      <NavigationContainer>
        <Stack.Navigator  >
          <Stack.Screen name={'CategoriesScreen'} component={CategoriesScreen}/>
          <Stack.Screen name={'MealsOverview'} component={MealsOverviewScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
