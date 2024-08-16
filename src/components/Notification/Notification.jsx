import style from "./Notification.module.css";

export default function Notification({ children }) {
  return <p className={style.notification}>{children}</p>;
}
