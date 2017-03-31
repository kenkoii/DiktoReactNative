import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  logo: {
    width: 125,
    height: 125
  },
  logoContainer: {
    alignItems: 'center',
    height: 200,
    justifyContent: 'center'
  },
  formContainer: {
    borderRadius: 6,
    height: 50,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
    borderWidth: 1,
    borderStyle: 'solid'
  },
  formInput: {
    flex: 4,
    flexDirection: 'row',
    color: 'rgba(0,0,0,0.4)',
    textAlign: 'auto',
    fontSize: 18,
    padding: 10
  },
  button2: {
    width: 50,
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  listViewContainer: {
    flex: 6,
    alignSelf: 'stretch',
    marginTop: 20
  },
});