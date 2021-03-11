import Link from 'react-router-dom';

const Rental = (props) => {
    const {sledId, name, description, picture, rules, cost} = props;

    return (
        <div>
            <Link to={`/sled/${sledId}`}>
                <section>
                    <img src={picture} alt={name} />
                    <h6>{cost}</h6>
                </section>
            </Link>
        </div>
    )
}

export default Rental;