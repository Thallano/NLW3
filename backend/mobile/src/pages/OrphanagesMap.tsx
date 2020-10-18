import React, { useState} from 'react';

import { Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import styles from '../styles/orphanagesstyles';

import mapMarker from '../images/map-marker.png'
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import {  RectButton } from 'react-native-gesture-handler';
import api from '../services/api';

interface Orphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

export default function OrphanagesMap(){
    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);
    const navigation = useNavigation();
    
    useFocusEffect(() => {
      api.get('orphanages').then(response =>{
        setOrphanages(response.data)
      });
    });

    function handleNavigateToOrphanageDetail(id: number){
        navigation.navigate('OrphanageDetails', { id });
    }

    function handleNavigateToSelectMapPosition(){
      navigation.navigate('SelectMapPosition');
    }
    
    function handleGiftPressed(){
      navigation.navigate('GiftCreate');
    }
    
    return (
      
      <View style={styles.container}>
      
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: -5.0978947,
          longitude: -42.8125137,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        {orphanages.map(orphanage => {
           return (
            <Marker

              key={orphanage.id}
              icon={mapMarker}
              calloutAnchor={{
                x: 2.7,
                y: 0.8,
              }}

              coordinate={{
                latitude: orphanage.latitude,
                longitude: orphanage.longitude,
              }}
              
            >
              <Callout tooltip onPress={()=> handleNavigateToOrphanageDetail(orphanage.id)}>
                <View style={styles.calloutContainer}>
                <Text style={styles.calloutText}>{orphanage.name}</Text>
                </View>
              </Callout>     
            </Marker>
           );
        })}
      </MapView>

      <View style={styles.header}>
          <Text style={styles.footerText}>Crie aqui sua lista de presentes</Text>
          <RectButton style={styles.createGiftList} onPress={handleGiftPressed}>
            <Feather name="gift" size={20} color="#FFF"/>
          </RectButton>
      </View>
      
     <View style={styles.footer}>
        <Text style={styles.footerText}>{orphanages.length} orfanatos encontrados</Text>
        <RectButton style={styles.createOrphnageButton} onPress={handleNavigateToSelectMapPosition}>
          <Feather name="plus" size={20} color="#FFF"/>
        </RectButton>
      </View>
    </View>

    );
}