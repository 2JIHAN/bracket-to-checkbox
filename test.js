const assert = require("assert");
const { toCheckbox } = require("./main");

assert.strictEqual(toCheckbox("[] "), "- [ ] ");        // 기본
assert.strictEqual(toCheckbox("  [] "), "  - [ ] ");    // 들여쓰기 보존
assert.strictEqual(toCheckbox("- [] "), "- [ ] ");      // 이미 불릿이면 마커 유지
assert.strictEqual(toCheckbox("    * [] "), "    * [ ] ");
assert.strictEqual(toCheckbox("hello [] "), null);      // 줄 중간은 무시
assert.strictEqual(toCheckbox("[]"), null);             // 스페이스 전엔 무시
assert.strictEqual(toCheckbox("- [ ] "), null);         // 재진입 루프 방지
console.log("ok");
