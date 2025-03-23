import {
  View,
  Text,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import SearchBar from "@/components/SearchBar";
import { fetchMovies } from "@/services/api";
import MovieCard from "@/components/MovieCard";
import { useFetch } from "@/services/useFetch";

const search = () => {
  let timeout: NodeJS.Timeout;
  const [keyword, setKeyword] = useState("");
  const {
    data: movies,
    error: movieError,
    loading: movieLoading,
    refetch: movieLoad,
    reset,
  } = useFetch(() => fetchMovies({ query: keyword }));
  const handleTextChange = (text: string) => {
    setKeyword(text);
    clearTimeout(timeout);
    timeout = setTimeout(async () => {
      if (text.trim()) {
        await movieLoad();
      }
      if (!text) {
        reset();
      }
    }, 1000);
  };
  return (
    <View className="bg-primary flex-1 px-5">
      <View className="mt-20 mb-2">
        <SearchBar
          placeholder="Search"
          onChange={handleTextChange}
          keyword={keyword}
        />
      </View>
      <ScrollView>
        {movieLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          movies && (
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
          )
        )}
      </ScrollView>
    </View>
  );
};

export default search;
