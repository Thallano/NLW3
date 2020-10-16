import React from 'react';

import { Text, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import styles from '../styles/orphanagesstyles';

import mapMarker from '../images/map-marker.png'
import { useNavigation } from '@react-navigation/native';


export default function OrphanagesMap(){
    const navigation = useNavigation();

    function handleNavigateToOrphanageDetail(){
        navigation.navigate('OrphanageDetails');
    }
    
    return (
        <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: -5.0978947,
          longitude: -42.8125137,
          latitudeDelta: 0.006,
          longitudeDelta: 0.006,
        }}
      >
        <Marker 
          icon={mapMarker}
          calloutAnchor={{
            x: 2.7,
            y: 0.8,
          }}
          coordinate={{
            latitude: -5.0978947,
            longitude: -42.8125137,
          }}
        >
        <Callout tooltip onPress={handleNavigateToOrphanageDetail}>
          <View style={styles.calloutContainer}>
            <Text style={styles.calloutText}>Lar dos Marotos</Text>
          </View>
        </Callout>     

        </Marker>
      </MapView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>2 orfanatos encontrados</Text>
        <TouchableOpacity style={styles.createOrphnageButton} onPress={()=>{}}>
          <Feather name="plus" size={20} color="#FFF"/>
        </TouchableOpacity>
      </View>
    </View>

    );
}