import React, { useEffect, useState } from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { TextInput, Button, Text, HelperText } from 'react-native-paper';
import { useMyContextProvider, login } from '../index';
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [controller, dispatch] = useMyContextProvider();
  const { userLogin } = controller;
  const [showPassword, setShowPassword] = useState(false);
  const [disableLogin, setDisableLogin] = useState(true);

  const hasErrorEmail = () => !email.includes("@");
  const hasErrorPassword = () => password.length < 6;

  useEffect(() => {
    setDisableLogin(email.trim() === '' || password.trim() === '' || hasErrorEmail() || hasErrorPassword());
  }, [email, password, hasErrorEmail, hasErrorPassword]);

  const handleLogin = () => {
    login(dispatch, email, password);
  };

  useEffect(() => {
    console.log(userLogin)
    if (userLogin != null) {
      if (userLogin.role === "admin")
        navigation.navigate("Admin")
      else if (userLogin.role === "customer")
        navigation.navigate("Customer")
    }
  }, [userLogin])

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Text style={{
        fontSize: 40,
        fontWeight: "bold",
        alignSelf: "center",
        color: "#FF6666",
        marginTop: 100,
        marginBottom: 50
      }}>
        LOGIN
      </Text>
      <TextInput
        label={"Email"}
        value={email}
        onChangeText={setEmail}
      />
      <HelperText type='error'  visible={hasErrorEmail()}>
        Địa chỉ Email không hợp lệ
      </HelperText>
      <View style={{ flexDirection: "row" }}>
        <TextInput
          label={"Password"}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={showPassword}
          style={{ flex: 1 }}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Image
            source={showPassword ? require('../assets/eye-hidden.png') : require('../assets/eye.png') }
            style={{ width: 20, height: 20, margin: 20 }}
          />
        </TouchableOpacity>
      </View>
      <HelperText type='error' visible={hasErrorPassword()}>
        Password có ít nhất 6 ký tự
      </HelperText>
      <Button mode='contained' textColor='black' buttonColor='#FF6666' onPress={handleLogin} disabled={disableLogin}>
        Login
      </Button>
      <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
        <Text>Dont have an account ?</Text>
        <Button onPress={() => navigation.navigate("Register")}>
          Create new account
        </Button>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
        <Button onPress={() => navigation.navigate("ForgotPassword")}>
          Forgot Password
        </Button>
      </View>
    </View>
  );
};

export default Login;
