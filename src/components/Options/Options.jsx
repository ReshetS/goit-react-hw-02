import style from "./Options.module.css";

export default function Options({
  options,
  onFeedbackBtnClick,
  onResetBtnClick,
  isResetBtnVisible,
}) {
  return (
    <div className={style.optionsWrapper}>
      {options.map((option) => (
        <button
          className={style.btn}
          key={option}
          onClick={() => onFeedbackBtnClick(option)}
        >
          {option}
        </button>
      ))}
      {isResetBtnVisible && (
        <button className={style.btn} onClick={onResetBtnClick}>
          Reset
        </button>
      )}
    </div>
  );
}
