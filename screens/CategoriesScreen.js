import React, { useCallback } from 'react';

import { FlatList, View } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoriesGridTail from '../components/CategoriesGridTail';


const CategoriesScreen = ({navigation}) => {

  const renderCategoryItem = useCallback(
    (itemData) => {
      const { title, color } = itemData?.item;
      const pressHandler = () => {
        navigation.navigate('MealsOverview', {categoryId: itemData.item.id})
      };
      return <CategoriesGridTail onPress={pressHandler} title={title} color={color}/>;
    },
    [navigation]
  );

  return (
    <View>
      <FlatList data={CATEGORIES} renderItem={renderCategoryItem}
                numColumns={2}/>
    </View>
  );
};

export default CategoriesScreen;
