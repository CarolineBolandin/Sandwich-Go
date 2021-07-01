import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    SafeAreaView,
    Dimensions,
    Alert,
    Button,
} from 'react-native';
import colors from '../styles/colors';
import { useNavigation } from '@react-navigation/core';

import { Botao } from '../components/Botao';


export function LetsGo() {

    const navigation = useNavigation();

    function handleStart() {
        navigation.navigate('NewUserName');
    };

    return(
        <SafeAreaView style={styles.container}>

          

            <View style={styles.introduction}>

                <Text style={styles.introductionText}>Mate sua fome {"\n"}
         em minutos! {"\n"}
         </Text>  
         <Text style={styles.introductionEmot}> 😍 </Text>
            </View>

            <Botao title='Vamos nessa!' onPress={handleStart} />

        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        justifyContent: 'space-between',
    },

    introduction: {
        flex: 1,
        paddingLeft: 30,
        textAlign: 'center',
        marginVertical: '60%',
    },

    introductionText: {
        fontSize: 32,
        textAlign: 'center',
        color: colors.AliceBlue,
        lineHeight: 42,
        fontWeight: 'bold',
    },

    introductionEmot:{
        fontSize: 72,
        textAlign: 'center',
        color: colors.AliceBlue,
    },

});


LetsGo.navigationOpions = {
    title: 'Introduction',
}

export default LetsGo;