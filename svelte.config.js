import sveltePreprocess from "svelte-preprocess";

export default {
  extensions: [".svelte"],

  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    sveltePreprocess({
      postcss: true,
    }),
  ],
};
