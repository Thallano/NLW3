import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#39CC82',
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20, 
    },

    containerBackground:{

    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 15,
        borderBottomColor: '#737380',
        borderBottomWidth: 1,
    },

    headerText: {
        fontSize: 15,
        color: '#737380',
    },

    headerTextBold: {
        fontWeight: 'bold'
    },

    title: {
        fontFamily: "Nunito_800ExtraBold",
        color: '#FFF',
        fontSize: 35,
        lineHeight: 40,
        marginBottom: 20,
        textAlign: 'center'
    },

    giftList: {
        marginTop:32,
    },

    giftContainer: {
        padding: 40,
        borderRadius: 20,
        borderWidth: 3,
        borderColor: '#2B9B63',
        backgroundColor: '#EDFFF6',
        marginBottom: 16,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius:3.84,
        elevation:5
            
    },

    giftProperty: {
        fontSize: 20,
        color: '#196740',
        fontFamily: "Nunito_800ExtraBold",
    },
    
    giftValue: {
        marginTop: 8,
        fontSize: 18,
        marginBottom: 25,
        color: '#2B9B63',
        fontFamily: "Nunito_600SemiBold",
    },

    detailsButton: {
        fontFamily: "Nunito_600SemiBold",
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems: 'center',
        backgroundColor: '#FF669D',
        borderRadius: 20,
        height: 60,
        elevation: 4,
    },

    detailsButtonText: {
        fontFamily: "Nunito_600SemiBold",
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold'
    },

});
