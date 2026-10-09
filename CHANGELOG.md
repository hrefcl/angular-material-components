# Changelog
All notable changes to this library will be documented in this file.

## [22.0.0] - 2026-10-09
### Changed
- Updated to Angular 22 (`@hrefcl/datetime-picker` and `@hrefcl/moment-adapter`)
- Updated peer dependencies to support @angular/* ^22.0.0
- Updated @angular/cdk and @angular/material to ~22.2.2, ng-packagr to ^22.2.4
- Updated TypeScript to ~6.0.3: `strict: false` set explicitly (TS 6 enables it by default) and `baseUrl` removed
  in favour of relative `paths` (deprecated in TS 6)
- Removed `extendedDiagnostics` where `ng update` left it next to `strictTemplates: false` (NG4003)
- `angular.json` uses npm as package manager (the repo already ships `package-lock.json`)

### Known issues
- `@hrefcl/color-picker` (last published 19.0.0) and the demo app do not build; not part of this release

## [21.0.0] - 2026-01-04
### Changed
- Updated to Angular 21
- Updated peer dependencies to support @angular/* ^21.0.0
- Updated @angular/cdk to ^21.0.0
- Updated @angular/material to ^21.0.0
- Updated ng-packagr to ^21.0.0
- Updated TypeScript to ~5.9.0

## [19.0.0] - 2024-12-01
### Changed
- Updated to Angular 19
- Updated peer dependencies to support @angular/* ^19.0.0

## [2.0.0] - 2019-03-23
### Fixed
- Fix bugs ([#13](https://github.com/hrefcl/ngx-mat-datetime-picker/issues/13), [#20](https://github.com/hrefcl/ngx-mat-datetime-picker/issues/20), [#22](https://github.com/hrefcl/ngx-mat-datetime-picker/issues/22, [#37](https://github.com/hrefcl/ngx-mat-datetime-picker/issues/37), [#38](https://github.com/hrefcl/ngx-mat-datetime-picker/issues/38), [#39](https://github.com/hrefcl/ngx-mat-datetime-picker/issues/39)).