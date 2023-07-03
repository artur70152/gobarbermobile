import React, { useMemo, useState } from 'react';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View, TouchableOpacity, Text } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import { Container, DateButton, DateText } from './styles';

export default function DateInput({ date, onChange }) {
  const [pickerVisible, setPickerVisible] = useState(false);

  const dateFormatted = useMemo(() => format(date, "dd 'de' MMMM 'de' yyyy", { locale: pt }), [date]);

  const handleOpenPicker = () => {
    setPickerVisible(true);
  };

  const handleConfirm = (selectedDate) => {
    setPickerVisible(false);
    onChange(selectedDate);
  };

  const handleCancel = () => {
    setPickerVisible(false);
  };

  return (
    <Container>
      <DateButton onPress={handleOpenPicker}>
        <Icon name="event" color="#FFF" size={20} />
        <DateText>{dateFormatted}</DateText>
      </DateButton>

      <DateTimePickerModal
        isVisible={pickerVisible}
        mode="date"
        date={date}
        locale="pt_BR"
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
    </Container>
  );
}