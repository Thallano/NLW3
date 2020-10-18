import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EBF2F5',
      alignItems: 'center',
      justifyContent: 'center',
    },

    containerPage:{
      flex: 1,
      backgroundColor: '#EBF2F5',
      alignItems: 'center',
      justifyContent: 'center',
    },

    containerOrphanageCreatedPage:{
      flex: 1,
      backgroundColor: '#39CC82',
      paddingHorizontal: 24,
      alignContent: 'center',
      justifyContent: 'center'
    },

    welcome:{
      backgroundColor: '#EBF2F5',
      justifyContent: 'center',
      alignItems: 'center',
    },

    titleOrphnageCreated:{
      marginTop: 15,
      fontFamily: "Nunito_800ExtraBold",
      color: '#FFF',
      fontSize: 48,
      textAlign: 'center',
      lineHeight: 50,
    },

    titleOrphnageCreatedFooter:{
      fontFamily: "Nunito_600SemiBold",
      color: '#FFF',
      fontSize: 20,
      lineHeight: 25,
      textAlign: 'center'
    },

    buttonOrphanageCreated:{
      backgroundColor: '#D1EDF2',
      marginRight: 45,
      borderRadius: 20,
      height: 56,
      width: 56,
      justifyContent: 'center',
      alignItems: 'center',
    },

    footerOrphanageCreated:{
      width: 400,
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },

    welcomeText:{
      marginTop: 15,
      fontFamily: "Nunito_800ExtraBold",
      color: '#0089A5',
      fontSize: 48,
      maxWidth: 250,
      lineHeight: 50,
    },

    welcomeTextFooter:{
      fontFamily: "Nunito_600SemiBold",
      color: '#5C8599',
      fontSize: 20,
      maxWidth: 250,
      lineHeight: 25
    },
    
    welcomeTextFooterPageTwo:{
      fontFamily: "Nunito_800ExtraBold",
      color: '#0089A5',
      fontSize: 30,
      maxWidth: 260,
      lineHeight: 32,
      textAlign: 'right'
    },
    
    windowSelected:{
      flexDirection: 'row',
      marginLeft: 45,
      marginTop: 20,
    },

    footerWelcome:{
      width: 400,
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },

    welcomeButtonNext:{
      backgroundColor: '#D1EDF2',
      marginRight: 45,
      borderRadius: 20,
      height: 56,
      width: 56,
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    map:{
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },

    marker:{
      height: 60,
      width: 60,
    },
  
    calloutContainer:{
      width: 160,
      height: 46,
      paddingHorizontal: 16,
      backgroundColor: 'rgba(255,255,255, 0.8)',
      borderRadius: 16,
      justifyContent: 'center',
      
    },
  
    calloutText:{
      color: '#0089a5',
      fontSize: 14,
      fontFamily: 'Nunito_700Bold'
    },
  
    footer:{
      position: 'absolute',
      left: 24,
      right:24,
      bottom:32,
  
      backgroundColor: '#FFF',
      borderRadius: 20,
      height: 56,
  
      paddingLeft: 24,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
  
      elevation: 3,
    },

    header:{
      position: 'absolute',
      top:32,
      
      backgroundColor: '#FFF',
      borderRadius: 20,
      height: 100,
      width: 250,
  
      padding: 24,
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
  
      elevation: 3,
    },

    createGiftList:{
      backgroundColor: '#FF669D',
      borderRadius: 20,
      marginTop: 10,
      height: 56,
      width: 56,
    
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    footerText:{
      color: '#8FA7B3',
      fontFamily: 'Nunito_700Bold',
    },
  
    createOrphnageButton:{
      backgroundColor: '#15C3D6',
      borderRadius: 20,
      height: 56,
      width: 56,
  
      justifyContent: 'center',
      alignItems: 'center',
    },

    /* Estilo do Formulário */

    containerData: {
      flex: 1,
    },
  
    mapStyle: {
      width: '100%',
      height: 150,
      marginBottom: 20, 
    },
  
    title: {
      color: '#5c8599',
      fontSize: 24,
      fontFamily: 'Nunito_700Bold',
      marginBottom: 32,
      paddingBottom: 24,
      borderBottomWidth: 0.8,
      borderBottomColor: '#D3E2E6'
    },
  
    label: {
      color: '#8fa7b3',
      fontFamily: 'Nunito_600SemiBold',
      marginBottom: 8,
    },
  
   
    comment: {
      fontSize: 11,
      color: '#8fa7b3',
    },
  
    input: {
      backgroundColor: '#fff',
      borderWidth: 1.4,
      borderColor: '#d3e2e6',
      borderRadius: 20,
      height: 56,
      paddingVertical: 18,
      paddingHorizontal: 24,
      marginBottom: 16,
      textAlignVertical: 'top',
    },
  
    uploadedImagesContainer:{
      flexDirection: 'row',
    },
  
    uploadedImage:{
      width: 64,
      height: 64,
      borderRadius: 20,
      marginBottom: 32,
      marginRight: 8,
    },
    
    imagesInput: {
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      borderStyle: 'dashed',
      borderColor: '#96D2F0',
      borderWidth: 1.4,
      borderRadius: 20,
      height: 56,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 32,
    },
  
    switchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 16,
    },
  
    nextButton: {
      backgroundColor: '#15c3d6',
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      height: 56,
      marginTop: 32,
    },
  
    nextButtonText: {
      fontFamily: 'Nunito_800ExtraBold',
      fontSize: 16,
      color: '#FFF',
    },
  
  });

  export default styles;
