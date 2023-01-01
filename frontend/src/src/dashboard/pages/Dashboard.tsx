import React from "react";
import MySideNavigation from "../components/dashboard/MySideNavigation";
import { Notification } from "@mantine/core";
import { IconX } from "@tabler/icons";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/redux.hooks";
import { setNotifactionError } from "../../redux/slice/notification.slice";
import { useGetAllArticlesQuery } from "../../redux/service/article.service";
import MyMainContent from "../components/dashboard/MyMainContent";
import CreateArticle from "./CreateArticle";
import MySunEditor from "../components/CreateArticle/MySunEditor";
import Articles from "./Articles";

function Dashboard() {
  const [currentPage, setCurrentPage] = React.useState("article");
  const dispatch = useAppDispatch();
  const { message, error } = useAppSelector((state) => state.notification);

  function getContentPage() {
    switch (currentPage) {
      case "create-article":
        return <CreateArticle setCurrentPage={setCurrentPage} />;
      case "editor":
        return <MySunEditor setCurrentPage={setCurrentPage} />;
      case "articles":
        return <Articles />;
      default:
        return <CreateArticle setCurrentPage={setCurrentPage} />;
    }
  }

  return (
    <section className="flex">
      {error && (
        <Notification
          className="absolute top-5 right-5 w-1/2"
          icon={<IconX size={18} />}
          color="red"
          onClose={() => dispatch(setNotifactionError(false))}
        >
          {message}
        </Notification>
      )}

      <p>dashboard</p>

      <aside className="w-48">
        <MySideNavigation handleChange={setCurrentPage} />
      </aside>

      <div className="flex-1">
        <MyMainContent children={getContentPage()} />
      </div>
    </section>
  );
}

export default Dashboard;
