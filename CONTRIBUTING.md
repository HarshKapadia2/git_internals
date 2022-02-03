# Contributing to Git Internals

-   Please be mindful of the [Code of Conduct](CODE_OF_CONDUCT.md) while interacting or contributing!
-   Please check the [issues tab](https://github.com/HarshKapadia2/git_internals/issues) for things to work on.
-   Please [raise an issue](https://github.com/HarshKapadia2/git_internals/issues) to request a feature/modification or for reporting a mistake/bug, if it has not already been raised.

## Tech Stack

-   Front end: [Asciidoctor Jet](https://harshkapadia2.github.io/asciidoctor-jet)
-   CI/CD: GitHub Actions

> NOTE:
>
> -   This project uses a Static Site Generator called [Asciidoctor](https://asciidoctor.org).
> -   This project is a [PWA](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps).
> -   GitHub Actions has been set up on this repo, so a built web site does not have to be committed.

## Local Setup

-   Fork this repo. (Top right corner.)
-   Clone the forked repo using the [`git clone`](https://harshkapadia2.github.io/git_basics/#_git_clone) command.
-   [Install Asciidoctor](https://asciidoctor.org/#installation).
-   **Please adhere to the [file structure](#file-structure) and [language, code and syntax rules](#language-code-and-syntax) followed in this project.**
-   Testing
    -   Generate the web site in a directory called `build` in the root directory by running the command `sh build.sh` from the root directory.
        -   It is preferable to use a package like [http-server](https://www.npmjs.com/package/http-server) (`npx http-server "build"`) or [serve](https://www.npmjs.com/package/serve) (`npx serve "build"`) to host the site locally from the `build` directory.
        -   Please **do not** commit this `build` directory, as the CI process will build the site on merge.
-   Make contribution(s)

    -   Write meaningful commit messages and include the number (`#`) of the issue being resolved (if any) at the end of the commit message.

        Example: `:bug: fix: Resolve 'isCorrect' function error (#0)`

        [Commit message format](https://harshkapadia2.github.io/git_basics/#_commit_messagetitle)

-   Open a Pull Request (PR).
    -   [Learn how to open a PR](https://github.com/firstcontributions/first-contributions).
    -   Solve one issue per PR, **without any extra changes**.
    -   **Include extra changes in a separate PR.**

## File Structure

### Parsing

Asciidoctor parses files starting from `index.adoc` and follows `include::` to the **relative location** of the next file, to finally get to the file with the content.

**Example**:

This is how the content of [`git-directory.adoc`](https://github.com/HarshKapadia2/git_internals/blob/main/src/content/git-directory.adoc) is displayed:

> Check the raw file contents for the exact syntax.

-   In [`index.adoc`](https://github.com/HarshKapadia2/git_internals/blob/main/src/index.adoc):

    ```asciidoc
    include::content/git-directory.adoc[]
    ```

    👇

-   In [`content/git-directory.adoc`](https://github.com/HarshKapadia2/git_internals/blob/main/src/content/git-directory.adoc):

    ```asciidoc
    == The `.git` Directory

    // Actual content that is displayed
    ```

### Static Files

-   CSS, JS and images are located in the `src/static` directory. Add the appropriate static files to the appropriate directory.

#### Caching

-   If any static file is added, please make sure to
    -   Include it in the `cacheAssets` array in `./src/service_worker.js` as a relative path.
    -   Increment the value of the `cacheName` variable. (Example: From `v2` to `v3`.)
    -   Add it to `./src/docinfo.html` with the correct syntax if the static file needs to be linked to the final site.
-   If any static file is modified, please make sure to
    -   Increment the value of the `cacheName` variable. (Example: From `v2` to `v3`.)
-   If any static file is deleted, please make sure to
    -   Remove it from the `cacheAssets` array in `./src/service_worker.js`.
    -   Increment the value of the `cacheName` variable. (Example: From `v2` to `v3`.)
    -   Remove it from `./src/docinfo.html` if present.
-   If any static file is renamed, please make sure to
    -   Rename it in the `cacheAssets` array in `./src/service_worker.js`.
    -   Increment the value of the `cacheName` variable. (Example: From `v2` to `v3`.)
    -   Rename it in `./src/docinfo.html` if present.
-   **The `cacheName` should be updated just once per commit.**

#### Images

Images should have

-   A solid colour background. (No transparent background images.)
-   A width and height of 600px, unless that distorts the picture or makes it illegible, in which case suitable dimensions can be used.
-   An `alt` attribute describing the image in a few words.

Example:

```
image::file-name.ext[alt="image description", 600, 600, ...]
```

## Language, Code and Syntax

-   Pronouns are either omitted (preferred) or third person pronouns ('they', 'their', 'one', etc.) are used.

    **Example**:

    -   `Code should be committed frequently.` ✔️ (Preferred)
    -   `One should commit code frequently.` ✔️ (Accepted)
    -   `You should commit code frequently.` ❌ (Not accepted)

-   [Prettier](https://prettier.io) should be used to format code.

    -   The [`.prettierrc`](.prettierrc) config file can be found in the root directory.
    -   Please use the Prettier's [VS Code extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) or [CLI](https://prettier.io/docs/en/cli.html) to format code before committing.

-   The [AsciiDoc](https://marketplace.visualstudio.com/items?itemName=asciidoctor.asciidoctor-vscode) extension can be used, for syntax highlighting in `.adoc` files in VS Code.

-   [Asciidoctor syntax](https://docs.asciidoctor.org/asciidoc/latest/syntax-quick-reference) (Quick reference.)
-   Use the same syntax as used in the other files to maintain uniformity. Avoid using variations in syntax.
-   Writing in bullet points is preferable.
-   Bold, underline and italics should be used sparingly.
-   Surround single line commands or file names with a single 'back tick' (`).
-   Surround code snippets with three 'back ticks' (`\``).
-   External links should include a caret (`^`) at the end of the link text to open them in a new tab.

    **Example**:

    -   `link:https://github.com[This is a link to another site^]` (Caret at the end for external links.)
    -   `link:#_issues[This is a link to the same site]` (No caret at the end for internal links.)

-   If external links are pasted as normal links, do following to open it in a new tab

    **Example**: `link:https://github.com/HarshKapadia2/git_internals[github.com/HarshKapadia2/git_internals^]`

-   Links should have meaningful text.

    **Example**:

    -   `It can be found in the link:https://docs.github.com[official documentation^].` ✔️ (Accepted)
    -   `It can be found link:https://docs.github.com[here^].` ❌ (Not accepted)

## Further Help

If any further help is needed, do not hesitate to contact the owner ([Harsh Kapadia](https://harshkapadia.me)) via [OTC](https://ourtech.community), [Twitter](https://twitter.com/harshgkapadia), [LinkedIn](https://www.linkedin.com/in/harshgkapadia) or e-mail ([contact@harshkapadia.me](mailto:contact@harshkapadia.me)). An [issue](https://github.com/HarshKapadia2/git_internals/issues) can be raised as well.
