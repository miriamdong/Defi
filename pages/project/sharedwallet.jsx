import Upload from "../../components/storage/AWS";
import Link from "next/link";
import React, { useRef, useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Grid from "@material-ui/core/Grid";
import "firebase/auth";
import Escrow from "../../components/Meta/Escrow";
import Createsteps from "./createsteps";
const steps = [
  { id: "01", name: "KYC", href: "KYC", status: "complete" },
  { id: "02", name: "Shared Wallet", href: "sharedwallet", status: "current" },
  { id: "03", name: "Create Form", href: "create", status: "upcoming" },
];
export default function Create() {
  return (
    <>
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 p-40">
        <main className="bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8 divide-y divide-gray-200">
              <div>
                <div className="text-center">
                  <h1 className="text-3xl leading-6 font-medium text-gray-900 p-4">
                    Create Your Shared Wallet
                  </h1>
                  <p className="mt-10 mb-0 text-sm text-gray-500">
                    Multisignature wallets require two or more private keys to sign and send a
                    transaction. The storage method requires multiple cryptographic signatures (a
                    private key’s unique fingerprint) to access the wallet.
                  </p>
                </div>
              </div>
              <Createsteps steps={steps} />
              <div className="pt-8">
                <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-6">
                    <Escrow />
                    <Link href="/project/create">
                      <button
                        type="submit"
                        className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Next
                        <div className="wf-animate-loader-white absolute mx-auto inset-x-0 invisible"></div>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
