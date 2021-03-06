import { CDKTFConstruct } from "@dschmidt/cdktf-construct-base";

const project = new CDKTFConstruct({
  author: "Daniel Schmidt",
  authorAddress: "danielmschmidt92@gmail.com",
  defaultReleaseBranch: "main",
  name: "cdktf-local-exec",
  repositoryUrl: "https://github.com/DanielMSchmidt/cdktf-local-exec.git",

  deps: [],
  peerDeps: ["@cdktf/provider-null@>=0.6.0"],
  devDeps: [
    "@cdktf/provider-null",
    "@cdktf/provider-random",
    "@dschmidt/cdktf-construct-base",
  ],
  description:
    "A simple construct that executes a command locally. This is useful to run build steps within your CDKTF Program or to run a post action after a resource is created." /* The description is just a string that helps people understand the purpose of the package. */,
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
  // release: undefined,      /* Add release management to this project. */
});
project.synth();
