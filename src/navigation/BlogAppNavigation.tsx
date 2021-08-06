import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  NavigationContainer,
  NavigationProp,
  RouteProp,
} from '@react-navigation/native';
//Screens
import BlogScreen from '../screens/BlogScreen';
import DetailsScreen from '../screens/DetailsScreen';

export enum BlogStackScreenTypes {
  Blog = 'Blog',
  Details = 'Details',
}

type BlogStackParamsList = {
  [BlogStackScreenTypes.Blog]: undefined;
  [BlogStackScreenTypes.Details]: {
    renderData: string;
    imageUrl: string;
  };
};

export type DetailsScreenRouteProp = RouteProp<
  BlogStackParamsList,
  BlogStackScreenTypes.Details
>;

export type DetailsScreenNavigationProp = NavigationProp<
  BlogStackParamsList,
  BlogStackScreenTypes.Details
>;

export type DetailsProps = {
  route: DetailsScreenRouteProp;
  navigation: DetailsScreenNavigationProp;
};

const Stack = createStackNavigator<BlogStackParamsList>();

const BlogStackScreenNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={BlogStackScreenTypes.Blog}
        component={BlogScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={BlogStackScreenTypes.Details}
        component={DetailsScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <BlogStackScreenNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
