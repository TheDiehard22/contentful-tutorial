<template>
	<section class="magic-wrapper">

		<nav class="navbar header" role="navigation" aria-label="main navigation">
			<div class="navbar-brand">
				<a class="navbar-item" href="https://bulma.io">
					<img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
				</a>

				<button class="button navbar-burger">
					<span></span>
					<span></span>
					<span></span>
				</button>
			</div>

			<div class="navbar-menu">
				<div class="navbar-start">
					<nuxt-link to="/" class="navbar-item">Home</nuxt-link>
					<nuxt-link to="/products" class="navbar-item">Products</nuxt-link>
				</div>
			</div>
		</nav>

		<nav class="side-nav">

		</nav>

		<main class="main">
			<nuxt/>
		</main>

	</section>
</template>

<style>

</style>
