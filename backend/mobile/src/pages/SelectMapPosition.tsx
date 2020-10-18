import React, { useState } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';

import styles from '../styles/orphanagesstyles';

import { useNavigation } from '@react-navigation/native';
import { BorderlessButton, RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import MapView, { MapEvent, Marker } from 'react-native-maps';
import addOrphangeIcon from '../../assets/addOrphangeIcon.png';
import mapMarkerImg from '../images/map-marker.png';

export default function SelectMapPosition() {
  const navigation = useNavigation();
  const [position, setPosition ] = useState({latitude: 0, longitude: 0});

  const [instructionActive, setInstructionActive ] = useState(true);

  function handleNextStep() {
    navigation.navigate('OrphanageData', {position});
  }

  function handleSelectMapPosition(event: MapEvent){
    setPosition(event.nativeEvent.coordinate);
  }
  console.log(instructionActive)
  return (
    <View style={styles.containerSelectMapPosition}>
            
      <MapView 
        initialRegion={{
          latitude: -5.0978947,
          longitude: -42.8125137,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        style={{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
        }}
        onPress={handleSelectMapPosition}
      >
      { position.latitude != 0 && (
            <Marker 
            icon={mapMarkerImg}
            coordinate={{ latitude: position.latitude, longitude: position.longitude }}
            />
        )
      }
      </MapView>
       
      { position.latitude != 0 && (
          <RectButton style={styles.nextButton} onPress={handleNextStep}>
              <Text style={styles.nextButtonText}>Próximo</Text>
          </RectButton>
        )
      }
      
      { instructionActive &&
        <View style={styles.instructionsAddLocation}>
          <BorderlessButton style={{elevation: 5, width:500, height:500}} onPress={()=>{setInstructionActive(false)}}>
            <Image source={addOrphangeIcon} style={{alignSelf: 'center', justifyContent:'center'}} />
          </BorderlessButton>
        </View>
      }
    </View>
  )
}
