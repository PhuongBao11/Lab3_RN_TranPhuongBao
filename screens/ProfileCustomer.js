import React from "react";
import { Text } from "react-native-paper";
import { View, StyleSheet } from "react-native";
import { useMyContextProvider } from "../index";

const ProfileCustomer = () =>{
    const [controller, dispatch] = useMyContextProvider();
    const { userLogin } = controller;

    return(
        <View style={{ flex: 1 }}>
            <Text style={{ padding: 15, fontSize: 25, fontWeight: "bold", textAlign:"center"}}>Profile</Text>
            {userLogin !== null && (
                <View style={{ flexDirection: 'row', padding: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Email: </Text>
                    <Text style={{ fontSize: 20}}>{userLogin.email}</Text>
                </View>
            )}
            {userLogin !== null && (
                <View style={{ flexDirection: 'row', padding: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Password: </Text>
                    <Text style={{ fontSize: 20}}>{userLogin.password}</Text>
                </View>
            )}
            {userLogin !== null && (
                <View style={{ flexDirection: 'row', padding: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Full Name: </Text>
                    <Text style={{ fontSize: 20}}>{userLogin.fullName}</Text>
                </View>
            )}
            {userLogin !== null && (
                <View style={{ flexDirection: 'row', padding: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Address: </Text>
                    <Text style={{ fontSize: 20}}>{userLogin.address}</Text>
                </View>
            )}
            {userLogin !== null && (
                <View style={{ flexDirection: 'row', padding: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Phone: </Text>
                    <Text style={{ fontSize: 20}}>{userLogin.phone}</Text>
                </View>
            )}
        </View>
    )
}
export default ProfileCustomer;
