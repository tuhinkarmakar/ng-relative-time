# ng-relative-time [![npm version](https://badge.fury.io/js/%40tuhinkarmakar%2Frelative-time.svg)](https://badge.fury.io/js/%40tuhinkarmakar%2Frelative-time)

A simple relative time formatter for Angular. Uses bleeding-edge formatting APIs for headache-free internationalization.

## Table of Contents
* [Features](#features)
* [Installation](#installation)
* [Usage](#usage)
* [Browser Support](#browser-support)
* [Task List](#task-list)
* [Contributing](#contributing)

## Features
* **Internationalization:** Formats strings using the browser's locale. Uses built-in browser APIs for internationalization. No setup required. The heavy-lifting is done by the browser.
* **Time Travelling Formatter:** The formatter works with both past and future timestamps.

## Installation
Run `npm i @tuhinkarmakar/relative-time` to install library into your project.

## Usage
1. First import the `RelativeTimeModule` in your _root_ module.
```typescript
import { BrowserModule } from "@angular/platform-browser"
import { NgModule } from "@angular/core"
import { RelativeTimeModule } from "@tuhinkarmakar/relative-time"   // <-- Import the module like this

import { AppComponent } from "./app.component"

@NgModule({
    declarations: [AppComponent],
    imports:      [BrowserModule, RelativeTimeModule],    // <-- Add it to the imports array
    providers:    [],
    bootstrap:    [AppComponent],
})
export class AppModule {}
```
2. Use the `relativeTime` pipe with a datetime string accepted by the `Date()` constructor.
See [Date.parse() MDN page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#Date_Time_String_Format) for supported formats.
```html
{{ timestamp | relativeTime }} // Output: yesterday / tomorrow / 5 seconds ago / in 5 months etc.
```

## Browser Support
Since the library uses `Intl.RelativeTimeFormat`, it only works on **Google Chrome 71+** and **Mozilla Firefox 65+**.
Browser support will get better as more vendors start implmenting the proposal.

See [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RelativeTimeFormat#Browser_compatibility) MDN page for details.

## Task List
- [ ] Add supoort for [Schemantics](https://angular.io/guide/schematics)
- [ ] Add a declaration file for `Intl.RelativeTimeFormat`

## Contributing
Report bugs and share enhancement ideas [here](https://github.com/tuhinkarmakar/ng-relative-time/issues). PRs are also welcome.
