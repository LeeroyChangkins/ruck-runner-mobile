import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#ffb400',
  secondary: '#5856D6',
  danger: '#FF3B30',
  success: '#34C759',
  warning: '#FF9500',
  background: '#1a1a1a',
  card: '#2a2a2a',
  text: '#FFFFFF',
  textSecondary: '#AAAAAA',
  border: '#444444',
  borderError: '#FF3B30',
  placeholder: '#777777',
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
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: colors.background,
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
    color: colors.text,
  },
  subtitle: {
    marginBottom: 24,
    textAlign: 'center',
    color: colors.textSecondary,
    fontSize: 16,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    marginBottom: 8,
    fontSize: 16,
    fontWeight: '500',
    color: colors.text,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    backgroundColor: '#2a2a2a',
    color: colors.text,
  },
  inputError: {
    borderColor: colors.danger,
  },
  errorText: {
    color: colors.danger,
    marginTop: 4,
    fontSize: 14,
  },
  primaryButton: {
    backgroundColor: colors.primary,
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
  },
  link: {
    marginTop: 16,
    alignSelf: 'center',
  },
  linkText: {
    color: colors.primary,
    fontSize: 16,
  },
  photoContainer: {
    height: 150,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    overflow: 'hidden',
    backgroundColor: '#2a2a2a',
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
    color: colors.textSecondary,
    fontSize: 16,
  },
}); 