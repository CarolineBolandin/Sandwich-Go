import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';

import { EnviromentButton } from '../components/ButtonSubmit';

import colors from '../styles/colors';



export function Sandwichs() { 

  const [name, setName] = useState('');


    async function restoreValue() {
      try{
      const restoreName = await AsyncStorage.getItem('@SadwichGo:nameUser');
      setName(restoreName);
      }catch(error){

      }
    }
  
    restoreValue();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.userName}>{name}</Text>

        <Text style={styles.title}>
          Qual o principal igrediente
        </Text>
        <Text style={styles.subtitle}>
          você quer colocar no seu sandwich?
        </Text>
      </View>

      <View>
       
        
      </View>

      <View style={styles.sandwichs}>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },

  userName: {
      fontSize: 21,
  },

  header: {
    paddingHorizontal: 30
  },
  title: {
    fontSize: 17,
    color: colors.heading,
    lineHeight: 20,
    marginTop: 15
  },
  subtitle: {
    fontSize: 17,
    lineHeight: 20,
    color: colors.heading
  },
  environmentList: {
    height: 40,
    justifyContent: 'center',
    paddingBottom: 5,
    marginVertical: 32
  },
  sandwichs: {
    flex: 1,
    paddingHorizontal: 32,
    justifyContent: 'center'
  }
})


Sandwichs.navigationOpions = {
  title: 'Sandwichs',
}

export default Sandwichs;