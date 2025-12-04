<!-- markdownlint-disable -->
# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [v0.1.3] - 2025-12-14

### Added
- Add rollup as dev dependency (how was this missing?)

## [v0.1.2] - 2025-12-04

### Fixed
- Update to correctly use `scopes` instead of `scope` in importmaps

## [v0.1.1] - 2025-04-02

### Fixed
- Use own `escape()` since nunjucks is abandoned

### Changed
- Update dependencies and config

## [v0.1.0] - 2023-07-04

### Changed
- Update to node 20
- Update GH Action for npm publish
- Misc package version updates

## [v0.0.6] - 2023-06-10

### Added
- Add dev & peer dependencies

### Fixed
- `resolve_specifier` only checks importmap for bare specifiers
- `sri` now includes the algorithm prefix before the hash

## [v0.0.5] - 2023-06-10

### Fixed
- Add missing `prepare` script to build on publish

## [v0.0.4] - 2023-06-10

### Added
- Install `@shgysk8zer0/npm-utils`

## [v0.0.3] - 2023-06-10

### Added
- Install `@shgysk8zer0/js-utils`

### Removed
- Uninstall `eslint` & `rollup`

### Changed
- Rewite as es module
- Update `publish` to generate `.cjs` version
- Use module from `@shgysk8zer0/js-utils` to create most functions

## [v0.0.2] - 2023-05-21

### Fixed
- Fix typo (?) `unjucks` -> `nunjucks`

## [v0.0.1] - 2023-05-21
Initial Release
