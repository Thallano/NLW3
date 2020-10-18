import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OrphanagesMap from './pages/OrphanagesMap';
import OrphanageDetails from './pages/OrphanageDetails';
import OrphanageData from './pages/OrphanageData';
import SelectMapPosition from './pages/SelectMapPosition';
import WelcomeToAppPage from './pages/WelcomeToAppPage';
import WelcomeToAppPageTwo from './pages/WelcomeToAppPage2';
import OrphanageCreated from './pages/OrphanageCreated';

import Header from './components/Header';
import GiftsWish from './pages/GiftWish';
import GiftCreate from './pages/GiftCreate';

const { Navigator, Screen } = createStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <Navigator screenOptions={ {headerShown: false, cardStyle: {backgroundColor: '#F2F3F5'}}} >

                <Screen 
                    name="WelcomeToAppPage" 
                    component={WelcomeToAppPage}
                />

                <Screen 
                    name="WelcomeToAppPageTwo" 
                    component={WelcomeToAppPageTwo}
                />
            
                <Screen 
                    name="OrphanagesMap" 
                    component={OrphanagesMap}
                />
                
                <Screen
                    name="GiftsWish"
                    component={GiftsWish}
                />

                <Screen
                    name="GiftCreate"
                    component={GiftCreate}
                />

                <Screen 
                    name="OrphanageCreated" 
                    component={OrphanageCreated}
                />
                <Screen 
                    name="OrphanageDetails" 
                    component={OrphanageDetails}
                    options={{
                        headerShown: true,
                        header: ( ) => <Header showCancel={false} title="Orfanato"/>
                    }}
                />
                <Screen 
                    name="OrphanageData" 
                    component={OrphanageData}
                    options={{
                        headerShown: true,
                        header: ( ) => <Header title="Informe os Dados"/>
                    }}
                />
                <Screen 
                    name="SelectMapPosition" 
                    component={SelectMapPosition}
                    options={{
                        headerShown: true,
                        header: ( ) => <Header title="Selecione no mapa"/>
                    }}
                />


            </Navigator>
        </NavigationContainer>
    )
}