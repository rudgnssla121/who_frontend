import axios from 'axios'

const member = {
	login(loginData) {
		return axios.post('/api/member/login',loginData);
	},
}

export default member