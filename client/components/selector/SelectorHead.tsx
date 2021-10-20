import { Listbox, Transition } from "@headlessui/react";
import { SelectorIcon } from "@heroicons/react/outline";
import React, { Fragment } from "react";

interface SelectorHeadProps {
  selected: any;
  updateSelected: any;
}

export const SelectorHead: React.FC<SelectorHeadProps> = ({
  selected,
  updateSelected,
  children,
}) => {
  return (
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
            {children}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};
