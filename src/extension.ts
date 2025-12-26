import * as vscode from "vscode";
import { protoMarkdownPlugin } from "./markdownItPlugin";

export function activate(context: vscode.ExtensionContext) {
  console.log("Proto Markdown Preview extension activated!");
  return {
    extendMarkdownIt(md: any) {
      console.log("Proto Markdown: extendMarkdownIt called");
      return md.use(protoMarkdownPlugin);
    },
  };
}

export function deactivate() {}
