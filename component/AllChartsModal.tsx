import React from "react";

import { chartTypesInfo } from "../util/sectionDescriptions";
import SectionLogo from "./SectionLogo";
import { fullUrlToInternalLink } from "../util/utils";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

type AllChartsModalProps = {
  setIsOpen: (arg: boolean) => void;
  isOpen: boolean;
};

export const AllChartsModal = (props: AllChartsModalProps) => {
  const [name, setName] = React.useState("");

  const logoList = chartTypesInfo.map((chart, i) => {
    return (
      <div
        style={{ width: 75, height: 75 }}
        className="relative my-4 mx-2 cursor-pointer"
        key={i}
        onMouseEnter={() => setName(chart.label)}
        onMouseLeave={() => setName("")}
      >
        <Link href={fullUrlToInternalLink(chart.reactURL)}>
          <SectionLogo chartLogo={chart.logo} />
        </Link>
      </div>
    );
  });

  return (
    <Transition appear show={props.isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={() => props.setIsOpen(false)}
      >
        <div className="min-h-screen px-0 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block  overflow-hidden text-left align-middle transition-all transform bg-red-200">
              {/* X to close the modal */}
              <span
                className="text-white cursor-pointer text-4xl absolute top-0 right-0 mr-10 mt-10 p-12"
                onClick={() => props.setIsOpen(false)}
              >
                &#10005;
              </span>

              {/* Logo and label */}
              <div className="flex flex-col max-w-4xl">
                <div className="bg-green-200 flex justify-center flex-wrap">
                  {logoList}
                </div>
                <span className="text-white text-medium h-14 bg-black p-4 text-center">
                  {name}
                </span>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};
