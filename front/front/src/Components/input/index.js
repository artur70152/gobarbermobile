import React, { forwardRef } from "react";
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, TInput } from './styles';
//style é uma propriedade que podemos receber quando 
//estilizamos o react-native com o styled components
//coloca os estilos dentro de uma tag style

//ref serve para termos uma referencia direta ao elemento do input

const Input = forwardRef(({ style, icon, ...rest }, ref) => {
  return (
    <Container style={style}>
      {icon && <Icon name={icon} size={20} color="rgba(255,255,255,0.6)" />}
      <TInput {...rest} ref={ref} />
    </Container>
  );
});

Input.propTypes = {
  icon: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

Input.defaultProps = {
  icon: null,
  style: {},
};

export default Input;