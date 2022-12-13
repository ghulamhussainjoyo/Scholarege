import { Checkbox, Label } from 'flowbite-react'
import React from 'react'
import { BiReset } from 'react-icons/bi'
import { Accordion } from 'flowbite-react';
import { ActionIcon } from '@mantine/core';
import MyFilterCheckbox from './MyFilterCheckbox';

const FilterSubHeading:
    React.FC<{ subHeading: string }> = ({ subHeading }) => {
        return (
            <h2 className='text-lg font-semibold float-left sm:mt-5'>{subHeading}</h2>
        )
    }




const Filter: React.FC<{ iconColor: string }> = ({ iconColor }) => {

    return (
        <section
            className="hidden lg:flex flex-col "
            id="checkbox"
        >
            <div className='flex items-center  justify-between mx-1 mb-4'>
                <h1 className='text-orange-theme-royal-orange 2xl:text-4xl xl:text-3xl lg:text-2xl font-bold float-left'>Filter</h1>

                <ActionIcon>
                    <BiReset
                        size={20}
                        color={iconColor}
                    />
                </ActionIcon>
            </div>


            <Accordion defaultValue="customization" color='red'>

                {/* Scholarships */}
                <Accordion.Panel>
                    <Accordion.Title>
                        Scholarships
                    </Accordion.Title>
                    <Accordion.Content className='space-y-4'>
                        {/* checkbox */}

                        <MyFilterCheckbox
                            key={"Doctoral"}
                            name='Doctoral'
                        />


                        <MyFilterCheckbox
                            key={"Fully Funded"}
                            name='Fully Funded'
                        />

                        <MyFilterCheckbox
                            key={"Grudate"}
                            name='Grudate'
                        />

                        <MyFilterCheckbox
                            key={"Inrermediate"}
                            name='Inrermediate'
                        />

                        <MyFilterCheckbox
                            key={"Masters"}
                            name='Masters'
                        />
                        <MyFilterCheckbox
                            key={"Undergraduate"}
                            name='Undergraduate'
                        />

                        {/* ---------- */}
                    </Accordion.Content>
                </Accordion.Panel>

                {/* Oppertunities */}
                <Accordion.Panel>
                    <Accordion.Title>
                        Oppertunities
                    </Accordion.Title>
                    <Accordion.Content className='space-y-4'>
                        {/* checkbox */}
                        <MyFilterCheckbox
                            key={"Conference"}
                            name='Conference'
                        />

                        <MyFilterCheckbox
                            key={"Events"}
                            name='Events'
                        />


                        <MyFilterCheckbox
                            key={"Exchange Program"}
                            name='Exchange Program'
                        />
                        <MyFilterCheckbox
                            key={"Fellowships"}
                            name='Fellowships'
                        />

                        <MyFilterCheckbox
                            key={"Interships"}
                            name='Interships'
                        />



                        <MyFilterCheckbox
                            key={"Summer Program"}
                            name='Summer Program'
                        />


                        <MyFilterCheckbox
                            key={"Training Program"}
                            name='Training Program'
                        />

                        <MyFilterCheckbox
                            key={"Workshops"}
                            name='Workshops'
                        />





                        {/* ---------- */}
                    </Accordion.Content>
                </Accordion.Panel>

                {/* Region */}
                <Accordion.Panel>
                    <Accordion.Title>
                        Region
                    </Accordion.Title>
                    <Accordion.Content className='space-y-4'>
                        {/* checkbox */}
                        <MyFilterCheckbox
                            key={"Asia"}
                            name='Asia'
                        />
                        <MyFilterCheckbox
                            key={"Africa"}
                            name='Africa'
                        />

                        <MyFilterCheckbox
                            key={"Australia"}
                            name='Australia'
                        />

                        <MyFilterCheckbox
                            key={"Middle East"}
                            name='Middle East'
                        />


                        <MyFilterCheckbox
                            key={"USA"}
                            name='USA'
                        />


                        {/* ---------- */}
                    </Accordion.Content>
                </Accordion.Panel>



            </Accordion>



        </section>
    )
}

export default Filter