import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { COLORS, SIZES, TEXT } from '../../constants/theme';
import styles from './SignIn.style';
import { Formik } from 'formik';
// importing everything
import * as Yup from 'yup';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native';
import { HeighSpacer, ReusableBtn } from '../../components';

// Creating validation schema using yup(package for form validation)
const validationSchema = Yup.object().shape({
  // Variables
  // Our password has to be a string and minimum of 8 characters
  // If characters are not 8 then we need to pass message to the user
  // password must be 8 characters
  password: Yup.string()
    .min(8, 'Password must be 8 characters')
    .required('Required'),
  // Our email needs to be a string
  //Entered email must be of format
  //Email needs to be required
  username: Yup.string()
    .min(4, 'User name must be atleast 4 characters')
    .required('Required'),
  email: Yup.string().email('Provide a valid email').required('Required'),
});
const Registration = () => {
  // Creating state variable for when we are submitting
  // our data to the backend, we need to show indicator
  //showing process is underway
  const [loader, setLoader] = useState(false);
  // When we sign in we get the response
  const [responseData, setResponseData] = useState(null);
  // We use obsecureText,setobsecureText to show and hide password
  const [obsecureText, setobsecureText] = useState(true);

  return (
    <View style={[styles.container, { borderWidth: 5, borderColor: 'green' }]}>
      {/* Since we are going to have form , we are using Formik */}
      <Formik
        // To validate our form before we submit we need validationSchema
        validationSchema={validationSchema}
        // initialValues come from top

        // initializing the values of the fields with empty strings
        initialValues={{
          email: '',
          password: '',
          username: '',
        }}
        // If everthing is valid on submit then we login
        onSubmit={(value) => {
          console.log('The value is', value);
        }}
      >
        {/* Inside {} we of () we put methods  */}
        {/* handleChange , the change we are going to have 
    in our Text input  */}
        {/* errors , if there are any errors we need to show them , 
    right underneath our input fileds */}
        {}
        {(props) => {
          return (
            <View
            // style={{ borderWidth: 5, borderColor: 'red' }}
            >
              {/* User Name Field */}
              <View
                style={[
                  styles.wrapper,
                  // { borderWidth: 5, borderColor: 'green' },
                ]}
              >
                <Text style={styles.label}>User Name</Text>
                <View
                // style={  { borderWidth: 5, borderColor: 'black' }}
                >
                  <View
                    // inputWrapper is Object to which an
                    // arrow function is assigned
                    // If our selected input is email
                    //our color should be light blue
                    style={styles.inputWrapper(
                      props.touched.username ? COLORS.lightBlue : COLORS.gray
                    )}
                  >
                    <MaterialCommunityIcons
                      name='face-man-profile'
                      size={25}
                      color={COLORS.gray}
                    />
                    <TextInput
                      onChangeText={props.handleChange('username')}
                      placeholder='Enter user Name'
                      //    When the  text input is pressed
                      // arrow function assigned to onFocus event
                      // handler is executed

                      // setFieldTouched:
                      // This is a function
                      onFocus={() => {
                        props.setFieldTouched('username');
                      }}
                      onBlur={() => {
                        props.setFieldTouched('username', '');
                      }}
                      width={'100%'}
                      // The Key board appearing on pressing the
                      // TextInput field will cause it show lower
                      // case letters
                      autoCapitalize='none'
                      autoCorrect={false}
                      style={{}}
                      value={props.values.username}
                    />
                  </View>
                  {/* Displaying errors if there are any */}
                  {props.touched.username && props.errors.username && (
                    <Text style={styles.errorMessage}>
                      {props.errors.username}
                    </Text>
                  )}
                </View>
              </View>
              {/* Email Field */}
              <View
                style={[
                  styles.wrapper,
                  // { borderWidth: 5, borderColor: 'green' },
                ]}
              >
                <Text style={styles.label}>Email</Text>
                <View
                // style={{ borderWidth: 5, borderColor: 'black' }}
                >
                  <View
                    // inputWrapper is Object to which an
                    // arrow function is assigned
                    // If our selected input is email
                    //our color should be light blue
                    style={styles.inputWrapper(
                      props.touched.email ? COLORS.lightBlue : COLORS.gray
                    )}
                  >
                    <MaterialCommunityIcons
                      name='email-outline'
                      size={25}
                      color={COLORS.gray}
                    />
                    <TextInput
                      onChangeText={props.handleChange('email')}
                      placeholder='Enter email'
                      //    When the  text input is pressed
                      // arrow function assigned to onFocus event
                      // handler is executed

                      // setFieldTouched:
                      // This is a function
                      onFocus={() => {
                        props.setFieldTouched('email');
                      }}
                      onBlur={() => {
                        props.setFieldTouched('email', '');
                      }}
                      width={'100%'}
                      // The Key board appearing on pressing the
                      // TextInput field will cause it show lower
                      // case letters
                      autoCapitalize='none'
                      autoCorrect={false}
                      style={{}}
                      value={props.values.email}
                    />
                  </View>
                  {/* Displaying errors if there are any */}
                  {props.touched.email && props.errors.email && (
                    <Text style={styles.errorMessage}>
                      {props.errors.password}
                    </Text>
                  )}
                </View>
              </View>

              {/*Password Field*/}
              <View
                style={[
                  styles.wrapper,
                  // { borderWidth: 5, borderColor: 'blue' },
                ]}
              >
                <Text style={styles.label}>Password</Text>
                <View>
                  <View
                    // inputWrapper is Object to which an
                    // arrow function is assigned
                    // If our selected input is email
                    //our color should be light blue
                    style={styles.inputWrapper(
                      props.touched.password ? COLORS.lightBlue : COLORS.gray
                    )}
                  >
                    <MaterialCommunityIcons
                      name='lock-outline'
                      size={25}
                      color={COLORS.gray}
                    />
                    <TextInput
                      value={props.values.password}
                      // If there is a change in Input Field, then we want
                      // to handle the change
                      onChangeText={props.handleChange('password')}
                      secureTextEntry={obsecureText}
                      //    value={values}
                      placeholder='Enter Password'
                      //    When the  text input is pressed
                      // arrow function assigned to onFocus event
                      // handler is executed

                      // setFieldTouched:
                      // This is a function
                      onFocus={() => {
                        props.setFieldTouched('password');
                        // console.log(props.touched)
                      }}
                      onBlur={() => {
                        props.setFieldTouched('password', '');
                        // console.log(props.touched)
                      }}
                      width={'100%'}
                      // The Key board appearing on pressing the
                      // TextInput field will cause it show lower
                      // case letters
                      autoCapitalize='none'
                      autoCorrect={false}
                      style={{ flex: 1 }}
                    />
                    <TouchableOpacity
                      onPress={() => {
                        // In here we need to trigger obsecureText
                        //from true to false
                        setobsecureText(!obsecureText);
                      }}
                    >
                      <MaterialCommunityIcons
                        name={obsecureText ? 'eye-off-outline' : 'eye-outline'}
                        size={20}
                        color={COLORS.black}
                      />
                    </TouchableOpacity>
                  </View>
                  {/* Displaying errors if there are any */}
                  {props.touched.password && props.errors.password && (
                    <Text style={styles.errorMessage}>
                      {props.errors.email}
                    </Text>
                  )}
                </View>
              </View>

              <HeighSpacer height={10} />
              <ReusableBtn
                onPressprop={props.handleSubmit}
                width={SIZES.width - 60}
                backgroundColor={COLORS.green}
                button_name_prop={'REGISTER'}
                borderColor={COLORS.green}
                TextColor={COLORS.white}
              />
            </View>
          );
        }}
      </Formik>
    </View>
  );
};

export default Registration;

// {
//     "dirty": false, "errors": {},
//     "getFieldHelpers": [Function anonymous],
//     "getFieldMeta": [Function anonymous],
//     "getFieldProps": [Function anonymous],
//     "handleBlur": [Function anonymous],
//     "handleChange": [Function anonymous],
//     "handleReset": [Function anonymous],
//     "handleSubmit": [Function anonymous],
//     "initialErrors": {}, "initialStatus": undefined,
//     "initialTouched": {}, "initialValues": {"email": "", "password": ""},
//     "isSubmitting": false, "isValid": true,
//     "isValidating": false, "registerField": [Function anonymous],
//     "resetForm": [Function anonymous], "setErrors": [Function anonymous],
//     "setFieldError": [Function anonymous], "setFieldTouched": [Function anonymous],
//     "setFieldValue": [Function anonymous], "setFormikState": [Function anonymous],
//     "setStatus": [Function anonymous], "setSubmitting": [Function anonymous], "setTouched": [Function anonymous],
//     "setValues": [Function anonymous], "status": undefined,
//     "submitCount": 0, "submitForm": [Function anonymous],
//     "touched": {}, "unregisterField": [Function anonymous],
//     "validateField": [Function anonymous], "validateForm": [Function anonymous],
//     "validateOnBlur": true, "validateOnChange": true,
//     "validateOnMount": false,
//     "values": {"email": "", "password": ""}
//     }
