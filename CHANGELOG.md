# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0) and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.5] - 2022-01-31

### Added

-   A site build start message in the build script.
-   A 'add label/topic' message in `index.adoc`.

### Changed

-   The footer's alignment. It is now centered rather than being left aligned.
-   The build script completion message.

## [0.1.4] - 2021-12-29

### Added

-   An `alt` attribute and a fixed width and height to the image in the 'Adding Content' sub-section in `index.adoc`.

### Changed

-   The Highlight.js stylesheet.
    -   _Asciidoctor Jet_ now uses a [custom Highlight.js library](https://docs.asciidoctor.org/asciidoctor/latest/syntax-highlighting/highlightjs/#use-a-custom-highlight-js-library), which is a combination of the [Highlight.js's GitHub Light and Dark themes](src/static/highlight/styles/github-light-dark.min.css).

### Fixed

-   The broken workflow link in `index.adoc`.

## [0.1.3] - 2021-12-29

### Added

-   A line in `index.adoc` on the **existing** image lazy loading feature.
    -   This feature existed since v0.1.0, but was not documented.
-   The NPM package `serve` and the Python module `http.server` to the 'Serving the Site Locally' sub-section.
-   A [`clean: true` option](https://github.com/marketplace/actions/deploy-to-github-pages#:~:text=No-,clean,-You%20can%20use) in the `build-deploy-website.yaml` workflow Deploy job.
    -   `clean` is `true` by default, so this addition is just to explicitly state that the feature is enabled.
-   A link to the Changelog in `index.adoc`.

### Fixed

-   The footer text colour in light mode. (Issue [#5](https://github.com/HarshKapadia2/asciidoctor-jet/issues/5))
-   The 'no language' Highlight.js console warning for the code block in the 'File Structure' section.

### Changed

-   The link to _Asciidoctor Jet_ in the footer (`docinfo-footer.html`) to the template itself rather than the GitHub repo.
-   The link to contact the maintainer in `index.adoc`.

### Removed

-   The `:highlightjs-languages:` document attribute because the required `shell` language is already included in the base version.
-   The [VS Code Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) from the 'Serving the Site Locally' sub-section due to issues with the service worker.

## [0.1.2] - 2021-12-26

### Added

-   The file structure of the `src` directory to `index.adoc` and made corresponding changes.

### Changed

-   The version of the service worker to match the version of the website.

## [0.1.1] - 2021-12-25

### Fixed

-   The GitHub Actions workflow now downloads the missing `rsync` package [required by the Deploy Action](https://github.com/marketplace/actions/deploy-to-github-pages#using-a-container-).

## [0.1.0] - 2021-12-25

### Added

-   `index.adoc` and other `.adoc` files for the website content.
-   A buildscript to build the Asciidoctor site.
-   A service worker, webmanifest and icons to convert the site to a PWA.
-   A 'back to top' button.
-   A theme switcher.
-   A `robots.txt` file.
-   Images for the demo site.
-   A GitHub Actions workflow to build the site (for PRs) and to build and deploy the site to GitHub Pages (on merges and pushes).
