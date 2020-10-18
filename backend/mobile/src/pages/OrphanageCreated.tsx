import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, Switch, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

import { useNavigation, useRoute  } from '@react-navigation/native';
import styles from '../styles/orphanagesstyles';
import OrphanageCreated from '../../assets/OrphanageCreated.png';

export default function OrphanageData() {
  const navigation = useNavigation();
    
  function handleNavigateToOrphanageMap(){
    navigation.navigate('OrphanagesMap');
}
  
  return (
      <View style={styles.containerOrphanageCreatedPage}>
        
        <Text style={styles.titleOrphnageCreated}>Ebaaa!</Text>
        <Text style={styles.titleOrphnageCreatedFooter}>Cadastro realizado com sucesso!</Text>

        <Image source={OrphanageCreated} style={{alignSelf: 'center'}}/>
        
        <Feather name="gift" size={45} color="#FFF" style={{alignSelf: 'center',marginTop: 20, marginBottom: 20}}/>
        <Text style={styles.titleOrphnageCreatedFooter}>Sua Key é 7aeacc26, este número é necessário para adicionar os presentes para suas crianças ^^! </Text>
        
        <View style={styles.footerOrphanageCreated}>
          <RectButton style={styles.buttonOrphanageCreated} onPress={handleNavigateToOrphanageMap}>
            <Feather name="arrow-right" size={20} color="#15B6D6" />
          </RectButton>
        </View>
    
  </View>
  
  )
}
