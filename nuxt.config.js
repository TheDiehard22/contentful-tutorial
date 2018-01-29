const config = require('./.contentful.json')

module.exports = {
	/*
	** Headers of the page
	*/
	head: {
		title: 'nuxtjs',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'Nuxt.js project' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'stylesheet', type: 'text/css', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' }
		]
	},
	/*
	** Customize the progress bar color
	*/
	loading: { color: '#3B8070' },
	/*
	** Build configuration
	*/
	build: {
		extend (config, { isDev, isClient }) {
			if (isDev && isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				})
			}
		}
	},

	css: [
		'bulma',
		'@/assets/sass/bootstrap.scss'
	],

	env: {
		CTF_SPACE_ID: config.CTF_SPACE_ID,
		CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN,
		CTF_PERSON_ID: config.CTF_PERSON_ID,
		CTF_BLOG_POST_TYPE_ID: config.CTF_BLOG_POST_TYPE_ID,
		CTF_PRODUCT_TYPE_ID: config.CTF_PRODUCT_TYPE_ID
	}
}
