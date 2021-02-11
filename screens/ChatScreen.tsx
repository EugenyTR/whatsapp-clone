import * as React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { View } from '../components/Themed';

import chatRoom from '../data/ChatRoom';
import ChatListItem from "../components/ChatListItem";

export default function ChatScreen() {
  return (
    <View style={styles.container}>
        <FlatList
            data={chatRoom}
            renderItem={({ item }) => <ChatListItem chatRoom={item} />}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
