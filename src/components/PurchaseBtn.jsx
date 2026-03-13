const PurchaseBtn = (props) => {
    const handleClick = (event) => {
        if (props.onClick) props.onClick(event);
        window.dispatchEvent(
            new CustomEvent('checkout:open', {
                detail: {
                    product: props.product,
                    variant: props.variant,
                    hrefTarget: props.hrefTarget,
                    onclick: props.onclick
                }
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