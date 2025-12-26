# Proto Markdown Test File

Open the markdown preview (Cmd+Shift+V or Ctrl+Shift+V) to see rendered components.

## Form Example

```proto
[-- User Registration
  # Create Account

  First Name ___ Last Name ___
  Email ___
  Password __*

  Country __> [USA, Canada, UK, Germany, France]

  I agree to terms __[]

  [(Sign Up)][Cancel]
--]
```

## Workflow Example

```proto
[workflow
  [screen welcome
    # Welcome!
    Get started with our app
    [(Continue) -> form]
  ]
  [screen form
    # Enter Details
    Name ___
    Email ___
    [(Submit) -> done][Back -> welcome]
  ]
  [screen done
    # Success!
    Your form was submitted.
    [Start Over -> welcome]
  ]
]
```

## Grid Layout

```proto
[grid cols-2 gap-4
  [-- Card 1
    First card content
  --]
  [-- Card 2
    Second card content
  --]
]
```

## Table Example

```proto
| Product | Price | Stock |
|---------|-------|-------|
| Widget  | $10   | 50    |
| Gadget  | $25   | 30    |
| Thing   | $5    | 100   |
```

## Text Formatting

```proto
This is *bold* text and _italic_ text.
You can also do _*bold italic*_ together.
```
