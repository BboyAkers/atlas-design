# @microsoft/atlas-css

## 3.9.0

### Minor Changes

- 2e4d5fb: Add checkbox component.
- 21a6973: Add width Atomic classes and relevant documentation.

### Patch Changes

- 6ab0c3e: Details bare element box-sizing bugfix.

## 3.8.2

### Patch Changes

- 43b3463: Update bare-element styling on details > \* to be more specific. Previous details box sizing fix was not being applied.

## 3.8.1

### Patch Changes

- ffe7c88: Add small border to .popover-content, equivalent to .border class.

## 3.8.0

### Minor Changes

- fe35d1b: Use logical properties under the hood in spacing Atomics.
- f631ec0: Direction related position atomics (i.e right-0, top-0, etc) use logical properties under the hood.
- 2e5a68a: update core folder to include a bare-elements.scss file for styling bare elements. Include chromium bugfix for <details> box sizing lack of inheritance.
- a42f4b7: Convert existing components to use logical properties.

## 3.7.0

### Minor Changes

- b11b25d: Add horizontal spacing atomics that target margin: auto. Ex. .margin-inline-auto, .margin-left-auto-tablet.
- 744945d: Add overflow related Atomic classes.
- 6b6cf9d: Add .list-style-none atomic class for reseting lists.
- 4b6dc4a: Update breadcrumbs component to allow for an optional initial slash.
- 744945d: Add .scroll-<vertical|horizontal> components and relevant documentation.

## 3.6.0

### Minor Changes

- 775bfd7: Add flex-wrap-nowrap and flex-wrap-nowrap-tablet Atomics.
- 775bfd7: Add flex-direction-row(-tablet) to Atomics to allow for screensize specific layout shifts with flex Atomics only.
- 4558b41: Include new md option for specifying border. Update border token values.
- b766e38: Added .object-fit-contain and .object-position-top in new image-related Atomics file (/src/atomics/image.scss)

### Patch Changes

- f62359a: Remove atlas dotcss resolver for css dependencies with .css in the name of the npm package. Instead include those dependencies directly as scss files.
- 9b49c14: Update dependencies.

## 3.5.0

### Minor Changes

- a180785: Extend font size atomics with tablet-specific classes

## 3.4.0

### Minor Changes

- 8f87caa: Add popover component and relevant documentation

## 3.3.0

### Minor Changes

- 4582928: Add print media query mixin.
- f1e9851: Add breadcrumb component and relevant documentation

## 3.2.0

### Minor Changes

- a0536cc: Update widescreen breakpoint to 1800px.
- 0ecbae0: Add .line-clamp-<n> classes to Atomics.

### Patch Changes

- bbe6f20: Updating the box-shadow dark and hc themes colors values to match the light theme

## 3.1.1

### Patch Changes

- 54ea0dd: add min-height to control & remove height auto from .button to fix icon button height

## 3.1.0

### Minor Changes

- 783d23a: Add a -lg modifier on border. Add ability to modify standard border color with semantic colors.

### Patch Changes

- 6a0de3b: .button has text-decoration none to ensure no underline on anchor elements.
- 7455111: update .button to remove white-space: nowrap and add height: auto to ensure text wrap

## 3.0.0

### Major Changes

- 65749fb: Update font-size atomics to two letter t-shirt size convention.

## 2.0.0

### Major Changes

- 0f8102a: Adjust nomenclature pattern for sizes in Atomics and Button component. s -> sm, m -> md, l -> lg.

### Patch Changes

- 085fdbe: Update dependencies.

## 1.3.0

### Minor Changes

- 62b4864: Add explicit combination for .button.button-clear and .border, which allows for flexible button colors by using currentColor.

### Patch Changes

- 1998f3f: Ensure inner focus outline offset matches outline width.
- 4dad0be: Update .buttons subclasses to follow component naming conventions.
- e9c3ca9: Normalized scss imports

## 1.2.0

### Minor Changes

- 54ff1db: Add black and white static color classes for text and background.

## 1.1.0

### Minor Changes

- 8950443: Add sticky to positions. Makes class .position-sticky available.

### Patch Changes

- 3d1df51: Move the .buttons component to components folder.

## 1.0.1

### Patch Changes

- 9c7f501: Responsive font size rule generator can include important.
- a67a553: Ignore stylelint within responsive font size function.

## 1.0.0

### Major Changes

- 9b277cb: Upgrade to Node 16.6 and replace sass-extract with sass-export.

### Minor Changes

- 062f640: Replace responsive font sizing (package:rfs) dependency with clamp based solution.

## 0.13.0

### Minor Changes

- 17d007f: Add Button component.

### Patch Changes

- 17d007f: Modify success:base and danger:base and danger:invert on dark theme.

## 0.12.0

### Minor Changes

- 0772431: Add table component.

### Patch Changes

- 8a29033: Modify secondary background color so as not to conflict with -medium background on dark theme.
- 1aa4634: Upgrade Parcel deps.

## 0.11.0

### Minor Changes

- c3ada0a: Add xxs size to spacing tokens and atomics.

### Patch Changes

- b0dc574: Adjust spacing output based on specificity.
- 467d212: Updating colors atomics output order.
- f0faf47: Update inline code color on dark and high contrast.
- 329557f: Updating position and display atomics output order.

## 0.10.1

### Patch Changes

- 2c0e154: .border-high-contrast(-hover) needs !important.

## 0.10.0

### Minor Changes

- c9dfa1f: Add flex responsive class
- 00e85c4: Add position atomic classes.

### Patch Changes

- 2e1de30: Adding font-family helper classes.

## 0.9.0

### Minor Changes

- 5e65be7: Add border tokens and atomics.

## 0.8.2

### Patch Changes

- 2ec32c2: Bugfix: rfs is a normal dependency.
- d9631db: Update success green on dark theme.

## 0.8.1

### Patch Changes

- 39bb47a: Fix hyperlink variable css custom prop.

## 0.8.0

### Minor Changes

- 92ad4d1: Adding new hyperlink value to theme.

## 0.7.2

### Patch Changes

- bcad59b: Update color values for success and info base to hit contrast requirements for dark theme.

## 0.7.1

### Patch Changes

- 14cf4ef: Patch change to remove code block and move to design system site styles. Keeping at patch because we're not at v1 yet.

## 0.7.0

### Minor Changes

- 62d8d0d: Add markdown element for bare article styles.
- 71996af: Add element spacing tokens.

## 0.6.2

### Patch Changes

- dcf0d05: Condensing available background colors to body, body-medium, alternate, and alternate medium.

## 0.6.1

### Patch Changes

- 1611f76: Fix issue where body-background-dark had the incorrect value on dark theme.

## 0.6.0

### Minor Changes

- b9a9896: Renaming animation token file

## 0.5.0

### Minor Changes

- 89c2c1e: Implement a token build using sass-extract. Outputs tokens.json in the dist folder.
- aa29142: Adds a prepublish script for css and tokens.

### Patch Changes

- 2d30074: Adding !default flag to focus-visible-use-polyfill.

## 0.4.0

### Minor Changes

- db3c4b7: Add spacing tokens and classes
- 020872c: Add typography tokens
- 31df837: Add Flex Atomic
- 0abb010: Add color atomic classes
- 3c0a646: Add animations, direction, focus, layout, and radius tokens.
- 19d2891: Add Shadow Atomic
- 0a78aca: Adding scheme tokens
- fa12e35: Add theme related custom property to /core.
- 02a8241: "Add default focus styles"
- 689c26f: Add Typography classes
- a6911bb: Add font stack"

### Patch Changes

- fda50fd: Fix breakpoint names.
- 2454cba: Changing Color pallette value from HSLA to Hex
- 549c1a1: Add component folder

## 0.3.0

### Minor Changes

- 65640d8: Add core folder. Import normalize and minireset into the core folder.
- 06e8980: Add token values for breakpoints. Create the mixins folder and use tokens to as basis for media query mixins.
- 8f8a97c: Adding z-index
- 2191e70: Adding color palette and theme map.
- 2e375cc: Revamp breakpoint variable names.
- b56b715: Adding tokens for box shadow.

### Patch Changes

- 0627ee4: Adding prettier code formatting in combination with stylelint. AirBnb lint presents provide the base, and stylelint-config-prettier disables rules that may conflict with prettier.
- 8203c36: Implement Dart Sass build and CI.
- a66afda: Add CODEOWNERS file and GitHub pull request template.

## 0.2.0

### Minor Changes

- Preliminary scaffolding work. Add index.scss and tokens folder. Update README files.

## 0.0.2

### Patch Changes

- Begin using changesets in the project.
