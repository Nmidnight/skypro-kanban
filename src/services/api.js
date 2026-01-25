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
export async function fetchCards(token) {
    try {
        const data = await api.get("/kanban", {
            headers: {
                Authorization: 'Bearer ' + token,
                "Content-Type": "",
            },
        })
        return data.data
    }
    catch (err) {
        console.log("ERR", err?.response?.data || err.message);
    }
}