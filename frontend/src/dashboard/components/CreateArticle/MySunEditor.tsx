import React, { useRef, useState, ChangeEvent } from "react";
import { Button, Card } from "flowbite-react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File
import plugins from "suneditor/src/plugins";
import { CopyButton, ActionIcon, Tooltip } from "@mantine/core";
import { BiCheck, BiCopy } from "react-icons/bi";
import axios from "axios";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../src/redux/hooks/redux.hooks";
import { setArticleValue } from "../../../src/redux/slice/ArticleSlice";
import { useNavigate } from "react-router-dom";
import { setNotifaction } from "../../../src/redux/slice/notification.slice";
import { useCreateArticleMutation } from "../../../src/redux/service/article.service";
import { API_URL } from "../../../src/redux/service/api.service";
// import { IconCopy, IconCheck } from '@tabler/icons';
import { Modal } from "@mantine/core";

function MySunEditor({
  setCurrentPage,
}: {
  setCurrentPage: (event: string) => void;
}) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const { article } = useAppSelector((state) => state.article);
  const [createArticle] = useCreateArticleMutation();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [generatedImageUrl, setGeneratedImageUrl] = useState(() =>
    localStorage.getItem("last-url-generated")
  );

  // const [contentFromEditor, setContentFromEditor] = useState<string>();

  // ------------>
  const handleChange = (content: string) => {
    // console.log(content);
    dispatch(setArticleValue({ article: content }));
  };

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      let formData = new FormData();

      formData.append("image", event.target.files[0]);
      const responce = await axios.post(`${API_URL}/image`, formData);
      // console.log("Image->", responce.data);
      if (responce.status === 200) {
        setGeneratedImageUrl(() => {
          localStorage.setItem(
            "last-url-generated",
            `${API_URL}/image/${responce.data.imageName}`
          );
          // return `http://localhost:5000/api/image/get/${responce.data.imageName}`;
          return `${API_URL}/image/${responce.data.imageName}`;
        });
      }
    }
  };

  const onClearClick = () => {
    dispatch(setArticleValue({ article: "" }));
  };

  const onUploadClick = async () => {
    if (
      article?.article &&
      article?.heading &&
      article?.description &&
      article?.region &&
      article?.category
    ) {
      const formData = new FormData();
      formData.append("heading", article.heading);
      formData.append("description", article.description);
      formData.append("category", article.category);
      formData.append("region", article.region);
      formData.append("article", article.article);
      formData.append("userID", "2724ac71-3a17-420c-a3ca-a07ee08b68f5");

      const data = {
        heading: article.heading,
        description: article.description,
        category: article.category,
        region: article.region,
        article: article.article,
        userID: "2724ac71-3a17-420c-a3ca-a07ee08b68f5",
      };

      createArticle(data)
        .unwrap()
        .then((response) => response.success && navigate("/articles"))
        .catch((error) => {
          console.log("andar error", error);
          dispatch(
            setNotifaction({
              message: error.error,
              error: true,
            })
          );
        });
    }
  };

  // console.log(article?.article);

  return (
    <React.Fragment>
      <Modal
        size="auto"
        opened={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        title="Introduce yourself!"
      >
        <p
          className="article-design"
          dangerouslySetInnerHTML={{
            __html: article?.article || ``,
          }}
        ></p>
      </Modal>

      <Card className="mx-2 my-5">
        {/* {JSON.stringify(article)} */}

        <section className="min-h-[100%]">
          <section className="mb-4">
            <div className="flex gap-4">
              <input
                className="flex-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder gray-400"
                id="file_input"
                type="file"
                accept="image/png,image/gif,image/jpeg,image/jpg"
                onChange={handleFileChange}
              />
              <Button>Default</Button>
            </div>

            <label
              className="flex items-center mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="file_input"
            >
              <span className="text-base mr-2 font-bold">image url:</span>
              {generatedImageUrl}
              {generatedImageUrl && (
                <CopyButton value={generatedImageUrl} timeout={2000}>
                  {({ copied, copy }) => (
                    <Tooltip
                      label={copied ? "Copied" : "Copy"}
                      withArrow
                      position="right"
                    >
                      <ActionIcon
                        color={copied ? "teal" : "gray"}
                        onClick={copy}
                      >
                        {copied ? <BiCheck size={16} /> : <BiCopy size={16} />}
                      </ActionIcon>
                    </Tooltip>
                  )}
                </CopyButton>
              )}
            </label>
          </section>

          <SunEditor
            defaultValue={article?.article}
            height={`${window.innerHeight - 0.5 * window.innerHeight}px`}
            setAllPlugins={false}
            onChange={handleChange}
            onImageUploadBefore={(
              file: File[],
              info: object,
              uploadHandler
            ) => {
              // console.log(file)
              // console.log(info);
              // console.log(uploadHandler);
              uploadHandler(file);
            }}
            onImageUpload={(
              targetImgElement: HTMLImageElement,
              index: number,
              state: string,
              imageInfo: object,
              remainingFilesCount: number
            ) => {
              // console.log(targetImgElement);
              // console.log(index);
              // console.log(state);
              // console.log(remainingFilesCount);
            }}
            setOptions={{
              height: "600",
              plugins: plugins,
              buttonList: [
                ["undo", "redo"],
                ["font", "fontSize", "formatBlock"],
                ["paragraphStyle", "blockquote"],
                [
                  "bold",
                  "underline",
                  "italic",
                  "strike",
                  "subscript",
                  "superscript",
                ],
                ["fontColor", "hiliteColor", "textStyle"],
                ["removeFormat"],
                "/", // Line break
                ["outdent", "indent"],
                ["align", "horizontalRule", "list", "lineHeight"],
                ["table", "link", "image", "video", "audio" /** ,'math' */], // You must add the 'katex' library at options to use the 'math' plugin.
                /** ['imageGallery'] */ // You must add the "imageGalleryUrl".
                ["fullScreen", "showBlocks", "codeView"],
                ["preview", "print"],
                ["save", "template"],
                /** ['dir', 'dir_ltr', 'dir_rtl'] */ // "dir": Toggle text direction, "dir_ltr": Right to Left, "dir_rtl": Left to Right
              ],
            }}
          />
        </section>

        <section className="flex justify-between">
          <div className="flex space-x-3">
            {/* <Button className="" onClick={onClearClick}>
              Clear
            </Button> */}
            <Button className="" onClick={onUploadClick}>
              Upload
            </Button>
            <Button className="" onClick={() => setIsPreviewOpen(true)}>
              Preview
            </Button>
          </div>
          <div>
            <Button
              className=""
              onClick={() => setCurrentPage("create-article")}
            >
              Back
            </Button>
          </div>
        </section>
      </Card>
    </React.Fragment>
  );
}

export default MySunEditor;
