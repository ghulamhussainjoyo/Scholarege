import React, { useRef, useState, ChangeEvent } from 'react'
import { Button, Card } from 'flowbite-react';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File
import plugins from 'suneditor/src/plugins';
import { CopyButton, ActionIcon, Tooltip } from '@mantine/core';
import { BiCheck, BiCopy } from 'react-icons/bi'
import axios from 'axios';

// import { IconCopy, IconCheck } from '@tabler/icons';


function MySunEditor() {

    const [generatedImageUrl, setGeneratedImageUrl] = useState(() => localStorage.getItem('last-url-generated'));
    const [contentFromEditor, setContentFromEditor] = useState<string>()
    // const contentDivRef = useRef<HTMLDivElement>(null);

    const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            let formData = new FormData();
            formData.append('image', event.target.files[0]);
            const responce = await axios.post('http://localhost:5000/api/image/upload', formData);
            if (responce.status === 200) {
                setGeneratedImageUrl(() => {
                    localStorage.setItem('last-url-generated', `http://localhost:5000/api/image/get/${responce.data.imageName}`);
                    return `http://localhost:5000/api/image/get/${responce.data.imageName}`;
                })
            }
        }
    }

    const handleChange = (content: string) => {
        console.log(content);
        setContentFromEditor(content)

    }


    return (
        <Card className='m-10 max-h-[100vh] bg-red-500'>
            <div className="max-h-[100%]">
                {/* <div ref={contentDivRef}></div> */}

                <section className='mb-4'>

                    <div className='flex gap-4'>
                        <input
                            className="flex-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor- 
                                pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 
                                dark:placeholder gray-400"
                            id="file_input"
                            type="file"
                            accept='image/png,image/gif,image/jpeg,image/jpg'
                            onChange={handleFileChange}
                        />
                        <Button>
                            Default
                        </Button>
                    </div>

                    <label
                        className="flex items-center mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        htmlFor="file_input">
                        <span className='text-base mr-2 font-bold'>image url:</span>
                        {generatedImageUrl}
                        {
                            generatedImageUrl
                            &&
                            <CopyButton value={generatedImageUrl} timeout={2000}>
                                {({ copied, copy }) => (
                                    <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="right">
                                        <ActionIcon color={copied ? 'teal' : 'gray'} onClick={copy}>
                                            {copied ? <BiCheck size={16} /> : <BiCopy size={16} />}
                                        </ActionIcon>
                                    </Tooltip>
                                )}
                            </CopyButton>
                        }


                    </label>
                </section>


                <SunEditor

                    height={`${(window.innerHeight - (0.5 * window.innerHeight))}px`}
                    setAllPlugins={false}
                    onChange={handleChange}
                    onImageUploadBefore={(file: File[], info: object, uploadHandler) => {

                        // console.log(file)
                        // console.log(info);
                        // console.log(uploadHandler);
                        uploadHandler(file);
                    }}
                    onImageUpload={
                        (
                            targetImgElement: HTMLImageElement,
                            index: number,
                            state: string, imageInfo: object,
                            remainingFilesCount: number
                        ) => {
                            console.log(targetImgElement)
                            console.log(index)
                            console.log(state)
                            console.log(remainingFilesCount)
                        }}
                    setOptions={{
                        height: '600',
                        plugins: plugins,
                        buttonList: [
                            ['undo', 'redo'],
                            ['font', 'fontSize', 'formatBlock'],
                            ['paragraphStyle', 'blockquote'],
                            ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
                            ['fontColor', 'hiliteColor', 'textStyle'],
                            ['removeFormat'],
                            '/', // Line break
                            ['outdent', 'indent'],
                            ['align', 'horizontalRule', 'list', 'lineHeight'],
                            ['table', 'link', 'image', 'video', 'audio' /** ,'math' */], // You must add the 'katex' library at options to use the 'math' plugin.
                            /** ['imageGallery'] */ // You must add the "imageGalleryUrl".
                            ['fullScreen', 'showBlocks', 'codeView'],
                            ['preview', 'print'],
                            ['save', 'template'],
                            /** ['dir', 'dir_ltr', 'dir_rtl'] */ // "dir": Toggle text direction, "dir_ltr": Right to Left, "dir_rtl": Left to Right
                        ],

                    }}

                />
            </div>
        </Card>
    )
}

export default MySunEditor