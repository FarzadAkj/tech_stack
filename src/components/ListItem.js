import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { CardItem } from './common';

const ListItem = (props) => {
  return (
    <CardItem>
      <Text style={styles.titleTextStyle}>{props.item.title}</Text>
    </CardItem>
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

export default connect(mapStateToProps)(ListItem);
