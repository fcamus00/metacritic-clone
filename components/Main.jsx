import { useState, useEffect } from 'react';
import { View, FlatList, ActivityIndicator, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

import { getLatestGames } from '../lib/service';
import { AnimatedGameCard } from './GameCard';
import { Logo } from './Logo';
import { InfoCircleIcon } from './Icons';

export default function Main() {
  const insets = useSafeAreaInsets();
  const [games, setGames] = useState([]);

  useEffect(() => {
    getLatestGames().then((games) => setGames(games));
  }, [])

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <View className="flex-row justify-between items-center mb-4 mx-2">
        <View>
          <Logo />
        </View>
        <Link asChild href={'/about'} className='text-blue-500 text-lg'>
        <Pressable>
          <InfoCircleIcon />
        </Pressable>
        </Link>
      </View>
      {games.length === 0 ? (
        <ActivityIndicator size={'large'}/>
      ) : (
        <FlatList data={games} keyExtractor={(item) => item.slug} renderItem={({ item, index }) => <AnimatedGameCard game={item} index={index} />} />
      )}
    </View>
  );
}
