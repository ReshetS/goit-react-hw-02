import { useState, useEffect } from "react";
import Header from "../Header/Header";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

const initialFeedback = {
  good: 0,
  neutral: 0,
  bad: 0,
};

function getInitialFeedback() {
  const savedFeedback = window.localStorage.getItem("current-feedback");
  return savedFeedback !== null ? JSON.parse(savedFeedback) : initialFeedback;
}

export default function App() {
  const [feedback, setFeedback] = useState(getInitialFeedback);

  useEffect(() => {
    window.localStorage.setItem("current-feedback", JSON.stringify(feedback));
  }, [feedback]);

  function updateFeedback(feedbackType) {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  }

  function resetFeedback() {
    setFeedback(initialFeedback);
  }
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round(
    ((feedback.good + feedback.neutral) / totalFeedback) * 100
  );

  return (
    <>
      <Header>Sip Happens Café</Header>
      <Description>
        Please leave your feedback about our service by selecting one of the
        options below.
      </Description>
      <Options
        options={["good", "neutral", "bad"]}
        onFeedbackBtnClick={updateFeedback}
        onResetBtnClick={resetFeedback}
        isResetBtnVisible={totalFeedback > 0}
      />
      {totalFeedback ? (
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={totalFeedback}
          positive={positiveFeedback}
        />
      ) : (
        <Notification>No feedback yet</Notification>
      )}
    </>
  );
}
