import axios from 'axios'

const member = {
    listView() {
        return axios.get('/api/notice/listview');
    },
    listFind(index) {
        return axios.get(`/api/notice/listfind/${index}`);
    },
}

export default member