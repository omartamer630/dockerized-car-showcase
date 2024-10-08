"use client";
import React from "react";
import {
  Combobox,
  Transition,
  ComboboxButton,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption,
} from "@headlessui/react";
import { manufacturers } from "@/constants";
import Image from "next/image";

interface Props {
  setManuFacturer: (value: string) => void;
  manufacturer: string;
}

const SearchManufacturer: React.FC<Props> = ({
  setManuFacturer,
  manufacturer,
}) => {
  const [query, setQuery] = React.useState("");

  const filterMans =
    query === ""
      ? manufacturers
      : manufacturers.filter((man) =>
          man
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="search-manufacturer relative">
      <Combobox value={manufacturer} onChange={setManuFacturer}>
        <div className="relative w-full">
          <ComboboxButton className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="car logo"
            />
          </ComboboxButton>

          <ComboboxInput
            className="search-manufacturer__input"
            displayValue={(item: string) => item}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Car type"
          />

          <Transition
            as={React.Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <ComboboxOptions
              className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
              static
            >
              {filterMans.length === 0 && query !== "" ? (
                <ComboboxOption
                  value={query}
                  className="search-manufacturer__option"
                >
                  Couldn't find {query}
                </ComboboxOption>
              ) : (
                filterMans.map((item) => (
                  <ComboboxOption
                    key={item}
                    value={item}
                    className={({ active }) =>
                      `relative search-manufacturer__option ${
                        active ? "bg-primary-blue text-white" : "text-gray-900"
                      }`
                    }
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {item}
                        </span>
                        {selected && (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-primary-purple"
                            }`}
                          >
                            ✔️
                          </span>
                        )}
                      </>
                    )}
                  </ComboboxOption>
                ))
              )}
            </ComboboxOptions>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
