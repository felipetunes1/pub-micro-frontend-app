const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "hdi-seguros",
    projectName: "navbar-menu-app",
    webpackConfigEnv,
  });

  return webpackMerge.merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    externals: {
      // '@material-ui/core' : '@material-ui/core',
      // '@material-ui/icons' : '@material-ui/icons',
      // '@material-ui/styles': '@material-ui/styles'
    }
  });
};
