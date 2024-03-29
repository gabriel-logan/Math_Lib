/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	images: {
		unoptimized: true,
	},
	assetPrefix: "https://gabriel-logan.github.io/Math_Lib",
	basePath: "/out",
};

export default nextConfig;
