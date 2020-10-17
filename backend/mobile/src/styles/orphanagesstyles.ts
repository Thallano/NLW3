import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    map:{
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },

    marker:{
      height: 60,
      width: 60,

    }
    ,
  
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
  
  });

  export default styles;
