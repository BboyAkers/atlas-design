# Atlas (CSS) tech plan

## Links

- [Current version of tokens](https://www.figma.com/proto/03HGueCJEx4tyZd3Rhfw5B/DevRel-Design-System?node-id=268%3A343&viewport=1143%2C-507%2C0.08135364204645157&scaling=scale-down-width)
- [Colors](https://www.figma.com/file/6ZQIcp2AS8022uU96v0xx4/ATLAS---COLOR?node-id=0%3A1)

## Task list

👨‍💻 Constitutes a developer task
💭 Pondering, not ready, but input welcome
⚜ Group or PM task
🌌 Work item needs to be made

- fill out all Open Source related files ⚜
  - update project README.md ⚜
  - 👨‍💻 write initial setup steps
  - 👨‍💻 write steps for inclusion in a project
  - 👨‍💻 update css folder README.md
  - ⚜ review and update CODE_OF_CONDUCT.md (group task / PM task?)
- 👨‍💻 add monorepo related files
  - add top level index file scss in /css
  - add top level package.json and init monorepo
- 👨‍💻 implment changesets [changesets](https://github.com/atlassian/changesets)
  - consider whether or not we should try to introduce some validation
  - write directions for how to use this
- implement tokens (each direct sub list item is a dev task)
  - 👨‍💻 color tokens
    - convert tokens to hsla (pending dropping IE theming confirmation)
    - raw colors in palette.scss
    - themed colors in color-themes.scss
  - 👨‍💻 spacing tokens
    - 💭 Since docs-ui has spacing atomics already, which are derived from variables this issue is the most dangerous
    - 💭 Will likely require an organized migration of class in docs-ui for those that will generate atomics.
  - 👨‍💻 typography, font-size tokens
  - 👨‍💻 depth/shadow tokens
  - 👨‍💻 z-index tokens
  - 👨‍💻 write tokens readme
  - 👨‍💻🌌 audit misc tokens and add if necessary
    - text-direction, letter spacing, transition duration,
  - 👨‍💻🌌 ensure tokens are also consumable as json
- 👨‍💻 implement code formatting and linting
  - requirements:
    - code format on save
    - fast via cli
    - pre-commit hook w/husky
  - proposed combination: prettier and stylelint combo, favoring airbnb stylelint presets
- 👨‍💻 implment mixins folder
  - first move media query mixins
  - wait until we need a mixin before moving something else
  - catalog shared and shareable mixins from docs-ui
- implement Core folder (each sub item is a dev task) 🌟🌟🌟Here is where you left off.🌟⭐⭐
  - 👨‍💻 resets (normalize and minireset + custom?)
  - 👨‍💻 create css custom properties for theme colors
  - 👨‍💻 implement font stack
    - no font face rules
    - just native font family (from github / bulma)
    - this will be overridden downstream
  - 👨‍💻 implement focus styling (focus-visible) 💭
    - escape hatch, which can toggle :focus-visible, rather than the polyfill (.focus-visible)
  - 👨‍💻 implement a css build for prototyping 💭
    - should include a font face?
- devops setup
  - branch policies
    - can we get a design and dev to both approve
    - protect main from pushes
  - 💭 number of required approvers for a PR?
  - 👨‍💻 github actions on pull_request open
    - lint (to ensure prepush cannot be avoided and files are in sync)
  - 👨‍💻💭 release workflow
    - tag and publish on pr to specific branch?
- implement Atomics folder (each sub item is a dev task)
  - 👨‍💻 spacing atomic classes
  - 👨‍💻 depth atomic classes
  - 👨‍💻 typography atomic classes
    - This task will require some careful consideration of the existing class helpers in docs-ui, especially if we standardize on has-
  - 👨‍💻 color atomic classes
  - 💭 standardize on `has` (or `at`? or `atlas`?), with customizable prefix with `!default`.
  - 💭 flex atomics
  - 💭 grid atomics
- create components folder
  - create components folder readme and index file
  - Will we be implementing any components as part of this feature 💭
    - 👨‍💻 columns
    - 👨‍💻 nav-bar?
    - 👨‍💻 container?
    - 💭 list of current components, create queue for review of current?
    - 💭 what will we need to build the site?
- 👨‍💻 plugins (top level folder)
  - this folder contains postcss plugins
  - how are plugins structured? 💭
  - each plugin is a package
  - all live in packages folder
  - implment post css plugin
  - move theme fallback plugin 👨‍💻

## Folders in /css

The majority of this work will be contained within the /css folder.

### Src

Each folder has an index file and a README that explains the nature of the folder. See below.

Proposed initial folder structure.

```txt
css
└───src
    ├───tokens
    ├───mixins
    ├───core
    ├───atomics
    └───components
```

#### Tokens

- No output
- Shared variables
- Colors
- Typography

#### Mixins

- No output
- Depends on tokens
- Contains shared mixins and functions

#### Core

- output producing
- reset (normalize / minireset)
- font stack
- css custom properties
- theming
- no classes, except theme

#### Atomics

- output producing
- single classes that have a very targeted effect
- generally 1 effect - 1 css property
  - with the exception outline color and backgrounds (for focus)
- naming should match property names and values as much as possible
- standardize on `has` or impose new prefix

#### Components

- output producing
- file names should match the class of the component
- top level classes per file: 1

## Resources and links

- Token interop
  - [5t3ph/a11y-color-tokens: Generate accessible UI colors from your base color tokens](https://github.com/5t3ph/a11y-color-tokens)
  - [Theo](https://github.com/salesforce-ux/theo)
  - [Diez](https://github.com/diez/diez)
  - [scss-to-json](https://www.npmjs.com/package/scss-to-json)
