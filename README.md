# Bracket to Checkbox

An Obsidian plugin. Type `[`, `]`, space at the start of a line and it becomes a
Markdown checkbox `- [ ] ` — like Notion's `[]`-then-space shortcut.

## Usage

Anywhere a line begins (optionally inside a bullet or indented), type:

```
[] 
```

It is replaced with:

```
- [ ] 
```

Works inside existing bullets (`- [] ` → `- [ ] `, keeping the marker) and at any
indent level. Text in the middle of a line (e.g. `note [] `) is left alone.

## Install

### From the community store

Settings → Community plugins → Browse → search "Bracket to Checkbox" → Install → Enable.

### Manually

Copy `main.js` and `manifest.json` into
`<vault>/.obsidian/plugins/bracket-to-checkbox/`, then enable the plugin in
Settings → Community plugins.

### Beta (BRAT)

Add this repo (`2JIHAN/bracket-to-checkbox`) in the BRAT plugin.

## Development

Plain JavaScript, no build step. `main.js` is loaded directly by Obsidian.

Run the logic self-check:

```
node test.js
```

## License

[MIT](LICENSE)
