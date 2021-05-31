import PriceBoard from "../components/PricesSection/PriceBoard";

const get_prices_info = () => [ 
    { name: "BTC", price: "49.158 $", is_active: true },
    { name: "ETH", price: "3.927 $", is_active: false },
    { name: "ADA", price: "345.2 $", is_active: false },
    { name: "DOGE", price: "54.7 $", is_active: false },
    { name: "XRP", price: "6.339 $", is_active: false }
];

function PricesSection() {
    return (
        <section id="PricesBoard" class="w-max mt-7 mx-auto flex">
            {get_prices_info().map( 
                (currency, index) => (<PriceBoard name={currency.name} price={currency.price} is_active={currency.is_active} />) 
            )}
        </section>
    );
}

export default PricesSection;