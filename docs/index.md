---
layout: default
title: home
---

# Developing stuff

I'm doing this all on LINUX, and if you have any sense, you'll be doing that too: though, admittedly mine is running on WSL, so it seems that even the worst of us (that's me, not you) is capable of at least a modicum of redemption.

### What you'll need

- Ruby 

  get it installed like this `sudo apt-get install ruby`

- jekyll
  
  do that like this `gem install bundler jekyll`

  ### How you can get it ... <mark>(it's really easy)</mark>

1. Get the source code using

    - HTTPS `git clone https://github.com/bill-richards/a-github-action-adventure`, 
    - SSH `git@github.com:bill-richards/a-github-action-adventure.git`, 
    - or Github.Cli `gh repo clone bill-richards/a-github-action-adventure`

   > you can also clone the repository using the IDE of your choice

2. Prepare your environment

   ```cmd
   cd a-github-action-adventure/docs/

   # Run this initially, and subsequently when you make changes to the Gemfile
   bundle install
   ```

3. Open up the code in your IDE of choice (or even in vi, notepad, whatever is your poison, you strange and bizarre individual).

   ### How you can use it ... <mark>(this is also really easy)</mark>

4. Run the website using [Jekyll](https://jekyllrb.com/)

   ```cmd
   # to run the site locally
   [sudo] bundle exec jekyll serve --livereload
   ```

### How you can change it ... <mark>(yep ... this is super easy too)</mark>

- If you want to make changes to the _Site Title_, for example, make that change in `docs/_config.yml`
- All of the site files live in the `docs/` directory
- You can add content using d/html, JavaScript, or Markdown
- [It's a shame about Ray]({% link about.md %})

#### _**Nota bene**_

You do not need to invoke Jekyll on the server; it will be invoked every time a change is made to the containing repository.


 