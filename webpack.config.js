const HtmlBundlerPlugin = require("html-bundler-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const dataGlobal = require("./src/data/_global");
const glob = require("glob-all");
const path = require("path");

const { resolve, sep } = path;
const assetPath = (dir) => resolve(__dirname, `src${sep}assets${sep}${dir}`);
const viewPath = (dir) => resolve(__dirname, `src${sep}views${sep}${dir}`);
const { posix } = path;

const data = glob.sync(`src${sep}data${sep}**${sep}*.js`, { cwd: __dirname });
const entry = glob
  .sync(`src${sep}views${sep}pages${sep}**${sep}*.html`, { cwd: __dirname })
  .reduce((acc, file) => {
    const key = posix.normalize(
      path
        .relative(`src${sep}views${sep}pages`, file)
        .replace(/\.html$/, "")
        .split(sep)
        .join("/"),
    );

    const filePath = posix.normalize(`src/data/${key.replace(/\//g, "-")}.js`);

    acc[key] = {
      import: file,
      ...(data.includes(filePath) && { data: filePath }),
    };

    return acc;
  }, {});

module.exports = (_, argv) => {
  const isProd = argv.mode === "production";
  const formatFilename = (ext, filename) => {
    let baseExt = ext;

    if (ext.includes(".js")) {
      baseExt = "js";
    } else if (ext.includes(".css")) {
      baseExt = "css";
    }

    const base = `assets${sep}${baseExt}${sep}`;
    const outputName = isProd
      ? `[name].min.[contenthash:8].${ext}`
      : `[name].${ext}`;

    if (filename.includes("node_modules")) {
      const packagePath = filename
        .replace(/\\/g, "/")
        .split("node_modules/")[1];
      const packageName = packagePath.split("/")[0];

      return `${base}${sep}vendor${sep}${packageName}${sep}[name][ext]`;
    }

    return `${base}${outputName}`;
  };
  const copyDestination = ({ absoluteFilename }) => {
    const filename = path.basename(absoluteFilename);
    const ext = filename.substring(filename.indexOf(".") + 1);
    return formatFilename(ext, absoluteFilename);
  };
  const plugins = [
    new HtmlBundlerPlugin({
      entry,
      router: true,
      sources: [
        {
          tag: "script",
          filter: ({ value }) => !value.startsWith("assets/js/vendor"),
        },
      ],
      js: {
        filename: (pathData) => formatFilename("js", pathData.filename),
      },
      css: {
        filename: (pathData) => formatFilename("css", pathData.filename),
      },
      data: { env: argv.mode, global: dataGlobal },
      preprocessor: "nunjucks",
      preprocessorOptions: {
        views: [`src${sep}views${sep}`],
        trimBlocks: true,
        lstripBlocks: true,
      },
      minify: {
        collapseWhitespace: false,
        collapseBooleanAttributes: true,
        removeEmptyAttributes: true,
        removeComments: true,
      },
    }),
  ];

  if (!isProd) {
    plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: `node_modules/swiper/swiper-bundle*.{js,js.map}`,
            to: copyDestination,
          },
          {
            from: `node_modules/alpinejs/dist/cdn*.js`,
            to: copyDestination,
          },
        ],
      }),
    );
  }

  return {
    mode: "development",
    devtool: isProd && "source-map",
    stats: "minimal",
    output: {
      path: resolve(__dirname, "dist"),
      assetModuleFilename: `assets${sep}[name].[contenthash:8][ext][query]`,
    },
    devServer: {
      static: { directory: resolve(__dirname, "dist") },
      watchFiles: {
        paths: [
          `src${sep}views${sep}**${sep}*.*`,
          `src${sep}assets${sep}**${sep}*.*`,
        ],
      },
      historyApiFallback: {
        rewrites: [
          { from: /^\/$/, to: "/index.html" },
          { from: /./, to: "/404.html" },
        ],
      },
      compress: true,
    },
    resolve: {
      alias: {
        "@page": viewPath("pages"),
        "@style": assetPath("css"),
        "@script": assetPath("js"),
        "@img": assetPath("img"),
        "@node": resolve(__dirname, "node_modules"),
      },
    },
    module: {
      rules: [
        {
          test: /\.(css|scss|sass)$/,
          use: ["css-loader", "postcss-loader"],
        },
        {
          test: /\.(jpe?g|png|webp)$/,
          type: "asset/resource",
          generator: {
            filename: (pathData) => {
              const relativePath = posix.normalize(
                path
                  .relative(resolve(__dirname, "src"), pathData.filename)
                  .split(sep)
                  .join("/"),
              );
              return `assets${sep}${relativePath.replace(/(\.[\w\d_-]+)$/, ".[contenthash:8]$1")}`;
            },
          },
          use: {
            loader: "responsive-loader",
            options: {
              name: `assets${sep}img${sep}[path][name]-[width]w.[contenthash:8].[ext]`,
              context: resolve(__dirname, `src${sep}assets${sep}img`),
              sizes: [360, 480, 720, 1080, 1280, 1920],
              format: "webp",
            },
          },
        },
        {
          test: /\.(svg|ico)$/,
          type: "asset",
          parser: {
            dataUrlCondition: {
              maxSize: 4096,
            },
          },
          generator: {
            filename: (pathData) => {
              const relativePath = posix.normalize(
                path
                  .relative(resolve(__dirname, "src"), pathData.filename)
                  .split(sep)
                  .join("/"),
              );
              return relativePath.replace(
                /(\.[\w\d_-]+)$/,
                ".[contenthash:8]$1",
              );
            },
          },
        },
      ],
    },
    performance: { hints: false },
    plugins,
  };
};
