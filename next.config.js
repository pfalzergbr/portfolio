const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
		domains: ['cdn.sanity.io'],
    images: {
      loader: "cloudinary",
      path: "https://res.cloudinary.com/pfalzer-dev/image/upload/"
    },
	}
}