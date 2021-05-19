// import UploadFile from '../../components/storage/UploadFile'
import Upload from "../../components/storage/AWS";
import Link from "next/link";
import React, { useRef, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "firebase/auth";
import Escrow from "../../components/Meta/Escrow";
import Createsteps from "./createsteps";
import Kyc from "../../components/Meta/Kyc";
import GoogleMaps from "../../components/CountrySelect";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import CountrySelect from "../../components/CountrySelect";

const steps = [
  { id: "01", name: "KYC", href: "KYC", status: "current" },
  { id: "02", name: "Shared Wallet", href: "sharedwallet", status: "upcoming" },
  { id: "03", name: "Create Form", href: "create", status: "upcoming" },
];
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function Create() {
  const classes = useStyles();
  return (
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 p-40">
      <main className="bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8 divide-y divide-gray-200">
            <div>
              <div className="text-center">
                <h1 className="text-4xl leading-8 font-medium text-purple-700 p-4">
                  START RASING TODAY
                </h1>
                Built by founders for founders
                <p className="mt-10 mb-0 text-sm text-gray-500">
                  This information will be displayed publicly so be careful what you share.
                </p>
              </div>
            </div>
            <Createsteps steps={steps} />
            <div className="pt-8 text-lg font-semibold">
              <div className="mt-6 grid grid-flow-col grid-rows-1 grid-cols-4 gap-4">
                <div className="col-start-2 col-span-2">
                  Let's get to know each other...
                  <label htmlFor="Company Name" className="text-sm font-medium text-gray-900">
                    Where is your company?
                  </label>
                  <CountrySelect />
                  <div className="mt-6">
                    <label htmlFor="Conpany Name" className="text-sm font-medium text-gray-900">
                      What is your Company name?
                    </label>
                    <div className="relative w-full ">
                      <div className="bg-white my-2 w-full rounded antialiased focus:bg-white focus:border-blue-300 border-blue-100 border-2 focus:ring-1 focus:ring-blue-300 false">
                        <div className="form-group">
                          <div className={classes.margin}>
                            <Grid container spacing={1} alignItems="flex-end">
                              <Grid item>
                                <AccountCircle />
                              </Grid>
                              <Grid item>
                                <TextField
                                  className="text-cyan-600"
                                  id="input-with-icon-grid"
                                  label="Company Name..."
                                />
                              </Grid>
                              <Grid item>
                                <Link href="/project/sharedwallet">
                                  <button
                                    type="submit"
                                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    Next
                                    <div className="wf-animate-loader-white absolute mx-auto inset-x-0 invisible"></div>
                                  </button>
                                </Link>
                              </Grid>
                            </Grid>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-5">
              <div className="flex justify-end"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
