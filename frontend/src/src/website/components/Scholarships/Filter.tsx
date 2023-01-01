import React, { ChangeEvent } from "react";
import { BiReset } from "react-icons/bi";
import { Accordion } from "flowbite-react";
import { ActionIcon } from "@mantine/core";
import MyFilterCheckbox from "./MyFilterCheckbox";

const FilterSubHeading: React.FC<{ subHeading: string }> = ({ subHeading }) => {
  return (
    <h2 className="text-lg font-semibold float-left sm:mt-5">{subHeading}</h2>
  );
};

const Filter: React.FC<{
  iconColor: string;
  scholarshipFilter: { [key: string]: boolean };
  oppertunitiesFilter: { [key: string]: boolean };
  regionFilter: { [key: string]: boolean };
  handleScholarshipFilterChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleOppertunityFilterChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleRegionFilterChange: (e: ChangeEvent<HTMLInputElement>) => void;
}> = ({
  iconColor,
  scholarshipFilter,
  oppertunitiesFilter,
  regionFilter,
  handleScholarshipFilterChange,
  handleOppertunityFilterChange,
  handleRegionFilterChange,
}) => {
  return (
    <section className="hidden lg:flex flex-col " id="checkbox">
      <div className="flex items-center  justify-between mx-1 mb-4">
        <h1 className="text-orange-theme-royal-orange 2xl:text-4xl xl:text-3xl lg:text-2xl font-bold float-left">
          Filter
        </h1>

        <ActionIcon>
          <BiReset size={20} color={iconColor} />
        </ActionIcon>
      </div>

      <Accordion defaultValue="customization" color="red">
        {/* Scholarships */}
        <Accordion.Panel>
          <Accordion.Title>Scholarships</Accordion.Title>
          <Accordion.Content className="space-y-4">
            {/* checkbox */}

            {Object.entries(scholarshipFilter).map(([key, value]) => (
              <MyFilterCheckbox
                key={key}
                name={key}
                checked={value}
                onChange={handleScholarshipFilterChange}
              />
            ))}

            {/* ---------- */}
          </Accordion.Content>
        </Accordion.Panel>

        {/* Oppertunities */}
        <Accordion.Panel>
          <Accordion.Title>Oppertunities</Accordion.Title>
          <Accordion.Content className="space-y-4">
            {/* checkbox */}
            {/* <MyFilterCheckbox key={"Conference"} name="Conference" />

            <MyFilterCheckbox key={"Events"} name="Events" />

            <MyFilterCheckbox
              key={"Exchange Program"}
              name="Exchange Program"
            />

            <MyFilterCheckbox key={"Fellowships"} name="Fellowships" />

            <MyFilterCheckbox key={"Interships"} name="Interships" />

            <MyFilterCheckbox key={"Summer Program"} name="Summer Program" />

            <MyFilterCheckbox
              key={"Professional Development"}
              name="Professional Development"
            />

            <MyFilterCheckbox
              key={"Training Program"}
              name="Training Program"
            />

            <MyFilterCheckbox key={"Workshops"} name="Workshops" /> */}

            {Object.entries(oppertunitiesFilter).map(([key, value]) => (
              <MyFilterCheckbox
                key={key}
                name={key}
                checked={value}
                onChange={handleOppertunityFilterChange}
              />
            ))}

            {/* ---------- */}
          </Accordion.Content>
        </Accordion.Panel>

        {/* Region */}
        <Accordion.Panel>
          <Accordion.Title>Region</Accordion.Title>
          <Accordion.Content className="space-y-4">
            {/* <MyFilterCheckbox key={"USA"} name="USA" />
            <MyFilterCheckbox key={"UK"} name="UK" />
            <MyFilterCheckbox key={"Canada"} name="Canada" />
            <MyFilterCheckbox key={"China"} name="China" />
            <MyFilterCheckbox key={"Austrailia"} name="Austrailia" />
            <MyFilterCheckbox key={"France"} name="France" />
            <MyFilterCheckbox key={"Russia"} name="Russia" />
            <MyFilterCheckbox key={"Germany"} name="Germany" />
            <MyFilterCheckbox key={"Japan"} name="Japan" />
            <MyFilterCheckbox key={"Spain"} name="Spain" /> */}
            {Object.entries(regionFilter).map(([key, value]) => (
              <MyFilterCheckbox
                key={key}
                name={key}
                checked={value}
                onChange={handleRegionFilterChange}
              />
            ))}

            {/* ---------- */}
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </section>
  );
};

export default Filter;
