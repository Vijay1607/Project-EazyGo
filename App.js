import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.companyName}>EAZYGO</Text>
      <View style={styles.logoContainer}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>LOGO</Text>
        </View>
        <Text style={styles.welcomeText}>WELCOME</Text>
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>UserName:</Text>
        <TextInput placeholder="Enter your username" style={styles.input} />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Password:</Text>
        <TextInput placeholder="Enter your password" secureTextEntry={true} style={styles.input} />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: 120, 
  },
  companyName: {
    color: 'blue',
    fontSize: 40,
    fontWeight: 'bold',
    position: 'absolute',
    top: 70, 
    alignSelf: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 60, 
  },
  logo: {
    backgroundColor: 'blue',
    borderRadius: 10,
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    color: 'white',
  },
  welcomeText: {
    color: 'blue',
    fontSize: 30,
    marginLeft: 20, 
  },
  inputGroup: {
    alignSelf: 'stretch',
    paddingHorizontal: 40, 
    marginBottom: 10, 
  },
  label: {
    alignSelf: 'flex-start',
    color: 'blue',
    marginBottom: 5, 
  },
  input: {
    height: 40,
    borderColor: 'blue',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20, 
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    marginBottom: 20, 
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  footer: {
    position: 'absolute',
    right: 30,
    bottom: 30,
  },
  forgotPassword: {
    color: 'blue',
  },
});

export default App;