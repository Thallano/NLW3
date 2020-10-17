import React from 'react';

import { Text, View, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from '../styles/orphanagesstyles';

import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import kids  from '../../assets/kids.png';

import { useNavigation } from '@react-navigation/native';

export default function WelcomeToAppPage2(){
  
    const navigation = useNavigation();
    
    function handleNavigateToOrphanagesMap(){
      navigation.navigate('OrphanagesMap');
  }
    
    return (
        <View style={styles.container}>
          <BorderlessButton onPress={navigation.goBack} style={{alignSelf: 'flex-start', marginTop: 20, marginLeft: 40}}>
                <Feather name="arrow-left" size={24} color="#15B6D6"   />
          </BorderlessButton>
         <View style={styles.welcome}>
          
          <Image source={kids} style={{height: 380, width:260, resizeMode: 'contain'}}/>

          <Text style={styles.welcomeTextFooterPageTwo}>Escolha um orfanato no mapa e faça uma visita</Text>
           
          <View style={styles.footerWelcome}>
              <View style={styles.windowSelected}>
                <Feather name="minus" size={30} color="#BECFD8"/>
                <Feather name="minus" size={30} color="#FFD152"/>
              </View>
            <RectButton style={styles.welcomeButtonNext} onPress={handleNavigateToOrphanagesMap}>
              <Feather name="arrow-right" size={20} color="#15B6D6"/>
            </RectButton>
          </View>
      </View>
    </View>

    );
}