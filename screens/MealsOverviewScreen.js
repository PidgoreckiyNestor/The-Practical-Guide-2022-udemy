import React, { useCallback, useMemo } from 'react';

import { Text, View, StyleSheet, FlatList } from 'react-native';
import { MEALS } from '../data/dummy-data';

const MealsOverviewScreen = ({ route }) => {
  const { params } = route;
  const { categoryId } = params;

  const displayedMeals = useMemo(
    () => MEALS.filter((mealItem) => {
      return mealItem.categoryIds.indexOf(categoryId) >= 0;
    }),
    [categoryId],
  );

  const renderMealItem = (itemData) => {
    console.log(itemData);
    const { title } = itemData.item;
    return (
      <View>
        <Text>
          {title}
        </Text>
      </View>);
  };

  return (
    <View style={styles.container}>
      <FlatList data={displayedMeals} renderItem={renderMealItem}/>
    </View>
  );
};

export default MealsOverviewScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
