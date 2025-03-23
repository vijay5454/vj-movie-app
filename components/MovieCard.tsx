import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { icons } from "@/constants/icons";

const MovieCard = ({
  id,
  poster_path,
  title,
  vote_average,
  release_date,
}: Movie) => {
  return (
    <Link href={`/movies/${id}`} asChild>
      <TouchableOpacity className="w-[30%]">
        <Image
          source={{
            uri: poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : "https://placehold.co/600x400/1a1a1a/ffffff.png",
          }}
          className="w-full h-52 rounded-lg"
          resizeMode="cover"
        />
        <Text className="text-white font-bold text-sm" numberOfLines={1}>
          {title}
        </Text>
        <View className="flex-row justify-between pr-1">
          <View className="flex-row gap-x-1">
            <Image source={icons.star} className="size-4" />
            <Text className="text-white font-bold text-xs">
              {vote_average.toFixed(1)}
            </Text>
          </View>
          <Text className="text-white text-xs">
            {release_date.split("-")[0]}
          </Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;
