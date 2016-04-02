import React, { Navigator, Platform, BackAndroid } from 'react-native';

export const THEME_COLOR = {
  DARK_GREY: '#414143',
  DARKER_GREY: '#2D2A2C',
  LIGHT_GREY: '#939598',
  LIGHT_WHITE: '#ffffff',
  MIDDLE_WHITE: '#f3f3f3',
  DARK_WHITE: '#e6e8e9',
  WHITE_GREEN: '#f7f8f2',
  LIGHT_GREEN: '#81C6C2',
  MIDDLE_GREEN: '#7FC6C2',
  DARK_GREEN: '#24b1a6'
};

export const FONT = (Platform.OS === 'android') ?  'segoeui' : 'Segoe UI';
