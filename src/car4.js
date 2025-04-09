import React from 'react'
function Car(props) {
    return <li> I am {props.brand}</li>
}
export default function Garage() {
    const cars = [
        { id: 1, brand: 'Ford' },
        { id: 2, brand: 'BMW' },
        { id: 3, brand: 'Ferrari' }
    ];
    return (
        <div>
            <h1>Who lives in My Garage</h1>
            <ul>
                {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
            </ul>
        </div>
    );
}
