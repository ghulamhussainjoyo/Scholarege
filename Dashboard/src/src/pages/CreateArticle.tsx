import React, { useState } from 'react'
import { Tabs } from '@mantine/core';
import Scholarshop from '../components/CreateArticle/Scholarshop';
import Oppertunity from '../components/CreateArticle/Oppertunity';
import { Card, Button } from 'flowbite-react'
import { Link } from 'react-router-dom';



// -------- Component ---------------->
function CreateArticle() {

  const [activeTab, setActiveTab] = useState<string | null>('first');

  return (
    <section className='h-64 p-10'>

      <Card className='h-[90vh]'>
        <section className='h-full'>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Create Article
          </h5>
          <Tabs value={activeTab} onTabChange={setActiveTab}>
            <Tabs.List>
              <Tabs.Tab value="first">Scholarship</Tabs.Tab>
              <Tabs.Tab value="second">Oppertunity</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="first">
              <Scholarshop />
            </Tabs.Panel>
            <Tabs.Panel value="second">
              <Oppertunity />
            </Tabs.Panel>
          </Tabs>
        </section>

        <Link to="/editor" className='relative w-full'>
          <Button className='float-right'>
            Next
          </Button>
        </Link>
      </Card>
    </section>
  )
}

export default CreateArticle