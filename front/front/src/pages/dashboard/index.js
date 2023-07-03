import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { SignLinkText, SignLink } from '../signin/styles';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import Button from '../../Components/button';
import { signOut } from '../../store/modules/auth/actions';
import Background from '../../Components/Background';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../Header/header';
import { Container, Title, List } from './styles';
import Appointment from '../../Components/appointments';
import api from '../../services/api';

function Dashboard() {
  const [appointments, setAppointments] = useState([]);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  async function loadAppointments() {
    try {
      const response = await api.get('appointments');
      setAppointments(response.data);
    } catch (error) {
      // Tratar o erro ao buscar os agendamentos
      console.log('Erro ao buscar os agendamentos:', error);
    }
  }
  useEffect(() => {
    if (isFocused) {
      loadAppointments();
    }
  }, [isFocused]);

  async function handleCancel(id) {
    const response = await api.delete(`appointments/${id}`);

    setAppointments((prevAppointments) =>
      prevAppointments.map((appointment) =>
        appointment.id === id ? { ...appointment, canceled_at: response.data.canceled_at } : appointment
      )
    );
  }

  return (
    <Background>
      <View style={styles.container}>
        <Container>
          <Title>Agendamentos</Title>
          <View style={styles.flatlistcontainer}>
            <List
              style={{ height: 575 }}
              data={appointments}
              keyExtractor={(item) => String(item.id)}
              renderItem={({ item }) => <Appointment onCancel={() => handleCancel(item.id)} data={item} />}
            />
          </View>
        </Container>
        <View style={styles.headerContainer}>
          <Header />
        </View>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  flatlistcontainer: {
    width: '80%', // Define the desired width here
    alignSelf: 'center',
  },
});

export default Dashboard;