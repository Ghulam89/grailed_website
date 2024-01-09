import React from "react";
// import {
//   PaymentElement,
//   LinkAuthenticationElement,
//   useStripe,
//   useElements,
// } from "@stripe/react-stripe-js";
const Checkout = () => {
  // const stripe = useState();
  // const elements = useElements();

  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   if (!stripe) {
  //     return;
  //   }

  //   const clientSecret = new URLSearchParams(window.location.search).get(
  //     "payment_intent_client_secret"
  //   );

  //   if (!clientSecret) {
  //     return;
  //   }

  //   stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
  //     switch (paymentIntent.status) {
  //       case "succeeded":
  //         setMessage("Payment succeeded!");

  //         break;

  //       case "processing":
  //         setMessage("Your payment is processing");

  //         break;

  //       case "requires_payment_method":
  //         setMessage("Your payment was not successful, please try again.");
  //         break;
  //       default:
  //         setMessage("something went wrong.");
  //     }
  //   });
  // }, [stripe]);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (!stripe || !elements) {
  //     return;
  //   }

  //   setIsLoading(true);

  //   const { error } = await stripe.confirmPayment({
  //     elements,
  //     confirmPayment: {
  //       return_url: "http://localhost:4242/success",
  //     },
  //   });

  //   if (error.type === "card_error" || error.type === "validation_error") {
  //     setMessage(error.message);
  //   } else {
  //     setMessage("An unexpected error occurred");
  //   }

  //   setIsLoading(false);
  // };

  // const handleEmailChange = (event) => {
  //   console.log(event);
  // };

  // const PaymentElementOptions = {
  //   layout: "tabs",
  // };

  return (
    <div className=" container mx-auto py-10">
      {/* <form id="payment.form" onSubmit={handleSubmit}>
        <LinkAuthenticationElement
          id="link-authentication-element"
          onChange={handleEmailChange}
        />
        <PaymentElement id="payment-element" options={PaymentElementOptions} />

        <button disabled={isLoading || !stripe || !elements} id="submit">
          <span id="button-text">
            {isLoading ? (
              <div className="spinner" id="spinner"></div>
            ) : (
              "Pay now"
            )}
          </span>
        </button>
        {message && <div id="">{message}</div>}
      </form> */}

      <div   className=" flex">
        <div className=" w-[50%]">
         <div className=" p-10">
         <h5 className="h6">Shipping Address</h5>
          <div className=" border mt-5 p-4">
            <div className="">
              <p>ghulam mustafa</p>
              <h6>2</h6>
              <h6>state</h6>
              <h6>lahore, state 412100</h6>
              <span>india</span>
            </div>
            <div></div>
          </div>
         </div>
        </div>
        <div className=" w-[50%]">
          <div className=" p-10">
             <div className=" p-4 flex gap-3 border">
              <div>
                <img  src={require('../../assets/images/product1.avif')} className=" w-24 h-24 " alt=""  />
              </div>
              <div>
                <span className=" text-black  font-semibold">Palace</span>
              </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
