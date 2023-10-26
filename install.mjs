#!/usr/bin/env zx

const HOME_DIR = os.homedir()

const link_map = [
  // config
  {
    source: `${HOME_DIR}/code/use/config/fish`,
    target: `${HOME_DIR}/.config/fish`,
  },
  {
    source: `${HOME_DIR}/code/use/config/nvim`,
    target: `${HOME_DIR}/.config/nvim`,
  },
  {
    source: `${HOME_DIR}/code/use/config/omf`,
    target: `${HOME_DIR}/.config/omf`,
  },
  {
    source: `${HOME_DIR}/code/use/config/starship.toml`,
    target: `${HOME_DIR}/.config/starship.toml`,
  },
  // git
  {
    source: `${HOME_DIR}/code/use/git/.gitconfig`,
    target: `${HOME_DIR}/.gitconfig`,
  },
  {
    source: `${HOME_DIR}/code/use/git/.gitconfig_work`,
    target: `${HOME_DIR}/.gitconfig_work`,
  },
  {
    source: `${HOME_DIR}/code/use/git/.gitignore`,
    target: `${HOME_DIR}/.gitignore`,
  },
  // vscode
  {
    source: `${HOME_DIR}/code/use/vscode/settings.json`,
    target: `${HOME_DIR}/Library/Application Support/Code/User/settings.json`,
  },
  {
    source: `${HOME_DIR}/code/use/vscode/keybindings.json`,
    target: `${HOME_DIR}/Library/Application Support/Code/User/keybindings.json`,
  },
  {
    source: `${HOME_DIR}/code/use/vscode/global.code-snippets`,
    target: `${HOME_DIR}/Library/Application Support/Code/User/snippets/global.code-snippets`,
  },
]

const global_npm_pkg_list = ['@antfu/ni', 'vite']

function print(msg) {
  console.log(chalk.magenta(msg))
  console.log(
    chalk.white(
      '---------------------------------------------------------------------------------------------------------------------------',
    ),
  )
}

print('link config files')
link_map.forEach(async ({ source, target }) => {
  await $`rm -rf ${target}`
  await $`ln -s -F ${source} ${target}`
})

print('set macOS system settings')
// finder
await $`defaults write NSGlobalDomain AppleShowAllExtensions -bool true`
await $`defaults write com.apple.finder ShowPathbar -bool true`
await $`defaults write com.apple.finder _FXSortFoldersFirst -bool true`
// keyboard
await $`defaults write ApplePressAndHoldEnabled -bool false`

print('install vscode extensions')
const { recommendations } = await fs.readJson('./vscode/extensions.json')
recommendations.forEach(async name => {
  await $`code --install-extension ${name}`
})

print('install npm packages')
await $`npm set registry https://registry.npmjs.org/`
global_npm_pkg_list.forEach(async name => {
  await $`npm i -g ${name}`
})

await $`cp ./.hooks/pre-commit ./.git/hooks/`
