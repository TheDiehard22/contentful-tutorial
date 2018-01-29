import Vuex from 'vuex'

const debug = process.env.NODE_ENV !== 'production'

const store = () => {
	return new Vuex.Store({
		modules: {

		},
		strict: debug
	})
}

export default store
