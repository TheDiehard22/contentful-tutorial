<template>
	<section>
		<section class="hero is-primary is-medium">
			<div class="hero-body">
				<div class="">
					<h1 class="title">
						{{product.fields.name}}
					</h1>
					<h2 class="subtitle">
						{{product.fields.subtitle}}
					</h2>
				</div>
			</div>
		</section>

		<div class="tabs is-toggle">
			<ul>
				<li v-for="tab in product.fields.tabs" :key="tab.sys.id" :class="{'is-active': tab.active}">
					<a @click="setActiveTab(tab)">
						<span class="icon is-small"><i class="fa fa-image"></i></span>
						<span>{{tab.fields.name}}</span>
					</a>
				</li>
			</ul>
		</div>

		<div class="tabs__content">
			<span>{{ activeTab.name}}</span>
			<p v-html="activeTab.content"></p>
		</div>

	</section>
</template>

<script>
	import createClient from '~/plugins/contentful.js'

	const client = createClient()

	export default {
		name: 'Products',

		methods: {
			setActiveTab (tab) {
				this.$set(tab, 'active', true)
				this.activeTab = Object.assign(
					{},
					this.activeTab,
					{ name: tab.fields.name, content: tab.fields.description }
				)
			}
		},

		data: () => ({
			activeTab: {
				name: '',
				content: ''
			}
		}),

		// `env` is available in the context object
		asyncData ({env}) {
			return Promise.resolve(client.getEntries({
				'content_type': env.CTF_PRODUCT_TYPE_ID
			})).then((entries) => {
				return {
					product: entries.items[0]
				}
			})
		}
	}
</script>
