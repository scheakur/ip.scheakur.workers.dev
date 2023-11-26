export default {
	async fetch(req) {
		return new Response(req.headers.get('cf-connecting-ip'));
	},
};
