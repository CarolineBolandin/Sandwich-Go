import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Alert,
    Button,
} from 'react-native';
import colors from '../styles/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/core';
import {Botao} from '../components/Botao';


export function Introduction() {

    const navigation = useNavigation();

    function handleStart() {
        navigation.navigate('LetsGo');
    };

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.introduction}>

                <Text style={styles.introductionText}> 
               Suas receitas na tela do Celular! {"\n"}
                  </Text>
                 <Botao title='Próximo' onPress={handleStart} />


                
            </View>

           

        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        flex: 1,
        justifyContent: 'space-between',
        width: '100%',
        height: '100%'
    },

    introduction: {
        borderRadius: 16,
        backgroundColor: colors.deepSkyBlue,
        justifyContent: 'center',
        paddingHorizontal: 35,
        paddingLeft: 30,
        marginTop: '60%',
        alignContent: 'center',
        paddingBottom: 20,
    },

    introductionText: {
        fontSize: 32,
        textAlign: 'left',
        color: colors.AliceBlue,
        lineHeight: 42,
        fontWeight: 'bold',
        borderRadius: 16,
    },

  

});


Introduction.navigationOpions = {
    title: 'Introduction',
}

export default Introduction;