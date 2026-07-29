/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/previews/churaumi-ticket-guide",
        destination: "/previews/churaumi-ticket-guide/index.html",
        permanent: false
      },
      {
        source: "/previews/okinawa-rental-car-luggage-stroller-carousel",
        destination: "/previews/okinawa-rental-car-luggage-stroller-carousel/index.html",
        permanent: false
      },
      {
        source: "/previews/okinawa-family-stroller-carousel",
        destination: "/previews/okinawa-family-stroller-carousel/index.html",
        permanent: false
      },
      {
        source: "/previews/okinawa-churaumi-nearby-family-stay-carousel",
        destination: "/previews/okinawa-churaumi-nearby-family-stay-carousel/index.html",
        permanent: false
      },
      {
        source: "/previews/first-okinawa-where-to-stay-carousel",
        destination: "/previews/first-okinawa-where-to-stay-carousel/index.html",
        permanent: false
      },
      {
        source: "/blog/okinawa-driving-rest-stops-family",
        destination: "/blog/okinawa-family-drive-toilet-convenience-store",
        permanent: true
      },
      {
        source: "/car-seat",
        destination: "/blog/okinawa-car-seat-rental-guide",
        permanent: false
      }
    ];
  }
};

export default nextConfig;
