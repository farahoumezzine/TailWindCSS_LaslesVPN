module.exports = {
  // ... existing config ...
  content: ["./node_modules/flowbite/**/*.js"],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      zIndex: {
        60: "60",
        70: "70",
      },
    },
  },
};
