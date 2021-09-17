import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
    DoctorMessage,
    DoctorPage,
    DoctorProfile,
    EditProfile,
    GetStarted,
    HospitalPage,
    ListChatting,
    MessagesPage,
    Register,
    SignIn,
    Splash,
    UploadPhoto,
    UserProfile,
} from "../pages";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation } from "../components";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyApp() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={props => <BottomNavigation {...props} />}>
            <Tab.Screen name="Doctors" component={DoctorPage} />
            <Tab.Screen name="Messages" component={MessagesPage} />
            <Tab.Screen name="Hospitals" component={HospitalPage} />
        </Tab.Navigator>
    );
}



const Router = () => {
    return (
        <Stack.Navigator initialRouteName="Register" screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="Splash"
                component={Splash} />
            <Stack.Screen
                name="GetStarted"
                component={GetStarted} />
            <Stack.Screen
                name="Register"
                component={Register} />
            <Stack.Screen
                name="SignIn"
                component={SignIn} />
            <Stack.Screen
                name="UploadPhoto"
                component={UploadPhoto} />
            <Stack.Screen
                name="MyApp"
                component={MyApp}
            />
            <Stack.Screen
                name="ListChatting"
                component={ListChatting}
            />
            <Stack.Screen
                name="UserProfile"
                component={UserProfile}
            />
            <Stack.Screen
                name="EditProfile"
                component={EditProfile}
            />
            <Stack.Screen
                name="DoctorMessage"
                component={DoctorMessage}
            />
            <Stack.Screen
                name="DoctorProfile"
                component={DoctorProfile}
            />
        </Stack.Navigator>
    )
}


export default Router;