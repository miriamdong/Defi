// import UploadFile from '../../components/storage/UploadFile'
import Upload from "../../components/storage/AWS";
import Link from "next/link";
import React, { useRef, useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useUser } from "../../firebase/useUser";
import { firebaseClient } from "../../firebase/initFirebase";
import { useRouter } from "next/router";
import firebase from "firebase/app";
import "firebase/auth";
import Escrow from "../../components/Meta/Escrow";
import Createsteps from "./createsteps";
import Kyc from "../../components/Meta/Kyc";

const steps = [
  { id: "01", name: "KYC", href: "KYC", status: "current" },
  { id: "02", name: "Create form", href: "create", status: "upcoming" },
  { id: "03", name: "Shared Wallet", href: "sharedwallet", status: "upcoming" },
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
                    <h1 className="text-6xl leading-6 font-medium text-gray-900 p-4">
                    Join Our KYC Program
                    </h1>
                    <p className="mt-10 mb-0 text-sm text-gray-500">
                      This information will be displayed publicly so be careful what you share.
                    </p>
                  </div>
                </div>
                <Createsteps steps={steps} />
                <div className="pt-8">
                 
                  <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    <div className="sm:col-span-6">
                      <label
                        htmlFor="Project_name"
                        className="block text-lg font-medium text-gray-700">
                        My Wallet Address
                      </label>
                      <div className="mt-1">
                        
                        <Kyc />
                      </div>
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
