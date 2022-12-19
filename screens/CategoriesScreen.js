import {StyleSheet, FlatList} from 'react-native';

import {CATEGORIES} from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

export default function CategoriesScreen({navigation}) {
  function renderCategorieItem(itemData) {
    function pressHandler() {
      navigation.navigate('MealsOverview');
    }

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      key={item => item.id}
      data={CATEGORIES}
      keyExtractor={item => item.id}
      renderItem={renderCategorieItem}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({});
