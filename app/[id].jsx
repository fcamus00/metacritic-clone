import { Text, View, ActivityIndicator, Image } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";
import { useState, useEffect } from "react";

import { getGameDetails } from "../lib/service";

export default function Game() {
  const { id } = useLocalSearchParams();
  const [gameDetails, setGameDetails] = useState(null);

  useEffect(() => {
    if (id) {
      getGameDetails(id).then((gameDetails) => setGameDetails(gameDetails));
    }
  }, [id])

  return (
    <View className="flex-1 justify-center items-center">
      {gameDetails === null ?
        <ActivityIndicator size={'large'}/> :
        <>
          <Text className="text-white font-bold mb-8 text-2xl">{gameDetails.title}</Text>
          <Image source={{ uri: gameDetails.img }} style={{ width: 210, height: 320 }}/>
          <Text className="text-white text-white/90 mb-4">{gameDetails.description}</Text>
          <Link href='/' className="text-blue-500 text-lg">Back</Link>
        </>
      }
    </View>
  );
}