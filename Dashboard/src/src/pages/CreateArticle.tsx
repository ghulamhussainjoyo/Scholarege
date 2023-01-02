import React, { useState } from "react";
import { Notification, Tabs } from "@mantine/core";
import Scholarshop from "../components/CreateArticle/Scholarshop";
import Oppertunity from "../components/CreateArticle/Oppertunity";
import { Card, Button } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks/redux.hooks";
import { IconX } from "@tabler/icons";
import { setNotifaction } from "../redux/slice/notification.slice";

// -------- Component ---------------->
function CreateArticle() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { article } = useAppSelector((state) => state.article);
  // const { message, error } = useAppSelector((state) => state.notification)
  const [activeTab, setActiveTab] = useState<string | null>("first");

  // Handlers
  const onNextClickHandler = () => {
    if (
      article?.heading &&
      article?.description &&
      article?.region &&
      article?.category
    ) {
      navigate("/editor");
    } else {
      dispatch(
        setNotifaction({ message: "Please fill all the fileds", error: true })
      );
    }
  };

  return (
    <section className="min-h-[90vh] p-10">
      <Card className="">
        <section className="h-full">
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

        <div className="flex justify-between">
          <div></div>
          <Button className="" onClick={onNextClickHandler}>
            Next
          </Button>
        </div>
      </Card>
    </section>
  );
}

export default CreateArticle;
