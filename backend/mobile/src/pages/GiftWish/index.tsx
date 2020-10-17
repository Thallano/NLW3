import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { View, FlatList, Image, Text, Linking }  from 'react-native';

import happyKid from '../../../assets/happyKid.png';

import styles from './styles';
import { RectButton, ScrollView } from 'react-native-gesture-handler';


export default function GiftsWish(){

    function sendWhatsapp() {
        Linking.openURL(``);
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerBackground}>
            <Text style={styles.title}>Olá, seja o Papai Noel dessas crianças! ^^</Text>
            <Image source={happyKid} style={{height:200, width: 200, resizeMode: 'contain', alignSelf: 'center'}} />
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{marginTop: -210}}
                contentContainerStyle={{
                    paddingTop: 210,
            }}
                
            >
                <View style={styles.giftContainer}>
                        <Text style={styles.giftProperty}>NOME DA CRIANÇA:</Text>
                        <Text style={styles.giftValue}>João Vitor</Text>

                        <Text style={styles.giftProperty}>DESEJO:</Text>
                        <Text style={styles.giftValue}>Queria uma bola de futebol, para brincar com meus amigos no orfanato!</Text>

                        <Text style={styles.giftProperty}>VALOR:</Text>
                        <Text style={styles.giftValue}>
                            R$ 5,00
                        </Text>
                            <Feather name="gift" size={45} color="#FF669D" style={{alignSelf: 'center'}}/>
                        <RectButton style={styles.detailsButton}> 
                            <Text style={styles.detailsButtonText}>PRESENTEAR ESTA CRIANÇA</Text>
                        </RectButton>
                </View>

                <View style={styles.giftContainer}>
                        <Text style={styles.giftProperty}>NOME DA CRIANÇA:</Text>
                        <Text style={styles.giftValue}>Maria Leticia</Text>

                        <Text style={styles.giftProperty}>DESEJO:</Text>
                        <Text style={styles.giftValue}>Queria uma boneca polly pode ser das mais baratinhas mesmo</Text>

                        <Text style={styles.giftProperty}>VALOR:</Text>
                        <Text style={styles.giftValue}>
                            R$ 15,00
                        </Text>
                        <Feather name="gift" size={45} color="#FF669D" style={{alignSelf: 'center'}}/>
                        <RectButton style={styles.detailsButton}> 
                            <Text style={styles.detailsButtonText}>PRESENTEAR ESTA CRIANÇA</Text>
                        </RectButton>
                </View>

                <View style={styles.giftContainer}>
                        <Text style={styles.giftProperty}>NOME DA CRIANÇA:</Text>
                        <Text style={styles.giftValue}>Cleber Machado</Text>

                        <Text style={styles.giftProperty}>DESEJO:</Text>
                        <Text style={styles.giftValue}>Queria um carrinho de controle Remoto</Text>

                        <Text style={styles.giftProperty}>VALOR:</Text>
                        <Text style={styles.giftValue}>
                            R$ 25,00
                        </Text>
                        <Feather name="gift" size={45} color="#FF669D" style={{alignSelf: 'center'}}/>
                        <RectButton style={styles.detailsButton}> 
                            <Text style={styles.detailsButtonText}>PRESENTEAR ESTA CRIANÇA</Text>
                        </RectButton>
                </View>

            </ScrollView>
        </View>
    );
}
