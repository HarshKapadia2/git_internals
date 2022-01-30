# Contributing to _Asciidoctor Jet_

-   Please check the [issues tab](https://github.com/HarshKapadia2/asciidoctor-jet/issues) for things to work on.
-   Please [raise an issue](https://github.com/HarshKapadia2/asciidoctor-jet/issues) to request a feature/modification or for reporting a bug, if it has not already been raised.

## Tech Stack

-   Front end: Asciidoctor, HTML, CSS, JS
-   CI/CD: GitHub Actions

## Local Setup

-   Fork this repo. (Top right corner.)
-   Clone the forked repo using the [`git clone` command](https://harshkapadia2.github.io/git_basics/#_git_clone).
-   `cd` into the cloned repo directory.
-   Follow the [Getting Started guide](https://harshkapadia2.github.io/git_basics/#_getting_started) on the demo site and explore other sections to understand how the template is structured.
-   Write meaningful commit messages and include the number (#) of the issue being resolved (if any) at the end of the commit message.

    Example: `:bug: fix: Resolve 'isCorrect' function error (#0)`

    [Commit message format](https://harshkapadia2.github.io/git_basics/#_commit_messagetitle)

-   Open a Pull Request (PR).
    -   [Learn how to open a PR.](https://github.com/firstcontributions/first-contributions)
    -   Solve one issue per PR, without any extra changes.
    -   Include extra changes in a separate PR.

## Version Change Checklist

Make sure the following changes are made when releasing a new version

-   Update the [changelog](CHANGELOG.md) with the appropriate version number and changes.
    -   Refer to the [Keep a Changelog website](https://keepachangelog.com/en/1.0.0) for instructions.
-   Update the version in the [service worker](src/service-worker.js). (On line number 1.)
-   Update the version in the [index.adoc](src/index.adoc) file. (On line number 3.)
-   Create an annotated tag (`git tag -a vx.x.x -m "Release vx.x.x"`) on the latest commit of that release.

## Further Help

If any further help is needed, do not hesitate to contact the author ([Harsh Kapadia](https://harshkapadia.me)) via Twitter [@harshgkapadia](https://twitter.com/harshgkapadia), [LinkedIn](https://www.linkedin.com/in/harshgkapadia) or e-mail ([contact@harshkapadia.me](mailto:contact@harshkapadia.me)). An [issue](https://github.com/HarshKapadia2/asciidoctor-jet/issues) can be raised as well.
