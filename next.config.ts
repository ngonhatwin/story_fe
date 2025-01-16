import type { NextConfig } from "next";
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  // Cấu hình bundle analyzer
  images: {
    domains: ['cdn.truyenfull.tv', 'truyenhoan.com','img.metruyenhot.vn','img.metruyenhotmoi.com'] // Thêm hostname vào đây
  },
  // Các cấu hình Next.js khác (nếu có)
};

module.exports = withBundleAnalyzer(nextConfig);
