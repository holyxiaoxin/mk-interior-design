import React, { Navigator, Platform, BackAndroid } from 'react-native';

export const IS_ANDROID = (Platform.OS === 'android');

export const THEME_COLOR = {
  DARK_GREY: '#414143',
  MIDDLE_GREY: '#6D6E71',
  DARKER_GREY: '#2D2A2C',
  LIGHT_GREY: '#939598',
  LIGHT_WHITE: '#ffffff',
  MIDDLE_WHITE: '#f3f3f3',
  DARK_WHITE: '#e6e8e9',
  DARKER_WHITE: '#d3d4d6',
  WHITE_GREEN: '#f7f8f2',
  LIGHT_GREEN: '#82C6C2',
  MIDDLE_GREEN: '#7FC6C2',
  DARK_GREEN: '#24b1a6',
  RED: '#ec7073',
};

export const FONT = IS_ANDROID ?  'segoeui' : 'Segoe UI';

export const NAVBAR_HEIGHT = 50;
export const NAVBAR_TOPBAR_HEIGHT = 20; // this is top bar for IOS
// This will return offset of navbar from top
// Can use this to calculate height of device from { Dimensions }
// TODO: check below
// Android has this navbar top of 24?
export const TOPBAR_OFFSET_HEIGHT = IS_ANDROID ?  24 : NAVBAR_TOPBAR_HEIGHT;
export const NAVBAR_OFFSET_HEIGHT = IS_ANDROID ?  NAVBAR_HEIGHT + 24 : NAVBAR_HEIGHT + NAVBAR_TOPBAR_HEIGHT;
