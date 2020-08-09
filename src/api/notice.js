import axios from 'axios'

const member = {
    listView() {
        return axios.get('/api/notice/listview');
    },
    listFind(index) {
        return axios.get(`/api/notice/listfind/${index}`);
    },
    listAdd(noticedata){
        return axios.post('/api/notice/listadd', noticedata);
    }
}

export default member