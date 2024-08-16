import style from "./Feedback.module.css";

export default function Feedback({ good, bad, neutral, total, positive }) {
  return (
    <ul className={style.feedbackList}>
      <li className={style.feedbackListItem}>Good: {good}</li>
      <li className={style.feedbackListItem}>Neutral: {neutral}</li>
      <li className={style.feedbackListItem}>Bad: {bad}</li>
      <li className={style.feedbackListItem}>Total: {total}</li>
      <li className={style.feedbackListItem}>Positive: {positive}%</li>
    </ul>
  );
}
