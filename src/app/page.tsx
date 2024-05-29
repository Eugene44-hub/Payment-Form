import PaymentForm from "@/components/payment/payment-form";
import GeneralLayout from "@/templates/general-layout";
import React from "react";

const Payment = () => {
  return (
    <main className="py-10">
      <GeneralLayout>
        <p className="text-center">Fill in the form to make your payment</p>
        <div className="my-5">
          <PaymentForm />
        </div>
        <p className="text-center">The password is 99887788</p>
      </GeneralLayout>
    </main>
  );
};

export default Payment;
