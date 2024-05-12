/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	images: {
		unoptimized: true,
	},
	basePath: process.env.NODE_ENV === "production" ? "/Math_Lib" : undefined,
};

export default nextConfig;
