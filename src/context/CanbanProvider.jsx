import { CanbanContext } from "./CanbanContext";
import { useCallback, useEffect, useState } from "react";
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

    const fetchCardData = useCallback(async (id) => {

        const data = await getCurCard(token, id);
        setCard(data.task);

    }, [token])

    const deleteCurCard = async (id) => {
        if (!token) return;
        const data = await deleteCard(token, id);
        setCards(data.tasks);
    };



    const onCardData = async (id, payload) => {
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
        <CanbanContext.Provider value={{ cards, card, loading, error, setCard, setCards, fetchCardData, deleteCurCard, onCardData, addNewCard }}>
            {children}
        </CanbanContext.Provider>
    )
}

