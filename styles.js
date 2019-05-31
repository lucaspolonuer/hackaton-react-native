import { PixelRatio, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    margin: 5,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    paddingLeft: 10,
    paddingRight: 10
  },
  imageContainer: {
    borderColor: '#9B9B9B',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  image: {
    width: 400,
    height: 400
  },
  texto: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  rounded: {
    borderRadius: 75,
  }
});

export default styles;