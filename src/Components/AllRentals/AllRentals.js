import Header from '../Header/Header';
import Rental from '../Rental/Rental';
import {useState, useEffect} from 'react';

const AllRentals = () => {
    const [rentals, setRentals] = useState([]);

    return (
        <div>
            <Header />
            <section>
                {rentals.map((e) => (
                    <Rental
                    key={e.sled_id}
                    sledId={e.sled_id}
                    name={e.sled_name}
                    description={e.sled_description}
                    picture={e.sled_picture}
                    rules={e.sled_rules}
                    cost={e.sled_cost} />
                ))}
            </section>
        </div>
    )
}

export default AllRentals;