let Plugin;
try { Plugin = require("obsidian").Plugin; } catch (e) { Plugin = class {}; }

// 커서 앞 텍스트가 "[] " (들여쓰기/리스트 마커 허용) 면 "- [ ] " 로 바꿀 문자열, 아니면 null.
function toCheckbox(before) {
  const m = before.match(/^(\s*)(?:([-*+]) )?\[\] $/);
  return m ? `${m[1]}${m[2] || "-"} [ ] ` : null;
}

class BracketToCheckbox extends Plugin {
  onload() {
    this.registerEvent(this.app.workspace.on("editor-change", (editor) => {
      const cur = editor.getCursor();
      const before = editor.getLine(cur.line).slice(0, cur.ch);
      const replacement = toCheckbox(before);
      if (replacement === null) return;
      editor.replaceRange(replacement, { line: cur.line, ch: 0 }, { line: cur.line, ch: cur.ch });
      editor.setCursor({ line: cur.line, ch: replacement.length });
    }));
  }
}

module.exports = BracketToCheckbox;
module.exports.toCheckbox = toCheckbox;
