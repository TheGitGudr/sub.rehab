import { hideBin } from "yargs/helpers";
import yargs from "yargs/yargs";
import { data, writeData } from "../data.mjs";
import { chalkSuccess } from "../output-utils.mjs";
import { validateSubList } from "../validation.mjs";
import { addSubreddit } from "./commands/add.mjs";
import { showSubreddit } from "./commands/show.mjs";

const onValidate = (argv) => {
  validateSubList(data.subs);
  console.log(chalkSuccess("All good!"));
};

yargs(hideBin(process.argv))
  .command("show [name]", "Show a Subreddit", {}, showSubreddit)
  .command("add [name]", "Add a Rubreddit", {}, addSubreddit)
  .command("validate", "Check for errors", {}, onValidate)
  .command("format", "Format subreddit file", {}, () => writeData(data))
  .demandCommand()
  .help().argv;
