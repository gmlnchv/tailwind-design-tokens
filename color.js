const colors = require('tailwindcss/colors');
const isObject = require('lodash.isobject');

const colorTokens = Object.fromEntries(
  Object.entries(colors).map(([name, color]) =>
    isObject(color)
      ? [
          name,
          Object.fromEntries(
            Object.entries(color).map(([name, color]) => [
              name,
              {
                value: color,
                attributes: {
                  category: 'color',
                },
              },
            ])
          ),
        ]
      : [
          name,
          {
            value: color,
            attributes: {
              category: 'color',
            },
          },
        ]
  )
);

module.exports = {
  tw: {
    color: colorTokens,
  },
};
