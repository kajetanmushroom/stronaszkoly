const request = require('request-promise')

const offers = ['7290001', '6340001', '6390001', '6330001', '6370001', '6400001', '6410001', '6360001', '7230001']
async function getToken(username, password) {
	let d = await request({
		url: "https://northfish.moveapp.pl/backend/oauth/token",
		method: "POST",
		headers: {
			Authorization: 'Basic YXBwX2NsaWVudF9pZDpRZ0s1M3BxV2h9Jjl1ej9K',
		},
		json: true,
		form: {
			grant_type: 'password',
			password,
			username,
		}
	})
	return d.access_token
}

async function getInitToken() {
	return await getToken('anonymous', 'a~k.8^JrFXn&A;9F')
}

async function register(token, email) {
	let d = await request({
		url: "https://northfish.moveapp.plbackend/api/app/user",
		method: "POST",
		headers: {
			Authorization: 'Bearer ' + token.toString(),
		},
		json: true,
		body: {
			name: 'jan',
			email,
			password: 'qwer1234',
			termsOfUse: true,
			newsletter: false,
			marketing: false,
		}
	})
}

function getMail(){
	return "elo@elo.pl"
}


async function addCoupons(coupons){
	let sessionToken = getInitToken()
	let mail = getMail()
	let d = await request({
		url: "https://northfish.moveapp.pl/backend/api/app/user/offer",
		method: "PUT",
		headers: {
			Authorization: 'Bearer ' + sessionToken.toString(),
		},
		json: true,
		form: {
			grant_type: 'password',
			password,
			username,
		}
	})



}


