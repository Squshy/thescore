import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { DataFilter, Rush } from "../../types";
import { csvURLParser } from "../../utils/csvURLParser";
import { ModalButton } from "./ModalButton";
import download from "downloadjs";
import { rushesToCSV } from "../../utils/rushesToCSV";

interface CSVModalProps {
  isOpen: boolean;
  closeModal: () => void;
  dataFilter: DataFilter;
  rushes: Rush[]
}

export const CSVModal: React.FC<CSVModalProps> = ({
  closeModal,
  isOpen,
  dataFilter,
  rushes
}) => {
  const downloadCurrent = async () => {
    const csvData = await rushesToCSV(rushes);
    download(csvData, `nfl-rushing-${dataFilter.filter}.csv`, csvData.type);
    closeModal();
  };

  const downloadAll = async () => {
    const csvUrl = csvURLParser(dataFilter);
    const csvData = await (await fetch(csvUrl)).blob();
    download(csvData, `nfl-rushing-${dataFilter.filter}-all.csv`, csvData.type);
    closeModal();
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto"
        onClose={closeModal}
      >
        <div className="min-h-screen px-4 text-center bg-gray-900 bg-opacity-10 backdrop-filter backdrop-blur-sm">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25 backdrop-filter backdrop-blur-sm" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-700 shadow-xl rounded-2xl">
              <div className="flex justify-between items-center">
                <Dialog.Title
                  as="h1"
                  className="text-2xl font-medium leading-normal text-blue-300"
                >
                  Save to CSV
                </Dialog.Title>
              </div>
              <div className="mt-2">
                <p className="text-md text-gray-300">
                  Would you like to save the current results, or all currently
                  filtered results to a{" "}
                  <span className="text-blue-300 font-semibold">.csv</span>{" "}
                  file?
                </p>
              </div>

              <div className="mt-4 h-8">
                <div className="-m-2">
                  <ModalButton onClick={downloadCurrent} text="Current" />
                  <ModalButton onClick={downloadAll} text="All" />
                  <ModalButton onClick={closeModal} text="Close" danger />
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};
