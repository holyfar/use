set -g fish_greeting

starship init fish | source

# aliases
alias g='gitui'
alias gst='git status'
alias ga='git add'
alias ga.='git add .'
alias gaa='git add --all'
alias gc='git commit'
alias gcm='git commit -m'
alias gca='git commit --amend'
alias gac='git add --all && git commit'
alias gs='git switch'
alias gsc='git switch --create'
alias gp='git push'
alias gpf='git push --force'
alias gl='git pull'
alias glr='git pull --rebase'
alias gcl='git clone'
alias gf='git fetch'
alias gd='git diff'
alias gb='git branch'
alias gba='git branch -a'
alias gg='git log'
alias gsh='git stash'
alias gshp='git stash pop'
alias gshl='git stash list'
alias gshc='git stash clear'
alias gmc='git merge --continue'
alias gma='git merge --abort'
alias grc='git rebase --continue'
alias gra='git rebase --abort'

alias d='nr dev'
alias b='nr build'
alias s='nr start'

alias ls='lsd'
alias l='ls -1A'
alias cat='bat'

alias v='nvim'
alias o='open'
alias c='code -n'

alias python='python3'
alias nv='fnm'
# aliases end

# pnpm
set -gx PNPM_HOME "/Users/xlsama/Library/pnpm"
if not string match -q -- $PNPM_HOME $PATH
  set -gx PATH "$PNPM_HOME" $PATH
end
# pnpm end

# bun
set --export BUN_INSTALL "$HOME/.bun"
set --export PATH $BUN_INSTALL/bin $PATH
