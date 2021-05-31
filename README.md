# tailwind-design-tokens

This package imports the Tailwind CSS [color palette](https://tailwindcss.com/docs/customizing-colors) from [`tailwindcss/colors`](https://github.com/tailwindlabs/tailwindcss/blob/master/colors.js) and exports it as design tokens in a variety of formats using [Style Dictionary](https://amzn.github.io/style-dictionary/#/).

## Supported formats

### CSS variables

_Example_

```css
:root {
  --tw-color-rose-50: #fff1f2;
  --tw-color-rose-100: #ffe4e6;
}
```

_Import_

```css
@import 'tailwind-design-tokens/tokens.css';
```

### SCSS variables

_Example_

```scss
$tw-color-rose-50: #fff1f2;
$tw-color-rose-100: #ffe4e6;
```

_Import_

```scss
@import 'tailwind-design-tokens/tokens.scss';
```

### LESS variables

_Example_

```less
@tw-color-rose-50: #fff1f2;
@tw-color-rose-100: #ffe4e6;
```

_Import_

```less
@import 'tailwind-design-tokens/tokens.less';
```

### ES6 modules

_Example_

```js
export const TwColorRose50 = '#fff1f2';
export const TwColorRose100 = '#ffe4e6';
```

_Import_

```js
import {
  TwColorRose50,
  TwColorRose100,
} from 'tailwind-design-tokens/tokens.es6.js';
```

### Android

_Example_

```xml
<resources>
  <color name="tw_color_rose_50">#fffff1f2</color>
  <color name="tw_color_rose_100">#ffffe4e6</color>
</resources>
```

### Objective-C

_Example_

```objectivec
#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>

#define TwColorRose50 [UIColor colorWithRed:1.000f green:0.945f blue:0.949f alpha:1.000f]
```

### Swift

_Example_

```swift
public class Tailwind {
  public static let twColorRose50 = UIColor(red: 1.000, green: 0.945, blue: 0.949, alpha:1)
}
```

### Dart

_Example_

```dart
class Tailwind {
  Tailwind._();

  static const twColorRose50 = Color(0xFFFFF1F2);
  static const twColorRose100 = Color(0xFFFFE4E6);
}
```
