import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';

import ListItem from './ListItem';

renderItem = (item) => {
  return (
    <ListItem item={item} />
  );
}

_keyExtractor = (item, index) => item.id;

const LibraryList = (props) => {
  return (
    <View>
      <FlatList
        data={props.libraries}
        keyExtractor={this._keyExtractor}
        renderItem={({item}) => renderItem(item)}
      />
    </View>
  );
}

const mapStateToProps = state => {
  return {
    libraries: state.libraries,
  };
}

export default connect(mapStateToProps)(LibraryList);
