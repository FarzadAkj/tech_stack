import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  LayoutAnimation,
} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

import { CardItem } from './common';

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(this.props.item.id)}>
        <View>
          <CardItem>
            <Text style={styles.titleTextStyle}>{this.props.item.title}</Text>
          </CardItem>

          {this.props.expanded
            ?
            <CardItem>
              <Text>{this.props.item.description}</Text>
            </CardItem>
            :
            null
          }
        </View>
      </TouchableWithoutFeedback>
    );
  }
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
