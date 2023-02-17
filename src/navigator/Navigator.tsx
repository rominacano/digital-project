import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { ProductScreen } from '../screens/ProductScreen';
import { globalStyles } from '../theme/appTheme';

const Stack = createStackNavigator();

export const Navigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    ...globalStyles.general
                }
            }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Products" component={ProductScreen} />
        </Stack.Navigator>
    );
}