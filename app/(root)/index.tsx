import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Link, useRouter } from "expo-router";
import { Image, ScrollView, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();
  return (
    <View className="bg-primary flex-1">
      <Image source={images.bg} className="absolute z-0 w-full" />
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        <Image source={icons.logo} className="w-12 h-12 mx-auto mt-20 mb-5" />
        <SearchBar
          onPress={() => {
            router.push("/search");
          }}
          placeholder="Search a movie"
        />
      </ScrollView>
    </View>
  );
}
