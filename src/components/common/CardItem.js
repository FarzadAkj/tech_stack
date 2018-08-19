import React from 'react';
import { View } from 'react-native';

const CardItem = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
}

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative',
  }
}

export { CardItem };
