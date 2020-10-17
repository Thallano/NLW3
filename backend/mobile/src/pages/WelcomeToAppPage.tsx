import React from 'react';

import { Text, View, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from '../styles/orphanagesstyles';

import { RectButton } from 'react-native-gesture-handler';
import WelcomeWorld  from '../../assets/WelcomeWorld.png';
import { useNavigation } from '@react-navigation/native';

export default function WelcomeToAppPage(){
  
    const navigation = useNavigation();
    
    function handleNavigateToWelcomeToAppPage2(){
      navigation.navigate('WelcomeToAppPageTwo');
  }
    
    return (
        <View style={styles.containerPage}>
         <View style={styles.welcome}>

          <Image source={WelcomeWorld} />

          <Text style={styles.welcomeText}>Leve felicidade para o mundo</Text>
          <Text style={styles.welcomeTextFooter}>Visite orfanatos e mude o dia de muitas crianças.</Text>
           
          <View style={styles.footerWelcome}>
              <View style={styles.windowSelected}>
                <Feather name="minus" size={30} color="#FFD152"/>
                <Feather name="minus" size={30} color="#BECFD8"/>
              </View>
            <RectButton style={styles.welcomeButtonNext} onPress={handleNavigateToWelcomeToAppPage2}>
              <Feather name="arrow-right" size={20} color="#15B6D6"/>
            </RectButton>
          </View>
      </View>
    </View>

    );
}