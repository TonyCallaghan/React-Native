https://snack.expo.dev/@tonycallaghan/refreshcontrol-scrollview-and-list

import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  RefreshControl,
} from 'react-native';

const App = () => {

  const [Items, setItems] = useState([
    { key: 1, item: 'Refresh' },
    { key: 2, item: 'to create' },
    { key: 3, item: 'a new' },
    { key: 4, item: 'item' },
    { key: 5, item: 'Item 5' },
    { key: 6, item: 'Item 6' },
    { key: 7, item: 'Item 7' },
    { key: 8, item: 'Item 8' },
  ]);
  const [Refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setItems([...Items, { key: 200, item: `Item ${Items.length + 1}` }]);
    setRefreshing(false);
  }

  return (
    <ScrollView
      style={styles.body}
      refreshControl={
        <RefreshControl
          refreshing={Refreshing}
          onRefresh={onRefresh}
          colors={['#ff00ff']}
        />
      }
    >
      {
        Items.map((object) => {
          return (
            <View style={styles.item} key={object.key}>
              <Text style={styles.text}>{object.item}</Text>
            </View>
          )
        })
      }
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#2A2F4F',
  },
  item: {
    margin: 10,
    backgroundColor: '#917FB3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#FDE2F3',
    fontSize: 45,
    fontFamily: 'Helvetica',
    margin: 10,
  },
});

export default App;
