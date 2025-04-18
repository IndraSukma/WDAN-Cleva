# Changelog

## 1.1.0 (2025-04-18)

### Added

- CHANGELOG.md
- favicon.svg
- Visual Studio Code configuration files

### Changed

- Updated README.md
- Updated npm packages
- Updated compiled production files
- Manually embed specific SVGs by adding `?embed` to the source path in the HTML template

### Fixed

- Files from `node_modules/` were not being copied to `dist/` during production builds
- Files from `node_modules/` were incorrectly minified in production builds

### Removed

- Auto-embedding of SVGs under 4KB in HTML templates from Webpack config

## 1.0.0 (2025-04-06)

### Added

- Compiled production files for GitHub Pages
