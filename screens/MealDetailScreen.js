import {StyleSheet, View, Text} from 'react-native';

export default function MealDetailScreen({route}) {
  const mealId = route.params.mealId;
  return (
    <View>
      <Text>Details Meal Screen - {mealId}</Text>
    </View>
  );
}
