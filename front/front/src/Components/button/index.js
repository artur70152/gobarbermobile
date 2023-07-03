import React, { forwardRef } from "react";
//ActivityIndicator adciona um sinal de loading do botao
import { ActivityIndicator } from "react-native";
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Text } from './styles';
//children é todo o conteudo de dentro da tag do botao
//loading é true ou false
export default function Button({ children, loading, ...rest }) {
  return (
    <Container {...rest}>
      {loading ?( <ActivityIndicator  size={"small"} color="#FFF" />)
      :(<Text>{children}</Text>)}
    </Container>
  );
  }

Button.propTypes = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  loading: false,
  
};

