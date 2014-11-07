### Version 1.0.0 - XX XX, 2014

- **Form** - Date field has been removed, use a ``ui icon input`` with a ``calendar icon`` instead
- **Input** - Labeled inputs now have ``corner`` ``left`` and ``top`` labels. Any labeled inputs must now be converted to ``corner labeled input`` to maintain default position in ``0.x``
- **Dropdown** - Many new content types now work inside dropdowns, headers, dividers, images, inputs, labels and more
- **Form** - Inputs now use 1em font size and correctly match selection dropdown height

### Version 0.15.0 - Mar 14, 2014

- **Form** - Forms, Dropdowns, and Inputs now have matching padding size, and use 1em font size to appear same size as surrounding text
- **Input** - Fixes slight error in corner label rounding **Thanks MohammadYounes**
- **Checkbox** - Checkboxes can now have multiple inputs inside, for use with .NET and other languages that insert their own hidden inputs

### Version 0.13.1- Feb 28, 2014

- **Input** - Fixes ui input to inherit form sizing

### Version 0.13.0 - Feb 20, 2014

- **Label** - Corner labels now are coupled to have rounded edges with components with rounded edges like input
- **Form Validation** - Form validation now rechecks on all form change events, not just input change

### Version 0.12.4 - Jan 29, 2014

- **Input** - Fixes ``ui buttons`` to work inside an ``ui action input`` **Thanks MohammadYounes **

### Version 0.12.2 - Jan 21, 2014

- **Menu** - Slightly updates input sizes inside menus

### Version 0.12.1 - Jan 15, 2014

- **Menu** - Fixes ``action input`` to work inside menus  **thanks joltmode**

### Version 0.12.0 - Jan 06, 2014

- **Input** - Fixes input placeholder styles to work (accidental regex replace)
- **Input** - Action inputs can now be fluid
- **Form** - Fixes all validation input to be trimmed for whitespace

### Version 0.10.3 - Dec 22, 2013

- **Input** - Removes duplicate sizes

### Version 0.10.2 - Dec 13, 2013

- **Input** - Action inputs now support button groups

### Version 0.10.0 - Dec 05, 2013

- **Form Validation** - Adds two new parameters, to allow for changing of revalidation and delay on input

### Version 0.9.4 - Nov 24, 2013

- **Form** - Adds input type="url" to forms

### Version 0.9.0 - Nov 5, 2013

- **Input** - Labeled icons now have smaller corner labels

### Version 0.8.0 - Oct 25, 2013

- **Input** - Action buttons now have tactile feedback like normal buttons
- Added new examples to button and input

### Version 0.6.2 - Oct 15, 2013

- Fixes input position inside menus with no other content
- Fixes input sizing on small/large menus

### Version 0.3.2 - Oct 2, 2013

- Adds input focus/blur to modal, see Issue #124
- Fixes icon input inside a menu placement issues

### Version 0.2.5 - Sep 28, 2013

- Fixes checkbox  selector issue with multiple inputs inside a checkbox
- Fixes dropdown to now set active item to whatever hidden input field is when using action updateForm

### Version 0.1.0 - Sep 25, 2013

- Added fluid input variation