# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

VS Code extension that renders Proto Markdown syntax in the built-in Markdown preview. Uses the `@protomarkdown/parser` library to parse Proto Markdown and generates styled HTML for VS Code's markdown preview.

## Build Commands

```bash
npm run build      # Bundle extension with esbuild
npm run watch      # Build with file watching
npm run compile    # TypeScript type-checking only (no emit)
npm run package    # Create .vsix package for distribution
```

## Development

Press F5 in VS Code to launch Extension Development Host for testing.

## Architecture

The extension hooks into VS Code's markdown preview system:

1. **extension.ts** - Entry point. Exports `extendMarkdownIt()` which VS Code calls to extend the markdown-it renderer with the Proto Markdown plugin.

2. **markdownItPlugin.ts** - Markdown-it plugin that:
   - Overrides the `fence` renderer to handle `proto`, `protomarkdown`, and `protomd` code blocks
   - Uses `@protomarkdown/parser` (`MarkdownParser` + `HtmlGenerator`) to convert Proto Markdown to HTML
   - Falls back to original rendering on parse errors

3. **styles/proto-markdown.css** - Styling for rendered components. Uses CSS variables for theming with automatic VS Code light/dark theme detection via `.vscode-light` and `.vscode-dark` classes.

## Key Integration Points

- `package.json` declares `markdown.markdownItPlugins: true` and includes preview styles
- Output bundled to `dist/extension.js` via esbuild
- External dependency: `vscode` module (not bundled)
