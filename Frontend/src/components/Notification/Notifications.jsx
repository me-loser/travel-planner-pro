import React, { useContext } from "react";
import classes from "../../styles/Notification.module.css";
import Notification from "./Notification";
import NotificationContext from "../../Store/Notification-context";

const Notifications = () => {
  const notificationsCtx = useContext(NotificationContext);
  return (
    <div className={`${classes.container} ${classes.buttomright_1}`}>
      {notificationsCtx.typeMessage.map((message) => (
        <Notification {...message} key={message.id} />
      ))}
    </div>
  );
};

export default Notifications;
