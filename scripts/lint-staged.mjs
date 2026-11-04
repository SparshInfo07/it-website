import { ESLint } from "eslint";
import path from "node:path";

async function main() {
  const files = process.argv.slice(2);
  if (files.length === 0) {
    console.log("No files to lint.");
    return;
  }

  console.log(`\n🔍 Linting ${files.length} file(s) with ESLint (cache enabled)...`);
  const eslint = new ESLint({ fix: true, cache: true });

  let hasErrors = false;
  const allResults = [];

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const relPath = path.relative(process.cwd(), file);
    const progress = `[${i + 1}/${files.length}]`;
    process.stdout.write(`${progress} Checking: ${relPath}\n`);

    try {
      const results = await eslint.lintFiles([file]);
      await ESLint.outputFixes(results);
      allResults.push(...results);

      const fileErrors = results.reduce((acc, r) => acc + r.errorCount, 0);

      if (fileErrors > 0) {
        hasErrors = true;
        process.stdout.write(`❌ ${progress} Failed: ${relPath} (${fileErrors} error(s))\n`);
      }
    } catch (err) {
      hasErrors = true;
      console.error(`❌ ${progress} Error linting ${relPath}:`, err.message);
    }
  }

  const formatter = await eslint.loadFormatter("stylish");
  const resultText = formatter.format(allResults);
  if (resultText.trim()) {
    console.log("\n" + resultText);
  }

  if (hasErrors) {
    process.exit(1);
  } else {
    console.log(`✨ All ${files.length} file(s) passed linting!\n`);
  }
}

main().catch((err) => {
  console.error("Lint script error:", err);
  process.exit(1);
});
