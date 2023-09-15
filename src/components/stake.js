import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import Image from "next/image";
import { TransactionModal } from "./modal";
import { useEffect, useState } from "react";

export function Stake({ balance, amount, setAmount }) {
  const [showModal, setShowModal] = useState(false);
  function handleChange(e) {
    if (e.target.value > balance) {
      setAmount(balance);
    } else {
      setAmount(e.target.value);
    }
  }
  function handleStake() {
    setShowModal(true);
  }

  // close modal when clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (event.target.className.includes("backdrop-blur-sm")) {
        setShowModal(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Card className="w-96">
      {showModal && (
        <TransactionModal
          text="Transaction Successful"
          description={`Staked ${amount} SUI.`}
          handleModalClose={() => setShowModal(false)}
        />
      )}
      <CardBody className="">
        <div className="relative">
          <Image
            height={30}
            width={30}
            src="/sui-icon.svg"
            className="absolute top-[14px] left-2"
            alt="icon"
          ></Image>
          <input
            className="pr-14 bg-gray-200 rounded-[12px] border-gray-100 h-[58px] pl-[50px] font-[500] text-[16px] leading-[18px] text-gray-800"
            placeholder="SUI Amount"
            size="lg"
            onChange={handleChange}
            value={amount}
          ></input>
          <button
            onClick={() => setAmount(balance)}
            className="absolute right-5 top-[10px] text-blue-600 font-bold hover:bg-blue-100 p-2 hover:rounded-lg"
          >
            MAX
          </button>
        </div>
        <div className="flex justify-end pr-4 mt-2 font-semibold">
          Balance : {balance} SUI
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <Button onClick={handleStake} variant="gradient" color="blue" fullWidth>
          Stake
        </Button>
      </CardFooter>
    </Card>
  );
}
