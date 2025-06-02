const core = require('@actions/core');

async function run() {
  try {
    const name = core.getInput('name');
    const a = parseInt(core.getInput('a'));
    const b = parseInt(core.getInput('b'));

    console.log(`👋 Hello, ${name}!`);
    console.log(`🧮 The sum of ${a} and ${b} is ${a + b}`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();