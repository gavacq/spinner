const spinnerAnimations = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];

let delay = 300;
for (const item of spinnerAnimations) {
  delay += 200;
  setTimeout(() => {
  // Need to escape the backslash since it's a special character.
    process.stdout.write(`\r${item}  `);
  }, delay, item);
}
