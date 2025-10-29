import { useState, useEffect } from "react";

export const usePizzaOfTheDay = () => {
    const [pizzaOfTheDay, setPizzaOfTheDay] = useSate(null);

    useEffect(() => {
        async function fetchPizzaOfTheDay(){
            const response = await fetch("/api/pizzaOfTheDay");
            const data = await response.jason();
            setPizzaOfTheDay(data);            
        }
        fetchPizzaOfTheDay();
    }, []);

    return pizzaOfTheDay;
};