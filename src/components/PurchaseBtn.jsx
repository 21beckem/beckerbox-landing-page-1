const PurchaseBtn = (props) => {
    const handleClick = () => {
        if (!props.product) return;
        Payhip.Checkout.open({
            icon: 'https://raw.githubusercontent.com/21beckem/becker-suite-public-assets/refs/heads/main/logo.png',
            title: 'Becker Box - Full Version',
            product: props.product,
            message: 'A custom message to add to the checkout',
            successCallback: function() {
                console.log('Purchase successful!');
            }
        });
    };
    return (
        <a class="btn primary" onClick={handleClick} {...props}>
            {props.text ?? 'Purchase'}
        </a>
    );
}

export default PurchaseBtn;