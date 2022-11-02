import React from 'react';

import { FlatList, View } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoriesGridTail from '../components/CategoriesGridTail';

const renderCategoryItem = (itemData) => {
  const { title, color } = itemData?.item;
  return <CategoriesGridTail title={title} color={color}/>
}

const CategoriesScreen = () => {
  return (
    <View>
      <FlatList data={CATEGORIES} renderItem={renderCategoryItem} numColumns={2} />
    </View>
  );
};

export default CategoriesScreen;
