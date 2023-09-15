"use client";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export default function FaqCard() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <Card className=" mt-6 w-96">
      <CardBody>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mb-4 h-12 w-12 text-gray-900"
        >
          <path
            fillRule="evenodd"
            d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
            clipRule="evenodd"
          />
          <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
        </svg>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Have a question? We&apos;re here to help.
        </Typography>
        <Accordion open={open === 1}>
          <AccordionHeader onClick={() => handleOpen(1)}>
            How to get xSUI?
          </AccordionHeader>
          <AccordionBody>
            Its very simple, you connect your wallet, select your SUI tokens and
            then click Stake. Accept the transaction in your wallet. You will
            receive xSUI in your wallet. You are now ready to use within DeFi.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2}>
          <AccordionHeader onClick={() => handleOpen(2)}>
            How to Unstake Your xSUI?
          </AccordionHeader>
          <AccordionBody>
            Make sure your xSUI if used in DeFi is back in your wallet before
            moving forward. Connect to Ascendancy with your wallet. Select the
            amount of xSUI you would like to Unstake. Then click on “Unstake”
            button. Approve the transaction in your wallet. You will now get
            back your SUI tokens.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3}>
          <AccordionHeader onClick={() => handleOpen(3)}>
            Why xSUI?
          </AccordionHeader>
          <AccordionBody>
            Liquid staking allows you to support the SUI ecosystem through
            staking, to ensure its network remains secure. It also allows you to
            earn SUI network rewards, but also allows you to participate within
            DeFi to allow you to compound your daily staked rewards within other
            platforms.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 4}>
          <AccordionHeader onClick={() => handleOpen(4)}>
            What is Ascendancy?
          </AccordionHeader>
          <AccordionBody>
            Ascendancy protocols are governed by the Ascendancy DAO - this means
            there is no central point for making decisions, and there is no one
            person who has access, control, or decision power to define what to
            do with users’ tokens. All decisions with respect to the protocol
            are voted up by the DAO, and all ACD holders may vote.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 5}>
          <AccordionHeader onClick={() => handleOpen(5)}>
            Are staking rewards staked automatically?
          </AccordionHeader>
          <AccordionBody>
            Yes, they are distributed evenly between validators upon execution
            of your request to stake SUI.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 6}>
          <AccordionHeader onClick={() => handleOpen(6)}>
            What fees does Ascendancy charge?
          </AccordionHeader>
          <AccordionBody>
            The fee structure of Ascendancy is as described below : {"\n"}
            Deposit Fee - 0% {"\n"}
            Unstake (Waiting 2-4 epochs wait time) - 0% {"\n"}
            Instant Unstake - 0.1 - 9% {"\n"}
            Commission - 8% on rewards
          </AccordionBody>
        </Accordion>
      </CardBody>
    </Card>
  );
}

// paste here
import React from "react";

export function DefaultAccordion() {
  return <></>;
}
