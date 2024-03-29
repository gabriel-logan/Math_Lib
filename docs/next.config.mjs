/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	images: {
		unoptimized: true,
	},
	assetPrefix: "/out",
	basePath: "/out",
};

export default nextConfig;
