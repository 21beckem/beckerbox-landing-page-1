const PurchaseBtn = () => {
    const handleClick = () => {
        Payhip.Checkout.open({
            product: 'ilf1s',
            message: 'A custom message to add to the checkout',
            successCallback: function() {
                console.log('Purchase successful!');
            }
        });
    };
    return (
        <a class="btn primary" onClick={handleClick}>
            Purchase
        </a>
    );
}

export default PurchaseBtn;