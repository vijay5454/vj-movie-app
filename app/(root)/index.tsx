import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchMovies } from "@/services/api";
import { useFetch } from "@/services/useFetch";
import { Link, useRouter } from "expo-router";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from "react-native";

export default function Home() {
  const router = useRouter();
  const {
    data: movies,
    loading: movieLoading,
    error: movieError,
  } = useFetch<Movie[]>(() => fetchMovies({ query: "" }));
  return (
    <View className="bg-primary flex-1">
      <Image source={images.bg} className="absolute z-0 w-full" />
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        <Image source={icons.logo} className="w-12 h-12 mx-auto mt-20 mb-5" />
        {movieLoading ? (
          <ActivityIndicator
            size="large"
            color="#0000FF"
            className="mt-10 self-center"
          />
        ) : movieError ? (
          <Text className="text-lg text-white">{movieError.message}</Text>
        ) : (
          <View className="flex-1 mt-5">
            {/* <SearchBar
              onPress={() => {
                router.push("/search");
              }}
              placeholder="Search a movie"
            /> */}
            <>
              <Text className="text-lg text-white font-bold mt-5 mb-3">
                Latest Movies
              </Text>
              <FlatList
                data={movies}
                renderItem={({ item }) => <MovieCard {...item} />}
                keyExtractor={(item) => item.id.toString()}
                numColumns={3}
                columnWrapperStyle={{
                  justifyContent: "flex-start",
                  paddingRight: 5,
                  gap: 20,
                  marginBottom: 10,
                }}
                className="mt-2 pb-32"
                scrollEnabled={false}
              />
            </>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
