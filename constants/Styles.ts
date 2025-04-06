import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#007AFF',
  secondary: '#5856D6',
  danger: '#FF3B30',
  success: '#34C759',
  warning: '#FF9500',
  background: '#FFFFFF',
  card: '#F2F2F7',
  text: '#000000',
  textSecondary: '#666666',
  border: '#DDDDDD',
  borderError: '#FF3B30',
  placeholder: '#999999',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const typography = {
  title: {
    fontSize: 24,
    fontWeight: 'bold' as const,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold' as const,
  },
  body: {
    fontSize: 16,
  },
  label: {
    fontSize: 16,
  },
  small: {
    fontSize: 14,
  },
  error: {
    fontSize: 14,
    color: colors.danger,
  },
};

export const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: '#FFFFFF',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  title: {
    marginBottom: 8,
    textAlign: 'center',
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    marginBottom: 24,
    textAlign: 'center',
    color: '#666666',
    fontSize: 16,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    marginBottom: 8,
    fontSize: 16,
    fontWeight: '500',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
  },
  inputError: {
    borderColor: '#FF3B30',
  },
  errorText: {
    color: '#FF3B30',
    marginTop: 4,
    fontSize: 14,
  },
  primaryButton: {
    backgroundColor: '#007AFF',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  link: {
    marginTop: 16,
    alignSelf: 'center',
  },
  linkText: {
    color: '#007AFF',
    fontSize: 16,
  },
  photoContainer: {
    height: 150,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    overflow: 'hidden',
  },
  photoPreview: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  photoUploadButton: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoUploadText: {
    color: '#666666',
    fontSize: 16,
  },
}); 