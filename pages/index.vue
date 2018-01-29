<template>
	<section class="blog__wrapper">
		<div class="card blog" v-for="(post, index) in posts" :key="index">
			<div class="card-content">
				<div class="media">
					<div class="media-left">
						<figure class="image is-96x96">
							<img src="http://via.placeholder.com/96x96" alt="">
						</figure>
					</div>
					<div class="media-content">
						<span class="title is-4 block" style="display: block;">{{ post.fields.title }}</span>
						<span class="subtitle is-6">{{ post.fields.slug }}</span>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import createClient from '~/plugins/contentful.js'

	const client = createClient()

	export default {
		// `env` is available in the context object
		asyncData ({env}) {
			return Promise.all([
				// fetch the owner of the blog
				client.getEntries({
					'sys.id': env.CTF_PERSON_ID
				}),
				// fetch all blog posts sorted by creation date
				client.getEntries({
					'content_type': env.CTF_BLOG_POST_TYPE_ID,
					order: '-sys.createdAt'
				})

			]).then(([entries, posts]) => {
				// return data that should be available
				// in the template
				return {
					person: entries.items[0],
					posts: posts.items
				}
			}).catch(console.error)
		}
	}
</script>
