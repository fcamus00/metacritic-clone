import { ScrollView, Text, Pressable } from "react-native";
import { Link } from "expo-router";

import { HomeIcon } from "../components/Icons";

export default function About() {
  return (
    <ScrollView>
      <Link asChild href={'/'} className='text-blue-500 text-lg mt-24'>
        <Pressable>
          <HomeIcon />
        </Pressable>
      </Link>
      <Text className="text-white font-bold mb-8 text-2xl">About</Text>
      <Text className="text-white text-white/90 mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero perferendis quibusdam ullam expedita quidem eveniet amet! Cumque eaque quam veniam aspernatur! Veniam alias cupiditate quos asperiores aliquid qui rem et.</Text>
      <Text className="text-white text-white/90 mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero perferendis quibusdam ullam expedita quidem eveniet amet! Cumque eaque quam veniam aspernatur! Veniam alias cupiditate quos asperiores aliquid qui rem et.</Text>
      <Text className="text-white text-white/90 mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero perferendis quibusdam ullam expedita quidem eveniet amet! Cumque eaque quam veniam aspernatur! Veniam alias cupiditate quos asperiores aliquid qui rem et.</Text>
    </ScrollView>
  );
}