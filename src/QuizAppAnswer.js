import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";

const QuizAppAnswer = () => {
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetchResults();
  }, []);

  const fetchResults = async () => {
    try {
      const response = await axios.get(`${apiBaseUrl}/getAllQuizResults`);
      setResults(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  return (
    <>
      <h1>Result Of Quiz App</h1>
      <div className="quiz-results-container">
        {results?.quiz?.length === 0 ? (
          <>
            <Spinner />
          </>
        ) : (
          <>
            {results?.quiz?.map((item, index) => (
              <div className="quiz-card" key={index}>
                <div className="quiz-card-content">
                  <h3>{item.name}</h3>
                  <p>
                    <strong>Phone:</strong> {item.phone}
                  </p>
                  <p>
                    <strong>Email:</strong> {item.email}
                  </p>
                  <p>
                    <strong>Correct Answers:</strong> {item.correct}
                  </p>
                  <p>
                    <strong>Wrong Answers:</strong> {item.wrong}
                  </p>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default QuizAppAnswer;
