import { Button, Card, Checkbox, Label, Textarea, TextInput } from 'flowbite-react'
import React from 'react'

function Contact() {
  return (

    <body className='relative'>

      <header className='mx-32 4xl:mx-40 max-w-screen-3xl'>

        <h1 className="mt-10 text-4xl font-extrabold text-center tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white 4xl:pt-40">Contact Us</h1>

        <section className='flex items-center justify-center my-20 4xl:translate-y-[50%] 3xl:translate-y-[30%]'>

          <div className='w-full flex relative justify-center  '>
            <img className='w-1/2 h1-1/2' src={require('../asset/images/contact-image-3.png')} alt="" />
          </div>

          <Card className='w-full h-full'>
            <form className="flex flex-col gap-4">
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="email1"
                    value="Your email"
                  />
                </div>
                <TextInput
                  id="email1"
                  type="email"
                  placeholder="name@studycafe.com"
                  required={true}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="subject"
                    value="Your Subject"

                  />
                </div>
                <TextInput
                  id="subject"
                  type="text"
                  placeholder='Let us know how we can help you'
                  required={true}
                />
              </div>

              <div id="textarea">
                <div className="mb-2 block">
                  <Label
                    htmlFor="message"
                    value="Your message"
                  />
                </div>
                <Textarea
                  id="message"
                  placeholder="Leave a message..."
                  required={true}
                  rows={4}
                />
              </div>

              <Button type="submit" color={'#2E2E24'} className="bg-orange-theme-royal-orange hover:bg-orange-theme-Beer text-white">
                Send Message
              </Button>
            </form>
          </Card>

        </section>
      </header>

    </body>
  )
}

export default Contact