# [_A Github Action Adventure_](https://github.com/bill-richards/a-github-action-adventure)

Check out the repository's documentation [here](https://bill-richards/a-github-action-adventure), it's a tale and one half ...

## Developing stuff

I'm doing this all on LINUX, and if you have any sense, you'll be doing that too: though, admittedly mine is running on WSL, so it seems that even the worst of us (that's me, not you) is capable of at least a modicum of redemption.

### What you'll need

- Ruby 

  get it installed like this `sudo apt-get install ruby`
- jekyll
  
  do that like this `gem install bundler jekyll`

### How you'll use it

1. Get the source code
   > did you know, that using most modern IDEs, you can also clone the repository using a Git plugin/extension/connector (usually)

```cmd
# using HTTPS
git clone https://github.com/bill-richards/a-github-action-adventure
```

```cmd
#using SSH
git@github.com:bill-richards/a-github-action-adventure.git
```

```cmd
# using Github.Cli
gh repo clone bill-richards/a-github-action-adventure
```

2. Prepare your environment

```cmd
cd a-github-action-adventure/docs/

# Run this initially, and subsequently when you make changes to the Gemfile
bundle install
```
 3. Open up the code in your IDE of choice (or even in vi, notepad, whatever is your poison, you strange and bizarre individual).

 4. Run the website using [Jekyll](https://jekyllrb.com/)

```cmd
# to run the site locally
[sudo] bundle exec jekyll serve --livereload
```

#### _**Nota bene**_

You do not need to invoke Jekyll on the server; it will be invoked every time a change is made to the containing repository.

## Don't repeat yourself (DRY)

Did I mention that you should out the repository's documentation [here](https://bill-richards/a-github-action-adventure), and also, it's a tale and one half ...

