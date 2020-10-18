import React, { useState } from 'react';

import { View, Image, Text, TextInput }  from 'react-native';
import { Feather } from '@expo/vector-icons';
import SantaClaus from '../../../assets/SantaClaus.png';

import styles from '../../styles/orphanagesstyles';
import { RectButton } from 'react-native-gesture-handler';

export default function GiftCreate(){
    const [key, setKey] = useState('');
    const [name, setName] = useState('');
    const [gift, setGift] = useState('');
    
    return (
        <View style={styles.container}>
            
            <Text style={styles.title}>Envie uma carta ao Papai Noel</Text>
            <Image source={SantaClaus} style={{height:150, width: 150, resizeMode: 'contain', alignSelf: 'center', marginBottom: 20}} />
            <View style={{width: 250}}> 
            <Text style={styles.label}>Key do Orfanato</Text>
                    <TextInput
                            style={styles.input}
                            value={key}
                            onChangeText={setKey}
                            placeholder="Key do Orfanado"
            />

            <Text style={styles.label}>Nome da Criança</Text>
                    <TextInput
                            style={styles.input}
                            value={name}
                            onChangeText={setName}
                            placeholder="Nome da Criança"
            />

            <Text style={styles.label}>Desejo</Text>
                    <TextInput
                            style={[styles.input, { height: 110 }]}
                            value={gift}
                            onChangeText={setGift}
                            placeholder="Qual seu Desejo?"
                            multiline
            />
            </View>
            <RectButton style={[styles.nextButton, {width: 150}]} onPress={()=>{alert("Mensagem enviada para o Papai Noel!")}}>
                <Text style={styles.nextButtonText}>Enviar Carta</Text>
                <Feather name="mail" size={20} color="#FFF" style={{alignSelf: 'center'}}/>
            </RectButton>
        </View>
    );
}
