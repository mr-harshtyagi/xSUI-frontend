"use client";
import { Stake } from "../../components/stake";
import { Unstake } from "../../components/unstake";
import { useEffect, useState } from "react";
import Image from "next/image";
import FaqCard from "../../components/faq";
import Footer from "@/components/footer";

export default function AppPage() {
  const [activeTab, setActiveTab] = useState("stake");
  const [stakeAmount, setStakeAmount] = useState();
  const [unstakeAmount, setUnstakeAmount] = useState();
  const [suiBalance, setSuiBalance] = useState(0);
  const [stakedSuiBalance, setStakedSuiBalance] = useState(0);

  function getBalances() {
    // TODO: get balances from the blockchain 🟡
    return {
      suiBalance: 2000,
      stakedSuiBalance: 1000,
    };
  }

  useEffect(() => {
    const { suiBalance, stakedSuiBalance } = getBalances();
    setSuiBalance(suiBalance);
    setStakedSuiBalance(stakedSuiBalance);
  }, []);

  const activeTabStyle = "bg-gray-900 text-white";
  const inactiveTabStyle = "bg-white text-black";

  return (
    <div className="bg-[url(/background.jpg)] bg-no-repeat bg-cover w-full">
      {/* <img src="/background.jpg" className="absolute z-[-200]" /> */}
      <div className="flex justify-between px-2 sm:px-10 py-4">
        <a href="/">
          <Image
            height={32}
            width={32}
            className="h-8 ml-4 w-auto scale-[3.5]"
            src="next.svg"
            alt=""
          />
        </a>
        <button className=" bg-white text-black p-3 rounded-[25px] font-bold">
          Connect wallet
        </button>
      </div>
      <div className="text-center pt-5 font-bold text-white text-[60px]">
        {" "}
        Liquid Staking SUI
      </div>
      <div className="text-center  font-bold text-white text-[24px]">
        {" "}
        Receive xSUI after staking your SUI
      </div>
      <div className="flex flex-col justify-center items-center pt-5 ">
        <div className="flex justify-between w-96" size="lg" fullWidth>
          <button
            onClick={() => setActiveTab("stake")}
            className={`${
              activeTab === "stake" ? activeTabStyle : inactiveTabStyle
            } m-4 py-3 px-14 rounded-2xl border-gray-900  shadow-none hover:bg-gray-900 hover:text-white`}
          >
            Stake
          </button>
          <button
            onClick={() => setActiveTab("unstake")}
            className={`${
              activeTab === "unstake" ? activeTabStyle : inactiveTabStyle
            } m-4 py-3 px-14 rounded-2xl border-gray-900  shadow-none hover:bg-gray-900 hover:text-white`}
          >
            Unstake
          </button>
        </div>
        {activeTab == "stake" ? (
          <Stake
            balance={suiBalance}
            amount={stakeAmount}
            setAmount={setStakeAmount}
          />
        ) : (
          <Unstake
            balance={stakedSuiBalance}
            amount={unstakeAmount}
            setAmount={setUnstakeAmount}
          />
        )}
      </div>
      <div className="flex flex-col justify-center items-center">
        <FaqCard />
      </div>
      <br />
      <Footer />
    </div>
  );
}
