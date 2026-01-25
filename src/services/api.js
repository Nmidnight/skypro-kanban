import axios from 'axios'

export const api = axios.create({
    baseURL: "https://wedev-api.sky.pro/api/",
});


export async function signupUser(user) {
    const response = await api.post("/user", user, {
        headers: {
            "Content-Type": "",
        },
    });
    return response.data.data;
}

export async function signinUser(user) {
    const response = await api.post("/user/login", user, {
        headers: {
            "Content-Type": "",
        }
    })
    return response.data;
}
export async function fetcCards({ token }) {
    try {
        const data = api("/kanban", token, {
            headers: {
                Authorization: 'Bearer ' + token,
                "Content-Type": "",
            },
        })
        return data.data
    }
    catch (err) {
        throw new Error(err.message);
    }
}