function Content() {
    return (
        <div id="Content" class="mr-2">
            <p class="main-text">Get notified when a coin goes above or below a price target.</p>
            <form action="#" class="mt-10">
                <p class="form-paragraph">
                    Send me an email 
                    <input type="text" placeholder="Email" class="my-2 w-32 mx-1 px-6 form-input" />
                    as soon as
                    <select name="name" id="CurrencyName" class="my-2 mr-1 w-20 pl-2 form-input">
                        <option value="btc" selected="selected">BTC</option>
                    </select>
                    goes
                    <select name="state" id="CurrencyState" class="my-2 ml-2 mr-1 w-24 pl-2 form-input">
                        <option value="above" selected="selected">Above</option>
                    </select>
                    the price of
                    <input type="number" name="edge-price" id="CurrencyEdgePrice" placeholder="0.00 $" class="my-2 mx-1 w-16 pl-2 form-input" />
                </p>  
            </form>
            <button class="mt-12 ml-32 py-2 pl-4 pr-6 rounded-md flex items-center bg-main-cta text-white font-secondary font-semibold text-xs">
                <svg class="mr-2" width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.844 0a5.953 5.953 0 015.958 5.762l.003.199v3.256l1.096 2.508a.993.993 0 01-.91 1.391l-3.763.002a2.384 2.384 0 01-4.764.141l-.004-.143H1.704a.994.994 0 01-.911-1.388l1.09-2.51V5.96A5.951 5.951 0 017.843 0zm1.192 13.117l-2.384.001a1.192 1.192 0 002.378.116l.005-.117h.001zM7.844 1.192a4.76 4.76 0 00-4.769 4.769v3.505l-1.068 2.459h11.68l-1.074-2.458V5.97l-.004-.179a4.76 4.76 0 00-4.765-4.6z" fill="#fff"/>
                </svg>
                Set Alert
            </button>
        </div>
    );
}

export default Content;