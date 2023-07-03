import styled from 'styled-components/native'
import {Platform} from 'react-native'
import Input from '../../Components/input';
import Button from '../../Components/button';



export const Container=styled.View`
flex:1;
justify-content:center;
align-items:center;
padding:0;
`;


export const Form = styled.View`
align-self:stretch;
margin-top:50px;
`;

export const FormInput=styled(Input)`
margin-bottom:10px;
`;

export const SubmitButton=styled(Button)`
margin-top:5px;
`;

export const SignLink=styled.TouchableOpacity`
margin-top:120px;
`;

export const SignLinkText=styled.Text`
color:#fff;
font-weight:bold;
font-size:16px;
`;




