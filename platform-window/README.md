# Custom Window 

This example module showcases an semi-opinionated custom window implementation based on the commonalities derived from many OpenFin customer use cases. For those familiar with traditional OpenFin concepts, the paradigm shift should be a quick transition from traditional OpenFin Application architecture to a Platform API based Application

## Code Structure

```
├── index.html
├── src
│   ├── layout-form.js
│   ├── left-menu.js *
│   ├── main.ts
│   ├── platform-window.js *
│   ├── snapshot-form.js
│   ├── template-store.js
│   └── title-bar.js *
└── styles *
    ├── frame-styles-template.css
    ├── frame-styles.css
    └── light-theme.css
```
> Items containing a following * denote a single implementation that will be referred to through out this module.

## What we will cover

The goal of this module is to key in on the 3 main generic components that allow developers & UI/UX designers to customize the styles and fundamental behavior associated with each Platform Window.

### (1/3) Default Window Content

1. Providing a reusable feature or set of features that a Platform created window is dependant on. We do not assume that the left menu is the best approach for every use case, it happens to be an emerging pattern amongst those developing Platform applications. That being said, the main goal is to focus on the behavior of the content within the feature set and why it should be included universally.
   1. Components / Content: `left-menu.js` *
      1. You can see this leveraged by the config in `current-app-seed` where it is set as `platform.defaultWindowOptions.url` pointing to this page.
      2. A set of buttons that provide the capability demonstrating generic, navigable features for each created platform window.
      3. Each component makes use of API methods that are independent of the actual content relative only to globally required Platform API methods that can be used to interact with other aspects of the changing content within a platform.

### (2/3) Frame and behavior

Frame buttons / Default Window Content interaction

### (3/3) Custom Styles

Overriding the default frame / window styles to customize the look and feel in correspondence with an organizations design themes / schemes
