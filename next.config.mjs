/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/blog/okinawa-driving-rest-stops-family",
        destination: "/blog/okinawa-family-drive-toilet-convenience-store",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
