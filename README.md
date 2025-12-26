# Proto Markdown Preview for VS Code

A VS Code extension that renders [Proto Markdown](https://www.protomarkdown.org) syntax in the built-in Markdown preview.

![Proto Markdown Preview](https://www.protomarkdown.org/preview-screenshot.png)

## Features

- 🎨 **Beautiful UI Components** - Forms, buttons, cards, and more rendered in preview
- 🌓 **Dark Mode Support** - Automatically adapts to your VS Code theme
- 🔄 **Workflow Visualization** - See multi-screen workflows with navigation indicators
- 📱 **Responsive Design** - Components scale beautifully

## Usage

Use fenced code blocks with the `proto`, `protomarkdown`, or `protomd` language identifier:

````markdown
```proto
[-- Login Form
  # Welcome Back
  Email ___
  Password __*
  Remember me __[]
  [(Login)][Forgot Password]
--]
```
````

## Supported Syntax

### Form Fields

```proto
Email ___                              # Text input
Password __*                           # Password input
Description |___|                      # Textarea
Country __> [USA, Canada, Mexico]      # Dropdown
Remember me __[]                       # Checkbox
Gender __() [Male, Female, Other]      # Radio group
```

### Cards & Layout

```proto
[-- Card Title
  Content inside the card
--]

[grid cols-2 gap-4
  [-- Card 1 --]
  [-- Card 2 --]
]
```

### Buttons

```proto
[(Primary Button)]     # Default/filled button
[Outline Button]       # Outline button
[(Submit)][Cancel]     # Multiple buttons

# Navigation buttons (for workflows)
[(Next) -> step2]
[Back -> step1]
```

### Tables

```proto
| Name | Age | City |
|------|-----|------|
| John | 30  | NYC  |
| Jane | 25  | LA   |
```

### Text Formatting

```proto
This is *bold* text
This is _italic_ text
This is _*bold and italic*_ text
```

### Workflows

```proto
[workflow
  [screen welcome
    # Welcome
    [(Get Started) -> login]
  ]
  [screen login
    # Login
    Email ___
    Password __*
    [(Login) -> dashboard]
  ]
  [screen dashboard
    # Dashboard
    Welcome to your app!
  ]
]
```

## Installation

### From VSIX (Local)

1. Build the extension:

   ```bash
   cd vscode-extension
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
   git clone https://github.com/georgii-sh/proto-markdown-parser
   cd proto-markdown-parser/vscode-extension
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
