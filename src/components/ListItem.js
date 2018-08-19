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

        {props.expanded
          ?
          <Text>{props.item.description}</Text>
          :
          null
        }
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

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.item.id

  return {
    expanded/*: expanded*/,
  };
}

export default connect(mapStateToProps, actions)(ListItem);
