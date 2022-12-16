import {StyleSheet, FlatList} from 'react-native';

import {CATEGORIES} from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

function renderCategorieItem(itemData) {
  return (
    <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
  );
}

export default function CategoriesScreen() {
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
