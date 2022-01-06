---
layout: default
title: home
permalink: /repo-development/
---

# developing stuff

i'm doing this all on LINUX, and if you have any sense, you'll be doing that too: though, admittedly mine is running on WSL, so it seems that even the worst of us (that's me, not you) is capable of at least a modicum of redemption.

[it's a shame about ray]({% link ray.md %})

## getting going

- [ ] fulfill the pre-requisites <sup>_they are listed below_</sup>
- [ ] get the code <sup>_that's what you're here for isn't it?_</sup>
- [ ] play around with it <sup>_there's more than just the cool website stuff_<sup>

### pre-requisites

- [ruby](https://www.ruby-lang.org/en/documentation/installation/)

  get it installed like this `sudo apt-get install ruby`

- [jekyll](https://jekyllrb.com/)
  
  do that like this `gem install bundler jekyll`

### getting the code

#### how you can get it ... <mark>(it's really easy)</mark>

1. get the source code using

    - https `git clone https://github.com/bill-richards/a-github-action-adventure`, 
    - ssh `git@github.com:bill-richards/a-github-action-adventure.git`, 
    - or github.cli `gh repo clone bill-richards/a-github-action-adventure`

   > you can also clone the repository using the IDE of your choice

2. prepare your environment

   ```cmd
   cd a-github-action-adventure/docs/

   # run this initially, and subsequently when you make changes to the Gemfile
   bundle install
   ```

3. open up the code in your ide of choice (or even in vi, notepad, whatever is your poison, you strange and bizarre individual).

   #### how you can use it ... <mark>(this is also really easy)</mark>

4. run the website using jekyll[^1]

   ```cmd
   # to run the site locally
   [sudo] bundle exec jekyll serve --livereload
   ```

### how the code is organised

| what do you want to look at | where you should look | | | |
|:-|:-|
| github _actions_ | `.github/actions` |
| github _workflows_ | `.github/workflows` |
| all website site files | `docs/`|
| website-wide properties (_Site Title_, for example) | `docs/_config.yml`|

#### what content can you add?

- [x] html / dhtml
- [x] javaScript
- [x] markdown
- [x] actions
- [x] workflows

[it's a shame about ray though]({% link ray.md %})

## why would you want to make changes to the code?

 [^1]: you do not need to invoke jekyll on the server; it will be invoked every time a change is made to the containing repository.