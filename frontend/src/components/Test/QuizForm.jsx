import React, { useState } from 'react';
import {
  Box,
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  styled
} from '@mui/material';

const StyledBtn = styled(Button)({
  background: "#662249"
})
const questions = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Berlin", "Paris", "Madrid", "Rome"],
    correctAnswer: "Paris",
  },
  {
    id: 2,
    question: "Which is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correctAnswer: "Jupiter",
  },
  {
    id: 3,
    question: "What is the chemical symbol for water?",
    options: ["O2", "H2O", "CO2", "NaCl"],
    correctAnswer: "H2O",
  },
];

export default function QuizForm() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleAnswerChange = (questionId, answer) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        mx: 'auto',
        mt: 4,
        p: 3,
        border: '1px solid #ccc',
        borderRadius: 2,
        boxShadow: 2,
        backgroundColor: '#f9f9f9',
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Quiz Form
      </Typography>
      {questions.map((q) => (
        <FormControl key={q.id} sx={{ mb: 3, width: '100%' }}>
          <Typography variant="h6" gutterBottom>
            {q.question}
          </Typography>
          <RadioGroup
            value={answers[q.id] || ""}
            onChange={(e) => handleAnswerChange(q.id, e.target.value)}
          >
            {q.options.map((option) => (
              <FormControlLabel
                key={option}
                value={option}
                control={<Radio />}
                label={option}
              />
            ))}
          </RadioGroup>
        </FormControl>
      ))}
      <StyledBtn
        variant="contained"
        fullWidth
        onClick={handleSubmit}
        disabled={Object.keys(answers).length !== questions.length}
      >
        Submit
      </StyledBtn>
      {submitted && (
        <Box sx={{ mt: 3, p: 2, border: '1px solid #ccc', borderRadius: 2 }}>
          <Typography variant="h6" gutterBottom>
            Results:
          </Typography>
          {questions.map((q) => (
            <Typography key={q.id} variant="body1">
              {q.question} -{" "}
              {answers[q.id] === q.correctAnswer ? (
                <span style={{ color: "green" }}>Correct</span>
              ) : (
                <span style={{ color: "red" }}>Wrong</span>
              )}
            </Typography>
          ))}
        </Box>
      )}
    </Box>
  );
}
