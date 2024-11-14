import { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Image, Animated, Pressable } from 'react-native';
import { Link } from 'expo-router';

import { Score } from './Score';

export function GameCard({ game }) {
  return (
    <Link asChild href={`/${game.slug}`}>
      <Pressable className="active:opacity-70border border-black active:border-white/50 mb-2 bg-gray-500/10 rounded-xl p-4">
        <View key={game.slug} className="flex-row gap-4">
          <Image source={{ uri: game.image }} style={styles.image} />
          <View className="flex-shrink">
            <Text style={styles.title} className="mb-2">{game.title}</Text>
            <Score score={game.score} maxScore={100} />
            <Text style={styles.description} className="mt-2 flex-shrink">{game.description.slice(0, 100)}...</Text>
          </View>
        </View>
        <ScrollView>
          
        </ScrollView>
      </Pressable>
    </Link>
  );
}

export function AnimatedGameCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      delay: index * 250,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <GameCard game={game} />
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    margin: 20,
    backgroundColor: 'black',
  },
  image: {
    width: 107,
    height: 158,
    borderRadius: 5,
    marginBottom: 20,
  },
  description: {
    marginTop: 20,
    color: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  score: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
  },
});
