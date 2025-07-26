import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Logo Section */}
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>α</Text>
      </View>

      {/* Welcome Text */}
      <Text style={styles.welcome}>Welcome. Sign in to your account.</Text>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Phone or Email"
          style={styles.input}
          placeholderTextColor="#888"
        />
        <TextInput
          placeholder="Password or OTP"
          style={styles.input}
          secureTextEntry
          placeholderTextColor="#888"
        />
      </View>

      {/* Sign In Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      {/* Sign Up Link */}
      <Text style={styles.signUp}>
        Don't have an account? <Text style={styles.signUpLink}>Sign up</Text>
      </Text>

      {/* Bottom Links */}
      <View style={styles.bottomLinks}>
        <Text style={styles.bottomLink}>Privacy</Text>
        <Text style={styles.bottomLink}>Terms</Text>
        <Text style={styles.bottomLink}>Policy</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  logo: {
    fontSize: 120,
    fontWeight: 'bold',
    color: '#007BFF', // Same vivid blue as your logo
  },
  welcome: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 24,
    color: '#222222',
  },
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    height: 48,
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 12,
    paddingHorizontal: 12,
    fontSize: 16,
    color: '#000',
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 14,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
  signUp: {
    textAlign: 'center',
    fontSize: 15,
    marginBottom: 16,
    color: '#555',
  },
  signUpLink: {
    color: '#007BFF',
    fontWeight: '600',
  },
  bottomLinks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 40,
    marginTop: 'auto',
    marginBottom: 20,
  },
  bottomLink: {
    fontSize: 13,
    color: '#666',
  },
});

export default SignInScreen;
