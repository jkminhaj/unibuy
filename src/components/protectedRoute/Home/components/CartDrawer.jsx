const CartDrawer = () => {
    return (
        <div className="drawer drawer-end z-10">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
            </div>
            <div className="drawer-side overflow-x-hidden">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                {/* main drawer contents */}
                <section className="menu p-4 w-96 min-h-full bg-base-200 text-base-content">
                    yo yo chiki chiki
                </section>
            </div>
        </div>
    );
};

export default CartDrawer;