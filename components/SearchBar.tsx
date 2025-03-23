import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import { icons } from "@/constants/icons";

interface Props {
  onPress?: () => void;
  onChange?: (text: string) => void;
  placeholder: string;
  keyword?: string;
}

const SearchBar = ({ onPress, placeholder, onChange, keyword }: Props) => {
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
      <Image source={icons.search} tintColor="#Ab8bff" />
      <TextInput
        placeholder={placeholder}
        onPress={onPress}
        onChangeText={(text) => {
          if (onChange) {
            onChange(text);
          }
        }}
        value={keyword}
        placeholderTextColor="#A8B5DB"
        className="flex-1 ml-2 text-white"
      />
    </View>
  );
};

export default SearchBar;
