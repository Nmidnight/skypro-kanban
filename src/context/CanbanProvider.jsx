import { CanbanContext } from "./CanbanContext";
import { useEffect, useState } from "react";
import { useAuth } from "./useAuth";
import { addCard, deleteCard, editCard, fetchCards, getCurCard } from "../services/api";

export function CanbanProvider({ children }) {
    const [cards, setCards] = useState([]);
    const [card, setCard] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { token } = useAuth();



    useEffect(() => {
        const getAllCards = async () => {
            setLoading(true);

            try {
                const data = await fetchCards(token);
                setCards(data.tasks);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        getAllCards();
    }, [token]);

    const currentCard = async (id) => {

        const data = await getCurCard(token, id);
        setCard(data.task);

    };

    const deleteCurCard = async (id) => {
        if (!token) return;
        const data = await deleteCard(token, id);
        setCards(data.tasks);
    };



    const butEditCard = async (id, payload) => {
        if (!token) return;
        const data = await editCard(token, id, payload);
        setCards(data.tasks);

    };

    const addNewCard = async (payload) => {
        if (!token) return;
        const data = await addCard(token, payload);
        setCards(data.tasks);
    };
    useEffect(() => {
    }, [cards]);



    return (
        <CanbanContext.Provider value={{ cards, card, loading, error, setCards, currentCard, deleteCurCard, butEditCard, addNewCard }}>
            {children}
        </CanbanContext.Provider>
    )
}

