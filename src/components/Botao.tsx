import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import colors from '../styles/colors';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Botao({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity 
      style={styles.container} 
      {...rest}
    >
      <Text style={styles.text}>
        { title }
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.slateBlue3,
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: colors.black,
  },
  text: {
    fontSize: 16,
    color: colors.AliceBlue,
  }
})