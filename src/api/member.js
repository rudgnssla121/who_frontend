import axios from 'axios'

const member = {
	login(loginData) {
		return axios.post('/api/member/login',loginData);
	},
	signup(signupData){
		return axios.post('/api/member/signup',signupData);
	},
	findid(findId){
		return axios.post('api/member/findid',findId);
	}
}

export default member