import axios from 'axios'

const member = {
	login(loginData) {
		return axios.post('/api/login',loginData);
	},
}

export default member