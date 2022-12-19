import React from "react";
import MySideNavigation from "../components/dashboard/MySideNavigation";
import DashboardRoutes from "../routes/Dashboard.routes";
import { Notification } from "@mantine/core";
import { IconX } from "@tabler/icons";
import { useAppDispatch, useAppSelector } from "../redux/hooks/redux.hooks";
import {
  setNotifaction,
  setNotifactionError,
} from "../redux/slice/notification.slice";
import { useGetAllArticlesQuery } from "../service/article.service";

function Dashboard() {
  const dispatch = useAppDispatch();
  const { message, error } = useAppSelector((state) => state.notification);
  const { data, isError, isFetching, isLoading } = useGetAllArticlesQuery();

  if (!isFetching) {
    console.log("data--> dashboard start");
    console.log(data?.article);
    console.log("data--> dashboard end");
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

      <aside className="w-64">
        <MySideNavigation />
      </aside>
      <div className="flex-1">
        <DashboardRoutes />
      </div>
    </section>
  );
}

export default Dashboard;
