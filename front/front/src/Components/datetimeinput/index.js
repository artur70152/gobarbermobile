import React, {useMemo} from 'react'
import DatePicker from '@react-native-community/datetimepicker'
import{format} from 'date-fns';
import pt from 'date-fns/locale/pt'
import Icon from 'react-native-vector-icons/MaterialIcons';

import{View} from 'react-native'
import { Container,DateButton,DateText } from './styles'
export default function DateInput({date,onChange}){

const dateFormatted=useMemo(
()=>format(date, "dd 'de' MMMM 'de' yyyy",{locale:pt}),
[date]

)

const handleoppenpicker=async ()=>{
const{action,year,month,day}=await DatePicker.open({
    mode:'spinner',
    date,
})
if(action===DatePicker.dateSetAction){
const selectedDate=new Date(year, month, day)
onChange(selectedDate)
}
}

    return(<Container>
<DateButton onPress={handleoppenpicker}>
<Icon name="event" color="#FFF" size={20}/>

<DateText>{dateFormatted}</DateText>



</DateButton>
    </Container>)
}