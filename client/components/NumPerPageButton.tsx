import { Listbox, Transition } from "@headlessui/react";
import { SelectorIcon, CheckIcon } from "@heroicons/react/outline";
import React, { Fragment, useState } from "react";
import { NUM_ITEMS_PER_PAGE } from "../constants";
import { SelectorHead } from "./selector/SelectorHead";

interface NumPerPageButtonProps {
  updateLimit: (limit: number) => void;
  limit: number;
}

export const NumPerPageButton: React.FC<NumPerPageButtonProps> = ({
  updateLimit,
  limit,
}) => {
  const [selected, setSelected] = useState(limit);

  const updateSelected = (newNum: number) => {
    updateLimit(newNum);
    setSelected(newNum);
  };

  return (
    <SelectorHead selected={selected} updateSelected={updateSelected}>
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
                  className={`${active ? "text-green-300" : "text-green-300"}
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                >
                  <CheckIcon className="w-5 h-5" aria-hidden="true" />
                </span>
              ) : null}
            </>
          )}
        </Listbox.Option>
      ))}
    </SelectorHead>
  );
};
