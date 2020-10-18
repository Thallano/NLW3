import React, { useState } from 'react';
import { ScrollView, View, Switch, Text, TextInput, TouchableOpacity, Image, Dimensions } from 'react-native';
import styles from '../styles/orphanagesstyles';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import MapView, { Marker } from 'react-native-maps';
import mapMarkerImg from '../images/map-marker.png';
import { useNavigation, useRoute  } from '@react-navigation/native';
import api from '../services/api';
import * as ImagePicker from 'expo-image-picker';
import OrphanageCreated from '../../assets/OrphanageCreated.png';


interface OrphanageDataRouteParams {
  position: {
    latitude: number;
    longitude: number;
  }
}

export default function OrphanageData() {

  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [instructions, setInstructions] = useState('');
  const [opening_hours, setOpeningHours] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [open_on_weekends, setOpenOnWeekends] = useState(true);
  const [images, setImages] = useState<string[]>([]);
  const [key, setKey] = useState('');

  const navigation = useNavigation();

  const route = useRoute();
  const params = route.params as OrphanageDataRouteParams;

  async function handleCreateOrphanage(){
    const {latitude, longitude} = params.position;

    const data = new FormData();

    data.append('name', name);
    data.append('about', about);
    data.append('latitude', String(latitude));
    data.append('longitude', String(longitude));
    data.append('instructions', instructions);
    data.append('whatsapp', whatsapp);
    data.append('opening_hours', opening_hours);
    data.append('open_on_weekends', String(open_on_weekends));

    images.forEach((image, index)=>{
      data.append('images', {
        name: `image_${index}.jpg`,
        type: 'image/jpg',
        uri: image,
      } as any )
    })
    
    await api.post('orphanages', data).then(response =>{
      setKey(response.data)
    });  

  }

  async function handleSelectImages(){
    const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
    
    if (status != 'granted'){
      alert('Eita, precisamos de acesso às suas fotos...')
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if(result.cancelled){
      return;
    }

    const { uri: image} = result;

    setImages([...images, image]);
  }

  function handleNavigateToOrphanageMap(){
    navigation.navigate('OrphanagesMap');
  }

  return (
    <>
    <ScrollView style={styles.containerData} contentContainerStyle={{ padding: 24 }}>
      <Text style={styles.title}>Dados</Text>
      <Text style={styles.label}>Localização</Text>
      <MapView 
            initialRegion={{
              latitude: params.position.latitude,
              longitude: params.position.longitude,
              latitudeDelta: 0.006,
              longitudeDelta: 0.006,
            }} 
            zoomEnabled={false}
            pitchEnabled={false}
            scrollEnabled={false}
            rotateEnabled={false}
            style={styles.mapStyle}
          >
      <Marker 
              icon={mapMarkerImg}
              coordinate={{ 
                latitude: params.position.latitude,
                longitude: params.position.longitude,
              }}
            />
      </MapView>
      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Nome do Orfanato"
      />

      <Text style={styles.label}>Sobre</Text>
      <TextInput
        style={[styles.input, { height: 110 }]}
        multiline
        value={about}
        onChangeText={setAbout}
        placeholder="Descreva um pouco sobre o Orfanato"
      />

      <Text style={styles.label}>Whatsapp</Text>
      <TextInput
        style={styles.input}
        value={whatsapp}
        onChangeText={setWhatsapp}
        placeholder="(86)99999-9999"
      />
      
      <Text style={styles.label}>Fotos</Text>

      <View style={styles.uploadedImagesContainer}>
        {images.map(image => {
          return (
            <Image 
              key={image}
              source={{ uri: image }}
              style={styles.uploadedImage}            
            />
          );
        })
        }
      </View>

      <TouchableOpacity style={styles.imagesInput} onPress={handleSelectImages}>
        <Feather name="plus" size={24} color="#15B6D6" />
      </TouchableOpacity>

      <Text style={styles.title} >Visitação</Text>

      <Text style={styles.label}>Instruções</Text>
      <TextInput
        style={[styles.input, { height: 110 }]}
        multiline
        value={instructions}
        onChangeText={setInstructions}
        placeholder="Diga algum cuidado para ter se tiver neste campo ao fazer a visitação: Por exemplo: 'Venha com máscara!'"
      />

      <Text style={styles.label}>Horario de visitas</Text>
      <TextInput
        style={styles.input}
        value={opening_hours}
        onChangeText={setOpeningHours}
        placeholder="8h às 18h"
      />

      <View style={styles.switchContainer}>
        <Text style={styles.label}>Atende final de semana?</Text>
        <Switch 
          thumbColor="#fff" 
          trackColor={{ false: '#ccc', true: '#39CC83' }}
          onValueChange={setOpenOnWeekends}
          value={open_on_weekends}
        />
      </View>

      <RectButton style={styles.creationButton} onPress={handleCreateOrphanage}>
        <Text style={styles.creationText}>Cadastrar</Text>
      </RectButton>
    </ScrollView>

    { key != '' &&
      <View style={{alignItems: 'center', justifyContent: 'center', backgroundColor:'#39CC82', position: 'absolute', width: Dimensions.get('window').width, height: Dimensions.get('window').height,}}>
          
      <Text style={styles.titleOrphnageCreated}>Ebaaa!</Text>
      <Text style={styles.titleOrphnageCreatedFooter}>Cadastro realizado com sucesso!</Text>

      <Image source={OrphanageCreated} style={{alignSelf: 'center', width:215, height: 260}}/>
      
      <Feather name="gift" size={45} color="#FFF" style={{alignSelf: 'center',marginTop: 20, marginBottom: 20}}/>
        <Text style={styles.titleOrphnageCreatedFooter}>Sua Key é {key}, este número é necessário para adicionar os presentes para suas crianças ^^! </Text>
      
        <View style={styles.footerOrphanageCreated}>
        <RectButton style={styles.buttonOrphanageCreated} onPress={handleNavigateToOrphanageMap}>
          <Feather name="check" size={20} color="#15B6D6" />
        </RectButton>
        </View>
      </View>
    }
    
    </>
    
  )
}

  
