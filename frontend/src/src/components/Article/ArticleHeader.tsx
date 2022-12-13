import React, { FC } from 'react'
import { Badge } from 'flowbite-react';
import DividerC from '../MyDivider';

interface ArtcileHeaderProps {
  titleImage: number;
  setTitleImage: (e: number) => void
}
const BageCustom: FC<{ badgeWith: number, name: string, }> = ({ badgeWith, name }) => {
  return (
    <div className={`w-[${badgeWith.toString()}px]`}>
      <Badge
        color={'gray'}
        size="sm">
        {name}
      </Badge>


    </div>
  )
}

const ArtcleHeader2: FC = () => {
  return (
    <header className='m-10'>

      <section>
        <hr className="ml-5 mr-5 h-[1px] bg-gray-100 rounded border-0 dark:bg-gray-700"
        />
        <section className='flex justify-between mx-5 my-2' >
          <div>
            <h6 className='font-semibold'>Date</h6>
            <time className='text-gray-500 font-light text-xs sm:text-sm' dateTime='12-12-2022'>12-12-2022</time>
          </div>

          <section className='flex gap-5'>
            <div className='text-center'>
              <h6 className='font-semibold'>Category</h6>
              <p className='text-gray-500 font-light text-xs sm:text-sm'>Intermediate</p>
            </div>

            <div className='text-center'>
              <h6 className='font-semibold'>Country</h6>
              <p className='text-gray-500 font-light text-xs sm:text-sm'>Pakistan</p>
            </div>
          </section>
        </section>
        <hr className="ml-5 mr-5 h-[1px] bg-gray-100 rounded border-0 dark:bg-gray-700 font-mono"
        />
      </section>


      <h1 className="text-center mb-4 font-extrabold tracking-tighter leading-none text-gray-900 sm:text-4xl md:text-6xl lg:text-8xl dark:text-white">
        Prototyping from best practices for successful prototypes
      </h1>



    </header>
  )
}

function ArticleHeader({ titleImage, setTitleImage }: ArtcileHeaderProps) {
  return <ArtcleHeader2 />

}

export default ArticleHeader


const ArticleHeader1 = () => {
  return (
    <div className='font-owsawald-regular'>
      <header
        className={`sm:mt-10 flex justify-between items-center
    `}>
        <div className='sm:p-10'>



          <h1 className="uppercase sm:font-extrabold sm:text-6xl z-10 text-orange-theme-dark-gunmetal">
            <span>find various kinds of fully-funded
              <span className='text-orange-400'> Scholarship </span>
              including national & Internationaly</span>
          </h1>
          <aside className='flex gap-4 mt-2'>
            <BageCustom
              name='Intermediate'
              badgeWith={80}
            />
            <BageCustom
              name='Pakistan'
              badgeWith={60}
            />
          </aside>

        </div>

        <img
          className='w-full h-full overflow-hidden'
          src={require('../../asset/images/university-syiah-khula.jpg')}
          alt="scholarship"

        />
      </header>
      <hr className="h-px mb-20 bg-gray-200 border-0 dark:bg-gray-700" />
    </div>
  )
}