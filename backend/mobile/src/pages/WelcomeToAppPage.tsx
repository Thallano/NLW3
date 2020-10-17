import React from 'react';

import { Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from '../styles/orphanagesstyles';

import { RectButton } from 'react-native-gesture-handler';
import WelcomeWorld  from '../../assets/WelcomeWorld.jpg';

export default function WelcomeToAppPage(){
  
    const navigation = useNavigation();
    
    function handleNavigateToWelcomeToAppPage2(){
      navigation.navigate('WelcomeToAppPage2');
  }
    
    return (
        <View style={styles.container}>
         <View style={styles.welcome}>
        <Image src={} />
        <Text style={styles.}>{orphanages.length} orfanatos encontrados</Text>
        <RectButton style={styles.createOrphnageButton} onPress={handleNavigateToSelectMapPosition}>
          <Feather name="plus" size={20} color="#FFF"/>
        </RectButton>
      </View>
    </View>

    );
}