const PurchaseBtn = (props) => {
    const handleClick = (event) => {
        if (!props.product) return;
        if (props.onClick) props.onClick(event);
        window.dispatchEvent(
            new CustomEvent('checkout:open', {
                detail: { product: props.product }
            })
        );
    };
    return (
        <a class="btn primary" onClick={handleClick} {...props}>
            {props.text ?? 'Purchase'}
        </a>
    );
}

export default PurchaseBtn;