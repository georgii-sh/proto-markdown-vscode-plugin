# Proto Markdown Preview for VS Code

A VS Code extension that renders [Proto Markdown](https://www.protomarkdown.org) syntax in the built-in Markdown preview.

![Proto Markdown Preview](https://www.protomarkdown.org/proto-markdown-vscode-extension.png)

## Features

- 🎨 **Beautiful UI Components** - Forms, buttons, cards, and more rendered in preview
- 🌓 **Dark Mode Support** - Automatically adapts to your VS Code theme
- 🔄 **Workflow Visualization** - See multi-screen workflows with navigation indicators
- 📱 **Responsive Design** - Components scale beautifully

## Usage

Use fenced code blocks with the `proto`, `protomarkdown`, or `protomd` language identifier:

```proto
[-- Login Form
  # Welcome Back
  Email ___
  Password __*
  Remember me __[]
  [(Login)][Forgot Password]
--]
```

## Installation

### From VSIX (Local)

1. Build the extension:

   ```bash
   git clone https://github.com/georgii-sh/proto-markdown-vscode-plugin
   cd proto-markdown-vscode-plugin
   npm install
   npm run compile
   npm run package
   ```

2. Install the `.vsix` file:
   - Open VS Code
   - Press `Ctrl+Shift+P` / `Cmd+Shift+P`
   - Run "Extensions: Install from VSIX..."
   - Select the generated `.vsix` file

### From Source (Development)

1. Clone and build:

   ```bash
   git clone https://github.com/georgii-sh/proto-markdown-vscode-plugin
   cd proto-markdown-vscode-plugin
   npm install
   npm run compile
   ```

2. Press `F5` to launch Extension Development Host

## Requirements

- VS Code 1.80.0 or higher

## Related

- [Proto Markdown Documentation](https://www.protomarkdown.org/documentation)
- [@protomarkdown/parser](https://www.npmjs.com/package/@protomarkdown/parser) - Parser library

## License

Apache-2.0
