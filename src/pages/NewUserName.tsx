import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Botao } from '../components/Botao';

import colors from '../styles/colors';




export function NewUserName() {
  const navigation = useNavigation();
  
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState('');
  
  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!name)
  }

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputChange(value: string) {
    setName(value);
    setIsFilled(!!value)
  }

  async function handleSubmit() {
    if (!name) 
      return Alert.alert('Me diz como chamar você 😢');

    try {
      await AsyncStorage.setItem('@SadwichGo:nameUser', name);
       navigation.navigate('Sandwichs');
    } catch(error){
      Alert.alert('Não foi possível salvar o seu nome. 😢');
    }

  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.content}>
            <View style={styles.form}>
              <View style={styles.header}>
                <Text style={styles.emoji}>
                  {isFilled ? '😄' : '😃' }
                </Text>
                <Text style={styles.title}>
                  Como podemos {'\n'}
                  chamar você?
                </Text>
              </View>

              <TextInput
                style={[
                  styles.input,
                  (isFocused || isFilled) && {  borderColor: colors.deepSkyBlue }
                ]}
                placeholder="Digite um nome"
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                onChangeText={handleInputChange}
              />

              <View style={styles.footer}> 
                <Botao 
                  title="Confirmar" 
                  onPress={handleSubmit}
                />
              </View>

            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: colors.black,
    flex: 1,
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center'
  }, 

  content: {
    flex: 1,
    width: '100%'
  },

  form: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 54,
    alignItems: 'center'
  },
  header: {
    alignItems: 'center'
  },

  emoji: {
    fontSize: 44
  },

  input: {
    borderBottomWidth: 1,
    borderColor: colors.slateBlue3,
    color: colors.AliceBlue,
    width: '100%',
    fontSize: 18,
    marginTop: 50,
    padding: 10,
    textAlign: 'center',
  }, 

  title: {
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'center',
    color: colors.AliceBlue,
    marginTop: 20
  },
  footer: {
    width: '100%',
    marginTop: 40,
    paddingHorizontal: 20
  }
})


NewUserName.navigationOpions = {
    title: 'NewUserName',
}

export default NewUserName;