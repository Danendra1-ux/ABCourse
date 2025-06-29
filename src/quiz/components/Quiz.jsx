"use client"

import { useState } from "react"
import axios from "axios"
import "./styles.css"
import { useNavigate } from "react-router-dom"
import { ArrowLeft } from "lucide-react" // Make sure to import ArrowLeft

export default function Quiz({ data, id }) {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const navigate = useNavigate()

  const handleNext = async () => {
    if (selected === data[current].answer) {
      setScore(score + 1)
    }
    if (current < data.length - 1) {
      setCurrent(current + 1)
      setSelected(null)
    } else {
      await submitQuiz()
      setShowResult(true)
    }
  }

  const handlePrevious = () => {
    if (current > 0) {
      setCurrent(current - 1)
      setSelected(null)
    }
  }

  const submitQuiz = async () => {
    const response = await axios.post(
      "http://localhost:5000/api/quiz",
      {
        score: (score / data.length) * 100,
        materi_id: id,
      },
      {
        withCredentials: true,
      },
    )
  }

  const handleBack = () => {
    navigate("/app")
  }

  return (
    <div className="quiz-unique-background">
      {/* Back button added here */}
      <button className="quiz-unique-back-button" onClick={() => navigate("/adjective")}>
        <ArrowLeft size={16} />
      </button>

      <div className="quiz-unique-container">
        {showResult ? (
          <div className="quiz-unique-result">
            <h2>Quiz Completed!</h2>
            <p>
              Your Score: {score} / {data.length}
            </p>
            <button className="quiz-unique-button" onClick={handleBack}>
              Go Back
            </button>
          </div>
        ) : (
          <div className="quiz-unique-box">
            <h3>{data[current].question}</h3>
            <ul>
              {data[current].options.map((opt, index) => (
                <li key={index}>
                  <label>
                    <input
                      type="radio"
                      name="option"
                      value={index}
                      checked={selected === index}
                      onChange={() => setSelected(index)}
                    />
                    {opt}
                  </label>
                </li>
              ))}
            </ul>
            <div className="quiz-unique-button-container">
              <button
                className={`quiz-unique-button quiz-unique-button-prev ${
                  current === 0 ? "quiz-unique-button-disabled" : ""
                }`}
                onClick={handlePrevious}
                disabled={current === 0}
              >
                Previous
              </button>
              <button className="quiz-unique-button" disabled={selected === null} onClick={handleNext}>
                {current === data.length - 1 ? "Finish" : "Next"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
