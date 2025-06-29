// src/pages/QuizPage1.jsx
import React from "react";
import Quiz from "./components/Quiz";
import quizPrepositions from "./soal/quizPrepositions";

export default function QuizPrepositions() {
  return <Quiz id={25} data={quizPrepositions} />;
}
