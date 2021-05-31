const tokens = require('./color');

const buildPath = 'dist/';

module.exports = {
  tokens,
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath,
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables',
        },
      ],
    },
    scss: {
      transformGroup: 'scss',
      buildPath,
      files: [
        {
          destination: 'tokens.scss',
          format: 'scss/variables',
        },
      ],
    },
    less: {
      transformGroup: 'less',
      buildPath,
      files: [
        {
          destination: 'tokens.less',
          format: 'less/variables',
        },
      ],
    },
    es6: {
      transformGroup: 'js',
      buildPath,
      files: [
        {
          destination: 'tokens.es6.js',
          format: 'javascript/es6',
        },
      ],
    },
    android: {
      transformGroup: 'android',
      buildPath: `${buildPath}/android/`,
      files: [
        {
          destination: 'colors.xml',
          format: 'android/colors',
        },
      ],
    },
    ios: {
      transformGroup: 'ios',
      buildPath: `${buildPath}/ios/`,
      files: [
        {
          destination: 'TailwindColor.h',
          format: 'ios/colors.h',
          className: 'TailwindColor',
          type: 'TailwindColorName',
          filter: {
            attributes: {
              category: 'color',
            },
          },
        },
        {
          destination: 'TailwindColor.m',
          format: 'ios/colors.m',
          className: 'TailwindColor',
          type: 'TailwindColorName',
          filter: {
            attributes: {
              category: 'color',
            },
          },
        },
      ],
    },
    'ios-swift': {
      transformGroup: 'ios-swift',
      buildPath: `${buildPath}/ios-swift/`,
      files: [
        {
          destination: 'Tailwind.swift',
          format: 'ios-swift/class.swift',
          className: 'Tailwind',
          filter: {},
        },
      ],
    },
    flutter: {
      transformGroup: 'flutter',
      buildPath: `${buildPath}/flutter/`,
      files: [
        {
          destination: 'tokens.dart',
          format: 'flutter/class.dart',
          className: 'Tailwind',
        },
      ],
    },
  },
};
