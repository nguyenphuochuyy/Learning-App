import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, ScrollView } from 'react-native';


const ChatBox = () => {
    const API_KEY = 'AIzaSyBR9OfLEfytXh4KT0Nod0bNfzP28aTW2FA';
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const timeout = (ms) => new Promise((_, reject) => setTimeout(() => reject(new Error('Request timed out')), ms));

  const chatWithGemini = async (message) => {
    try {
      const response = await fetch('https://api.your-gemini-api-url.com', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: message,
          model: 'gemini-1', // Thay bằng model Gemini bạn muốn sử dụng
          max_tokens: 150, // Tùy chỉnh số lượng token
        }),
      });
  
      // Kiểm tra xem có lỗi trong phản hồi không
      if (!response.ok) {
        throw new Error('Failed to fetch from Gemini API');
      }
  
      const data = await response.json();
      return data; // Lấy phản hồi từ Gemini API

      
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      return null;
    }
  };
  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = {
      sender: 'user',
      text: input,
    };

    setMessages([...messages, userMessage]);
    setInput(''); // Clear input

    // Gọi API Gemini để lấy phản hồi
    const response = await chatWithGemini(input);

    if (response && response.text) {
      const geminiMessage = {
        sender: 'gemini',
        text: response.text,
      };
      setMessages((prevMessages) => [...prevMessages, geminiMessage]);
    } else {
      // Nếu có lỗi xảy ra
      const errorMessage = {
        sender: 'gemini',
        text: 'Sorry, I couldn\'t process your request at the moment.',
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }
  };

  return (
    <View style={styles.container}>
    
        <FlatList
          data={messages}
          renderItem={({ item }) => (
            <View style={styles.messageContainer}>
              <Text style={item.sender === 'user' ? styles.userMessage : styles.geminiMessage}>
                {item.text}
              </Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
 
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder="Type a message"
        />
        <Button title="Send" onPress={handleSendMessage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  messagesContainer: {
    flex: 1,
    marginBottom: 16,
  },
  messageContainer: {
    marginBottom: 8,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#e1e1e1',
    padding: 8,
    borderRadius: 10,
    maxWidth: '80%',
  },
  geminiMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#f1f1f1',
    padding: 8,
    borderRadius: 10,
    maxWidth: '80%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 10,
    padding: 8,
    marginRight: 8,
  },
});

export default ChatBox;
