import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: { typescript: true },
        },
      ],
    });
    return config;
  },

  async redirects() {
    return [
      {
        source: "/blog",
        destination: "/blog/latest/page/1",
        permanent: true,
      },
      {
        source: "/blog/tech",
        destination: "/blog/tech/page/1",
        permanent: true,
      },
      {
        source: "/blog/movie",
        destination: "/blog/movie/page/1",
        permanent: true,
      },
      {
        source: "/blog/english",
        destination: "/blog/english/page/1",
        permanent: true,
      },
    ];
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
