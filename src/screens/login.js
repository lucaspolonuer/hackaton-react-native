import React, {Component} from 'react';
import {TextInput, Alert, Platform, StyleSheet, Text, View, Button} from 'react-native';

type Props = {};
class Login extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>LA MEJOR APP</Text>
        <TextInput style={styles.input} placeholder="Usuario" textContentType="username"
          onChangeText={(username) => this.setState({username: username})} />
        <TextInput style={styles.input} placeholder="Contraseña" textContentType="password"
          onChangeText={(password) => this.setState({password: password})}
          secureTextEntry={true} />
        <Button onPress={() => {
            Alert.alert(`usuario: ${this.state.username}\npassword: ${this.state.password}`);
          }}
          title="entrar!" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 50,
    textAlign: 'center',
    bottom: '10%'
  },
  input: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 15,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    width: '80%'
  }
});

export default Login;
