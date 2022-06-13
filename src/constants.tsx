const host = "http://localhost:1337/api";

export const constants = {
    token: '',
    url: {
        host: `${host}`,
        login: `${host}/auth/local`,
        new_user: `${host}/auth/local/register`,
        users: `${host}/users`,
        components: `${host}/components`,
        flow_data: `${host}/flow-data`,
        elements: `${host}/elements`,
        element_category: `${host}/element-categories`,
        uploads: `${host}/upload`
    }
}