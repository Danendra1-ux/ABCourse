// src/pages/QuizPage1.jsx
import React from "react";
import Quiz from "./components/Quiz";
import quizPastPerfectTense from "./soal/quizPastPerfectTense";

export default function QuizPastPerfectTense() {
  return <Quiz id={11} data={quizPastPerfectTense} />;
}
