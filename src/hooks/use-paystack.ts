import React from "react";
import { usePaystackPayment } from "react-paystack";

const usePaystack = () => {
  const config = {
    reference: new Date().getTime().toString(),
    publicKey: "pk_test_5510f190448a45cf6f18a40866266b6294c24740",
  };
  const initializePayment = usePaystackPayment(config);

  const handlePayment = (data: {
    email: string;
    amount: number;
    onSuccess: (reference: any) => void;
    onClose: () => void;
  }) => {
    initializePayment({
      onClose: data.onClose,
      onSuccess: data.onSuccess,
      config: { ...config, ...data, amount: Number(data.amount) * 100 },
    });
  };

  return { handlePayment };
};

export default usePaystack;
