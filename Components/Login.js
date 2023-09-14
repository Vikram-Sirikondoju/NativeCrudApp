import React, { useState } from 'react';
import { View, TextInput, Button, Text, Image, Alert, TouchableOpacity, ScrollView } from 'react-native';

const Login = ({setDisplay}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cnfpassword, cnfsetPassword] = useState('');
  const [emailError, setEmailError] = useState('Please enter a valid email address.');
  const [passwordError, setPasswordError] = useState('Password must be at least 8 characters long.');
  const [cnfpasswordError, cnfsetPasswordError] = useState('Password not Matched');

  const validateEmail = () => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }
  };
  const submitData =() =>{
    setDisplay("Register")
  }
  const validatePassword = () => {
    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long.');
    } else {
      setPasswordError('');
    }
  };

  

  const validateForm = () => {

    if (emailError==="" && passwordError==="") {
      // Both email and password are valid, you can proceed with further actions
      setDisplay("User")
    }
  };

  return (
    <ScrollView>
      <View style={style.register}>
      <Image style={style.stretch} source={require('./assets/icon.png')} />
      <Text style={style.title}>Login</Text>
      <TextInput
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        onBlur={validateEmail}
        value={email}
        style={style.input}
        keyboardType="email-address"
      />
      
      {emailError ? (<Text style={{ color: 'red' }}>{emailError}</Text>) : (<Text style={{color:"green"}}>Valid Email</Text>)}

      <TextInput
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        onBlur={validatePassword}
        value={password}
        style={style.input}
        secureTextEntry={true}
      />
      
      {passwordError ? (<Text style={{ color: 'red' }}>{passwordError}</Text>) : (<Text style={{color:"green"}}>Password Validated</Text>)}


      <TouchableOpacity style={style.btn}  onPress={validateForm}>
        <Text>Login</Text>
      </TouchableOpacity>
      <Text onPress={submitData}>New User / Register</Text>
    </View>
    </ScrollView>
   

  );
};

export default Login;






const style={
  register:{
      flex:1,
      alignItems:"center",
      justifyContent:"center"
  },
  input:{
      borderWidth:1,
      width:"80%",
      margin:4,
      borderRadius:10,
      textAlign:"center"
  },
  btn:{
      borderWidth:1,
      width:"80%",
      margin:20,
      padding:10,
      borderRadius:10,
      alignItems:"center",
      backgroundColor:"pink",
      color:"white",
  },
  title:{
      margin:20,
      fontSize:30,
      textDecorationLine:"underline"
  },
  login:{
      margin:10,
      fontSize:15,
      textDecorationLine:"underline"
  },
  stretch:{

  }

}