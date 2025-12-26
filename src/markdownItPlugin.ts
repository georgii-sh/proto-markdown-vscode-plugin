/**
 * Markdown-it plugin for Proto Markdown syntax
 * Renders Proto Markdown UI components in the markdown preview
 */

import { MarkdownParser, HtmlGenerator } from "@protomarkdown/parser";

const parser = new MarkdownParser();
const htmlGenerator = new HtmlGenerator();

/**
 * Check if a code block contains Proto Markdown syntax
 */
function isProtoMarkdown(content: string): boolean {
  const indicators = [
    /^\[--/m, // Card
    /^\[workflow/m, // Workflow
    /^\[grid\s/m, // Grid
    /\s___$/m, // Text input
    /\s__\*$/m, // Password input
    /\s\|___\|$/m, // Textarea
    /\s__>\s*\[/m, // Dropdown with options
    /\s__>$/m, // Dropdown
    /\s__\[\]$/m, // Checkbox
    /\s__\(\)\s*\[/m, // Radio group
    /^\[\(.*\)\]$/m, // Default button
    /^\[.*->\s*\w+\]$/m, // Navigation button
  ];

  return indicators.some((pattern) => pattern.test(content));
}

/**
 * Render Proto Markdown content to HTML
 */
function renderProtoMarkdown(content: string): string {
  const result = parser.parse(content);
  return htmlGenerator.generate(result.nodes);
}

/**
 * Markdown-it plugin that renders Proto Markdown syntax
 */
export function protoMarkdownPlugin(md: any) {
  // Store the original fence renderer
  const originalFence =
    md.renderer.rules.fence ||
    function (tokens: any[], idx: number, options: any, env: any, self: any) {
      return self.renderToken(tokens, idx, options);
    };

  // Override fence renderer for proto/protomarkdown code blocks
  md.renderer.rules.fence = function (
    tokens: any[],
    idx: number,
    options: any,
    env: any,
    self: any
  ) {
    const token = tokens[idx];
    const info = token.info ? token.info.trim().toLowerCase() : "";
    const content = token.content;

    // Check if this is a proto markdown code block
    if (info === "proto" || info === "protomarkdown" || info === "protomd") {
      try {
        const html = renderProtoMarkdown(content);
        return `<div class="proto-markdown-preview">${html}</div>`;
      } catch (e) {
        console.error("Proto Markdown: error rendering", e);
        // Fall back to original rendering on error
        return originalFence(tokens, idx, options, env, self);
      }
    }

    // For other code blocks, use original renderer
    return originalFence(tokens, idx, options, env, self);
  };

  // Also detect proto markdown in regular fenced blocks without language tag
  // if they contain proto markdown syntax
  const originalCode =
    md.renderer.rules.code_block ||
    function (tokens: any[], idx: number, options: any, env: any, self: any) {
      return self.renderToken(tokens, idx, options);
    };

  md.renderer.rules.code_block = function (
    tokens: any[],
    idx: number,
    options: any,
    env: any,
    self: any
  ) {
    const token = tokens[idx];
    const content = token.content;

    if (isProtoMarkdown(content)) {
      try {
        const html = renderProtoMarkdown(content);
        return `<div class="proto-markdown-preview">${html}</div>`;
      } catch (e) {
        return originalCode(tokens, idx, options, env, self);
      }
    }

    return originalCode(tokens, idx, options, env, self);
  };
}
