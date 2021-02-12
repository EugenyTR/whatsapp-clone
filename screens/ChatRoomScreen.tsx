import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';

import { useRoute } from '@react-navigation/native';

import chatRoomData from '../data/Chats';
import ChatMessage from "../components/ChatMessage";

const ChatRoomScreen = () => {
    const route = useRoute();

    // console.log(route.params);
    return (
        <FlatList
            data={chatRoomData.messages}
            renderItem={({ item }) => <ChatMessage message={item} />}
        />
    );
}

const styles = StyleSheet.create({});

export default ChatRoomScreen;
