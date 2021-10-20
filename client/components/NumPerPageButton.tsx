import { Listbox, Transition } from "@headlessui/react";
import { SelectorIcon, CheckIcon } from "@heroicons/react/outline";
import React, { Fragment, useState } from "react";
import { NUM_ITEMS_PER_PAGE } from "../constants";

interface NumPerPageButtonProps {
  updateLimit: (limit: number) => void;
  limit: number;
}

export const NumPerPageButton: React.FC<NumPerPageButtonProps> = ({
  updateLimit,
  limit
}) => {
  const [selected, setSelected] = useState(limit);

  const updateSelected = (newNum: number) => {
    updateLimit(newNum);
    setSelected(newNum);
  };

  return (
    <div className="w-20 h-12">
      <Listbox value={selected} onChange={updateSelected}>
        <div className="relative">
          <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-gray-800 rounded-sm shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-gray-500 sm:text-sm h-12">
            <span className="block truncate">{selected}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <SelectorIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-gray-600 bg-opacity-25 backdrop-filter backdrop-blur-sm rounded-sm shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {NUM_ITEMS_PER_PAGE.map((number, idx) => (
                <Listbox.Option
                  key={idx}
                  className={({ active }) =>
                    `${active ? "text-white bg-gray-700" : "text-gray-400"}
                          cursor-default select-none relative py-2 pl-10 pr-4`
                  }
                  value={number}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`${
                          selected ? "font-medium" : "font-normal"
                        } block truncate`}
                      >
                        {number}
                      </span>
                      {selected ? (
                        <span
                          className={`${
                            active ? "text-green-300" : "text-green-300"
                          }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                        >
                          <CheckIcon className="w-5 h-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};
