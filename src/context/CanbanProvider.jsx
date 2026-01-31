import { CanbanContext } from "./CanbanContext";
import { useEffect, useState } from "react";
import { useAuth } from "./useAuth";
import { fetchCards } from "../services/api";

export function CanbanProvider({ children }) {
    const [cards, setCards] = useState(null);
    // const [changes, setChanges] = useState(null);

    // const id = card?._id;
    const { token } = useAuth();


    useEffect(() => {
        const getAllCards = async () => {
            console.log("TOKEN:", token)

            const data = await fetchCards(token);
            setCards(data.tasks);
        };

        getAllCards();
    }, [token]);


    // getCurCard(token, id).then((data) => {
    //     setCard(data);
    //     setChanges({ ...data.task });
    // });


    // const handleDelete = async () => {
    //     await deleteCard(token, id);
    //     navigate("/", { replace: true });
    // };

    // const handleSave = async () => {
    //     await editCard(token, id, changes);
    // };

    // if (!card || !changes) return null;

    return (
        <CanbanContext.Provider value={{ cards, setCards }}>
            {children}
        </CanbanContext.Provider>
    )
}

