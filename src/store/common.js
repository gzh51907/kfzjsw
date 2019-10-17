import axios from 'axios';
import router from '../router';
export default {
    state: {
        user: '',
        // Authorization:''
    },
    mutations: {
        login(state, { username, Authorization }) {
            state.user = {
                username,
                Authorization
            }

            // 存入本地存储
            localStorage.setItem("user", JSON.stringify({ username, Authorization }));
        },
        logout(state) {
            state.user = '';

            // 清空本地存储
            localStorage.removeItem("user");

            //跳转到登录页
            router.push('/login')
        }
    },
    actions: {
        async checkLogin(context, payload) {
            let user = localStorage.getItem("user");
            if (!user) {
                context.commit('logout');
            } else {
                user = JSON.parse(user);
                // 发起ajax请求，校验token是否过期
                let { data } = await axios.get('http://localhost:1906/verify', {
                    headers: {
                        Authorization: user.Authorization
                    }
                })
                // 放置刷新vuex数据丢失的问题
                if (data.code === 1) {
                    context.commit('login', user);
                } else {
                    context.commit('logout');
                    return 400
                }
            }
            return 200;
        }
    }
}