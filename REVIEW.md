# Lesson Review

This document defines the review checklist used to audit every `.js` lesson
file in `syntax/`, `functions/`, and `built-ins/`, and records the result of
applying it to all 19 files. No linter, test runner, or CI exists in this
repository (deliberately, per this cycle's scope) — the audit below was
performed by reading each file and executing it with `node <file>`.

## Checklist

A lesson file is checked against four criteria:

- **(a) Header banner** — the file opens with a `/* ... */` block containing
  a line that reads `Aula N: <topic>`, matching the file's own number
  (`aulaN.js`) and not colliding with another file's number.
- **(b) Output accuracy** — every `// Output:` (or `//Output:`) comment
  matches what actually happens when the code above it is run with `node`.
- **(c) No unintended redeclaration errors** — the file does not throw
  `SyntaxError: Identifier '...' has already been declared` (or an
  equivalent error) when run top-to-bottom.
- **(d) Exercises precede solutions** — where a file contains an exercise
  prompt (`Instruções`, `Quiz`, `your code goes here`), the prompt/placeholder
  appears before any complete working solution, not after it.

### Methodology notes (apply to every file below)

- Per the stories' Out of Scope note, code that deliberately references
  undefined identifiers to illustrate a concept in isolation (the repeated
  `Sundae`, `obj1`, `data`, `teleport` pattern in `functions/aula2.js`) is
  **not** treated as a defect under (b)/(c).
- Several files annotate a variable's or function call's value in a trailing
  comment (e.g. `greet('James'); // Welcome James!`) without an actual
  `console.log()` call. These are treated as inline value annotations, not
  literal console-output claims, and are marked pass as long as the
  described value is correct — except where the annotation is written in the
  `// Output:` convention immediately after a bare, unlogged expression that
  reads as if it were printed (flagged individually below).
- Node prints arrays/objects using its own `util.inspect` formatting (e.g.
  `[ 'a', 'b' ]`, `Symbol(x)`), which differs cosmetically from the old
  Chrome DevTools shorthand some comments use (`(3) [...]`, `Object {...}`).
  This cosmetic mismatch alone is not marked as a fail; only comments whose
  *values* are wrong, or that claim output that never prints at all, are
  flagged.
- Where a file's own comments deliberately provoke a thrown error to
  illustrate a language rule (e.g. adding a non-object to a `WeakSet`), and
  the `// Output:` comment correctly predicts that error, this is a pass for
  (b), even though the process exits non-zero — this is the same established
  "intentional failure demo" pattern already present throughout the course.

## Resolved (this cycle)

| File | Issue | Resolution |
|---|---|---|
| `syntax/aula5.js` | `for...in` loops over `digits2`/`digits3` logged `digits[index]` instead of the array actually being iterated (lines 51, 81). | Fixed — see commit "Fix wrong array references in aula5 for...in loops". Verified with `node syntax/aula5.js` (exit 0, output matches all inline comments). |
| `functions/aula6.js` | `class Plane` declared three times at top level (`SyntaxError`); fixing it also surfaced two more top-level identifier collisions (`function Plane` at line 33, and ES5 `Tree`/`Maple` functions colliding with the ES6 `class Tree`/`class Maple` earlier in the file) that also had to be resolved for the file to run to completion, plus an uncaught `TypeError` from the intentional `Toy()` demo that previously halted the script before EOF. | Fixed — see commit "Resolve Plane/Tree/Maple redeclaration errors in aula6". All conflicting identifiers renamed (`PlaneES5`, `Plane2`, `Plane3`, `TreeES5`, `MapleES5`); the `Toy()` demo is now wrapped in `try/catch` so the deliberate error still prints but no longer aborts the process. Verified with `node functions/aula6.js` (exit 0). |
| `functions/aula7.js` | The `// your code goes here` placeholder sat below the finished `Bicycle` implementation, so the exercise revealed its own answer. | Fixed — see commit "Move Bicycle exercise placeholder before its solution". Placeholder now sits directly after `Vehicle` and before a `// Solução:` delimiter that introduces the working `Bicycle` subclass and test code. Verified with `node functions/aula7.js` (prints `beep beep` then `honk honk`, exit 0). |

## Per-file results

Legend: ✅ pass · ❌ fail (reason given) · — resolved this cycle (see table above) · n/a not applicable to this file.

### `syntax/`

| File | (a) Header | (b) Output accuracy | (c) No redeclaration errors | (d) Exercise order |
|---|---|---|---|---|
| `syntax/aula1.js` | ✅ | ✅ — `getClothing` is redefined 3× to narrate hoisting/`let`/`const`, but is never invoked in the file, so there is no runtime output to contradict the comments. | ✅ — `function` redeclarations are legal in JS and never invoked, so no runtime effect. | n/a |
| `syntax/aula2.js` | ✅ | ✅ | ✅ | n/a |
| `syntax/aula3.js` | ✅ | ✅ (verified via `node`) | ✅ | n/a |
| `syntax/aula4.js` | ✅ | ✅ | ✅ | n/a |
| `syntax/aula5.js` | ✅ | — resolved (see above) | ✅ | n/a |
| `syntax/aula6.js` | ✅ | ❌ Line 34: `console.log(produce)` is commented `//Output: apples bananas pears corn potatoes carrots`, but `produce` is an array, so the actual output is `[ 'apples', 'bananas', 'pears', 'corn', 'potatoes', 'carrots' ]`. Line 46: comment `//Output:  [Array[3], Array[3]]` doesn't match either — the code logs `produce` again (not the newly built `produce2`), so the actual output is the same flat, already-concatenated array from line 33/34, not a nested two-array structure. | ✅ | n/a |
| `syntax/aula7.js` | ✅ | ✅ (verified via `node`) | ✅ — `sum` is redeclared (`arguments`-based, then rest-based) but neither call's result is logged, so the redeclaration has no observable effect on the file's stated output. | n/a |

### `functions/`

| File | (a) Header | (b) Output accuracy | (c) No redeclaration errors | (d) Exercise order |
|---|---|---|---|---|
| `functions/aula1.js` | ✅ | ❌ Line 57–58: `greet('Asser');` is called but its return value is never passed to `console.log()` (unlike `sayHi()`/`orderIceCream()` just below it, which call `console.log` directly), so nothing prints for this line even though `//Output: Hello Asser!` implies it does. | ✅ | n/a |
| `functions/aula2.js` | ✅ | ✅ (protected "established pattern" — `Sundae`, `obj1`, `data`, `teleport` are intentionally undefined) | ✅ | n/a |
| `functions/aula3.js` | ✅ | ❌ Line 30: `console.log(scoops)` references the bare, never-declared identifier `scoops` (should read `dessert.scoops` per the surrounding prose); running the file throws `ReferenceError: scoops is not defined` here, so the `//Output: NaN` comment on line 31 is never reached, and the whole `IceCream`/closure/arrow-function comparison below (lines 33–98, including `dessert2`, `dessert3`, `dessert4`) never executes. | ✅ — `IceCream` is redeclared 3× as `function`, which is legal and does not itself throw. | n/a |
| `functions/aula4.js` | ✅ | ✅ — `greet` is redeclared, and due to function hoisting every call actually runs the second (default-parameter) definition, but both definitions are behaviorally equivalent for the arguments used, so the annotated return values remain correct. | ✅ (see note above — legal, and behaviorally invisible here) | n/a |
| `functions/aula5.js` | ✅ | ❌ Lines 8, 22–23, 27: `createGrid` is declared twice as a `function`; JS hoists both declarations before any code runs, so by line 22 the *second* definition (line 27, with the `= []` default) is already the active one. The call `createGrid();` therefore does **not** throw the `TypeError` the comment on line 23 predicts — it silently returns `"Generating a grid of 5 by 5"`. The same pattern repeats for `createSundae` (declared at lines 42 and 58): the call at line 54 does not throw `Cannot match against 'undefined' or 'null'` as commented, because the safe (line 58) definition is already hoisted into place. | ✅ (no `SyntaxError` — `function` redeclaration is legal; the hoisting side effect is captured under (b) since it changes runtime behavior, not because it's an error) | n/a |
| `functions/aula6.js` | ❌ Banner reads "Aula 5: Prévia de classes" (lines 2–4) but the file is `aula6.js`, and `functions/aula5.js` already uses the "Aula 5" number — this pre-existing mismatch was intentionally left as-is (see Follow-ups; renumbering was not requested and risks scope creep). | — resolved (see above) | — resolved (see above) | n/a |
| `functions/aula7.js` | ✅ | ✅ (verified via `node`) | ✅ | — resolved (see above) |

### `built-ins/`

| File | (a) Header | (b) Output accuracy | (c) No redeclaration errors | (d) Exercise order |
|---|---|---|---|---|
| `built-ins/aula1.js` | ✅ | ✅ (verified via `node`; only cosmetic devtools-format differences) | ✅ | n/a |
| `built-ins/aula2.js` | ❌ Lines 2–6: the banner block embeds a full prose paragraph between the `==========================` border lines, breaking the "border / `Aula N:` line / border / prose" pattern every other file follows. | ❌ Line 69: `james[Symbol.iterator]()` reads from `james` (the plain object defined at line 43, with no `[Symbol.iterator]` method) instead of `james2` (line 52, the object that actually implements it); running the file throws `TypeError: james[Symbol.iterator] is not a function`, so this closing demonstration never produces the iterator it's meant to. | ✅ | n/a |
| `built-ins/aula3.js` | ✅ | ❌ Line 121: the comment reads `//Outut: ]` — a typo (missing "p", stray `]`) in place of `// Output:`, ahead of an otherwise-correct value block (lines 122–131). ❌ Line 169: `student3 = null;` reassigns `student3`, which was declared `const` at line 153; this throws `TypeError: Assignment to constant variable.` (masked in practice only because the script already halts earlier, at line 160's intentional `WeakSet` error demo, whose own `// Output:` comment on line 161 is correct and not itself a fail). | ✅ | n/a |
| `built-ins/aula4.js` | ✅ | ❌ Line 169: `book1 = null;` reassigns `book1`, which was declared `const` at line 143; this throws `TypeError: Assignment to constant variable.` (masked in practice only because the script already halts earlier, at line 156's intentional `WeakMap` error demo, whose own `// Output:` comment on line 157 is correct and not itself a fail). | ✅ | n/a |
| `built-ins/aula5.js` | ✅ | ❌ Lines 10 and 26: `window.setTimeout(...)` uses the browser-only `window` global. Under Node this throws `ReferenceError: window is not defined` on the very first executable statement, so none of the file's Promise demonstration ever runs. Every other timer-using file in the repo (e.g. `functions/aula3.js`) calls the global `setTimeout` directly, so this is an isolated inconsistency rather than the established illustrative pattern. | ✅ | n/a |

## Summary

- 3 defects fixed this cycle (S1/S2), listed under **Resolved** above.
- 11 new fail items were found across 8 files during the S3 audit
  (`syntax/aula6.js`; `functions/aula1.js`, `functions/aula3.js`,
  `functions/aula5.js`, `functions/aula6.js` header numbering;
  `built-ins/aula2.js`, `built-ins/aula3.js`, `built-ins/aula4.js`,
  `built-ins/aula5.js`). None of these were fixed in this cycle — per Out
  of Scope, only `syntax/aula5.js`, `functions/aula6.js`, and
  `functions/aula7.js` were in scope for code changes; the rest are
  documented here for a future revision cycle.
