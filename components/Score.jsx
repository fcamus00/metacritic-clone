import { View, Text } from 'react-native';

export function Score({ score, maxScore }) {
  const getColors = () => {
    const percentage = (score / maxScore) * 100;
    if (percentage < 88) {
      return "bg-red-500";
    } else if (percentage < 90) {
      return "bg-yellow-500";
    } else {
      return "bg-green-500";
    }
  }

  return (
    <View className={`${getColors()} w-8 h-8 rounded-full justify-center items-center`}>
      <Text className="text-lg font-bold text-white">{score}</Text>
    </View>
  );
}