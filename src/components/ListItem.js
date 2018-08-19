import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

import { CardItem } from './common';

const ListItem = (props) => {
  console.log(props);
  return (
    <TouchableWithoutFeedback onPress={() => props.selectLibrary(props.item.id)}>
      <View>
        <CardItem>
          <Text style={styles.titleTextStyle}>{props.item.title}</Text>
        </CardItem>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = {
  titleTextStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
}

const mapStateToProps = state => {
  return {
    selectedLibraryId: state.selectedLibraryId,
  };
}

export default connect(mapStateToProps, actions)(ListItem);