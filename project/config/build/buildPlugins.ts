import webpack from "webpack";
import htmlWebpackPlugin from "html-webpack-plugin";

import { BuildOptions } from "../types/config";

export function buildPlugins(
  options: BuildOptions
): webpack.WebpackPluginInstance[] {
  return [
    new htmlWebpackPlugin({
      template: options.paths.html,
    }),
    new webpack.ProgressPlugin(),
  ];
}
