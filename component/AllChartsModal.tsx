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

// export const AllChartsModal = (props: AllChartsModalProps) => {
//   const [name, setName] = React.useState("");

//   const logoList = chartTypesInfo.map((chart, i) => {
//     return (
//       <div
//         key={i}
//         className="menuModalLogo"
//         onMouseEnter={() => setName(chart.label)}
//         onMouseLeave={() => setName("")}
//       >
//         <Link href={fullUrlToInternalLink(chart.reactURL)}>
//           <SectionLogo chartType={chart.logo} />
//         </Link>
//       </div>
//     );
//   });

//   return (
//     <Transition appear show={props.isOpen} as={Fragment}>
//       <Dialog
//         as="div"
//         className="fixed inset-0 z-10 overflow-y-auto"
//         onClose={() => props.setIsOpen(false)}
//       >
//         <div className="min-h-screen px-4 text-center">
//           <Transition.Child
//             as={Fragment}
//             enter="ease-out duration-200"
//             enterFrom="opacity-0"
//             enterTo="opacity-100"
//             leave="ease-in duration-200"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             <Dialog.Overlay className="fixed inset-0" />
//           </Transition.Child>

//           {/* This element is to trick the browser into centering the modal contents. */}
//           <span
//             className="inline-block h-screen align-middle"
//             aria-hidden="true"
//           >
//             &#8203;
//           </span>
//           <Transition.Child
//             as={Fragment}
//             enter="ease-out duration-300"
//             enterFrom="opacity-0 scale-95"
//             enterTo="opacity-100 scale-100"
//             leave="ease-in duration-200"
//             leaveFrom="opacity-100 scale-100"
//             leaveTo="opacity-0 scale-95"
//           >
//             <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
//               <p
//                 className="menuModalCloseModalButton"
//                 onClick={() => props.setIsOpen(false)}
//               >
//                 &#10005;
//               </p>
//               <div className="menuModalAllLogoContainer">{logoList}</div>
//               <p className="menuModalCharName">{name}</p>
//             </div>
//           </Transition.Child>
//         </div>
//       </Dialog>
//     </Transition>
//   );
// };
