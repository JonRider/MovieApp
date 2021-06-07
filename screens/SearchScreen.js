import React from "react";
import { useState, useEffect } from "react";
import {
  Button,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
} from "react-native";

export default function SearchScreen({ navigation, route }) {
  const [title, setTitle] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    validateForm();
  });

  function handleTitleChange(value) {
    setTitle(value);
  }

  validateForm = () => {
    if (title.length >= 2) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={handleTitleChange}
        placeholder="Movie Title"
      />
      <Button
        title="Search"
        disabled={!isFormValid}
        onPress={() => {
          navigation.navigate({
            name: "Movies",
            params: { title },
            merge: true,
          });
        }}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    minWidth: 100,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
  },
});
