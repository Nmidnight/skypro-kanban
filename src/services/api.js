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
        throw new Error(err?.response?.data?.error || err.message);
    }
}

export async function addCard(token, card) {
    try {
        const response = await api.post("/kanban",
            card,
            {
                headers: {
                    Authorization: 'Bearer ' + token,
                    "Content-Type": "",
                }
            })
        return response.data

    }
    catch (err) {
        throw new Error(err?.response?.data?.error || err.message);
    }
}

export async function getCurCard(token, id) {
    try {
        const response = await api.get(`/kanban/${id}`,
            {
                headers: {
                    Authorization: 'Bearer ' + token,
                    "Content-Type": "",
                }
            }
        );
        return response.data
    }

    catch (err) {
        throw new Error(err?.response?.data?.error || err.message);
    }
}

export async function editCard(token, id, data) {
    try {
        const response = await api.put(`/kanban/${id}`,
            data,
            {
                headers: {
                    Authorization: 'Bearer ' + token,
                    "Content-Type": "",
                }
            }
        );
        return response.data;
    }
    catch (err) {
        throw new Error(err?.response?.data?.error || err.message);
    }
}

export async function deleteCard(token, id) {
    const response = await api.delete(`/kanban/${id}`, {
        headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "",
        },
    });
    return response.data;
}