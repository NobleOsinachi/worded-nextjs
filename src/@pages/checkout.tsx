
export const metadata = {
    title: "Payment: Successful Payment",
    description: "This will process the payment of the added cart items"
};


type PropsContext = {
    params: {
        id: string;
    };
};
const Checkout = (props: PropsContext) => {
    return (
        <main className="bg-blue-100">
            {/* <ClearUserCart /> */}
            <section className="p-6 md:px-10 lg:px-20">
                <div className="container mx-auto">
                    <div className="px-5 py-7 bg-white shadow-md flex flex-col items-center max-w-xl w-full mx-auto">
                        {/* <CircleCheck className="w-10 h-10" color="#005CD1" /> */}
                        <h2 className="text-xl my-4 font-bold text-black font-lato">Payment Received</h2>
                        <p className="text-sm text-gray-500 font-lato mb-8">We received your <span className="text-black">$300</span>, Scott Beckham </p>
                        <div className="h-[0.5px] w-full bg-gray-400 mb-10" />
                        <h3 className="uppercase font-bold text-md mb-5">Payment Details</h3>
                        <div className="flex max-[300px]:flex-col flex-row justify-between w-full px-5 max-sm:px-2 mb-2">
                            <p className="text-gray-500 text-sm">Payment Amount</p>
                            <p className="text-black text-right text-sm font-semibold">$300</p>
                        </div>
                        <div className="flex  max-[300px]:flex-col flex-row justify-between w-full px-5 max-sm:px-2 mb-2">
                            <p className="text-gray-500 text-sm">Payment Date</p>
                            <p className="text-black text-right text-sm font-semibold">15-03-2023</p>
                        </div>
                        <div className="flex  max-[300px]:flex-col flex-row justify-between w-full px-5 max-sm:px-2 mb-2">
                            <p className="text-gray-500 text-sm">Payment Method</p>
                            <p className="text-black text-right text-sm font-semibold">Bank Transfer *8866</p>
                        </div>
                        <div className="flex  max-[300px]:flex-col flex-row justify-between w-full px-5 max-sm:px-2">
                            <p className="text-gray-500 text-sm">Status</p>
                            <p className="text-black text-right text-sm font-semibold">Successful</p>
                        </div>
                        <div className="h-[0.5px] w-full bg-gray-300 mt-10 mb-12" />
                        <p className="font-bold text-sm mb-12">Thank you for your donation</p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Checkout;
