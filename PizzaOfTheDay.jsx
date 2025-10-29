import { usePizzaofTheDay } from './usePizzaOfTheDay';
const insl = new Intl.ListFormat('en-US',{
    style: "currency",
    currency: "USD",
})

const PizzaOfTheDay = () => {
    const pizzaOfTheDay = usePizzaOfTheDay();

    if (!pizzaOfTheDay){
        return <div>Loading...</div>
    }
    return (
        <div className='Pizza-of-the-day'>
            <h2>Pizza of the Day</h2>
            <div className='pizza-of-the-day-details'>
                <h3>{pizzaOfTheDay.name}</h3>
                <p>{pizzaOfTheDay.description}</p>
                <p className="pizza-of-the-day-price">
                    From: {insl.format(prizeOfTheDay.price.sizes.S)}
                </p>
            </div>
            <img 
                className='pizza-of-the-day-image'
                src={ pizzaOfTheDay.image }
                alt={ pizzaOfTheDay.name }
            />
        </div>
    )
}

export default PizzaOfTheDay;