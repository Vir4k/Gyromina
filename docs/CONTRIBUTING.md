# Contributing to Gyromina

First off, if you're reading this file, I assume you want to help me improve Gyromina. Thanks for doing that, I really appreciate it!

Secondly, please make sure you've read through the code of conduct under **[docs/CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md)** before contributing.

## General Notes

### If you are reporting a bug

* Check the GitHib **[issues tab](https://github.com/Lowie375/Gyromina/issues)** to see if your bug has already been reported
* If it has not been reported, create a new issue using the primary issue template under **[.github/ISSUE_TEMPLATE/bug_report.md](/.github/ISSUE_TEMPLATE/bug_report.md)**
* **If you are reporting a security vulnerability, please see the security vulnerability protocol under [**docs/SECURITY.md**](SECURITY.md)**

### If you are contributing code or patching a bug

* Open a new GitHub pull request
* Add a title that summarizes the pull request and list changes in the pull request's description
* Preferably, have code in your pull request follow Gyromina's main conventions (listed [below](#code-conventions)\)

### If you are requesting a feature/improvement

* Check the GitHib **[issues tab](https://github.com/Lowie375/Gyromina/issues)** to see if that feature/improvement has already been requested
* If it has not been requested, create a new issue using the primary feature request template under **[.github/ISSUE_TEMPLATE/feature_request.md](/.github/ISSUE_TEMPLATE/feature_request.md)**

## Code Conventions

These are some of the major conventions I've tried to follow within Gyromina's code. You should be able to get the gist of them (along with other minor conventions) once you start reading through some of the existing code.

* Indent using double spaces (soft tabs)
* Put spaces after list items and parameters (`[x, y, z]` over `[x,y,z]`)
* Put spaces around operators, except when used for math inside arguments or long calculations (`myVar = 5` over `myVar=5` and `myOtherVar += m * 9` over `myOtherVar+=m*9`, but `arr[i+2]` and `myFunc(n*5)` are okay)
* No spaces inside single line blocks (`if (foo === true) {return bar;}` over `if (foo === true) { return bar; }`)
* Add function definitions for all exported functions in the 'systemFiles' folder
* Make things look nice! Add whitespace between large segments of code and include brief comments wherever you see fit. Gyromina is an open source project, so keeping things clean and easy to read for all contributors is a must. Plus, comments help everyone (especially myself) see what certain segments of code do so that we don't end up breaking them later on.

## Crediting

If you have contributed or tested code:

* Feel free to add yourself to the list of contributors or testers in the **[package](/package.json)** file, if you'd like to
  * **Contributors**: Add your name or Discord tag to `contributors[]`, your Discord **ID** (not tag) to `contributorIDs[]`, and a link of your choice to `contributorLinks[]`, all at the same array index
  * **Testers**: Add your name or Discord tag to `testers[]` and your Discord user ID to `testerIDs[]`, both at the same array index
* Feel free to add your name to the list of contributors in the **[README](/README)** file as well
  * **Contributors**: Add your Discord tag, name, and/or GitHub username under the **Repo Contributors** heading. Feel free to link any of your names/usernames to personal websites or social profiles, as you choose. I will add an appropriate contributor marker once your contribution is pushed.
  * **Testers**: Add your Discord tag, name, and/or GitHub username under the **Helpers** heading. Feel free to link any of your names/usernames to personal websites or social profiles, as you choose. I will add an appropriate tester marker with the next repo push.
* If you do not add yourself to the package or README files, I will do that before your contributions are pushed, unless you specify otherwise.
