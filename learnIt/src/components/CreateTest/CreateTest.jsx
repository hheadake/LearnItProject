import React from 'react';
import { useForm } from '../../hooks/formHooks';
import { useAddTest } from '../../hooks/useTest';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  IconButton,
  Radio,
  TextField,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const CreateTest = () => {
  const addTest = useAddTest();
  const navigate = useNavigate();

  const initialValues = {
    title: "", 
    questions: [
      {
        questionText: "", 
        options: [], 
        correctOption: "", 
      },
    ],
  };
  const submitCallBack = async (values) => {
    const formattedData = {
      title: values.title, 
      questions: values.questions.map((q) => ({
        questionText: q.questionText, 
        options: q.options, 
        correctOption: q.correctOption, 
      })),
    };
  
    console.log("Formatted Data:", formattedData);
  
    try {
      await addTest(formattedData); 
      navigate("/");
    } catch (err) {
      console.error("Error submitting quiz:", err);
    }
  };
  

  const {
    values: { questions },
    changeStateHandler,
    submitHandler,
  } = useForm(initialValues, submitCallBack);

  const addQuestion = () => {
    const newQuestions = [
      ...questions,
      {
        question: '',
        options: [
          { text: '', correct: false },
          { text: '', correct: false },
          { text: '', correct: false },
        ],
      },
    ];
    changeStateHandler({
      target: {
        name: 'questions',
        value: newQuestions,
      },
    });
  };

  const editQuestion = (index, newQuestion) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].question = newQuestion;
    changeStateHandler({
      target: {
        name: 'questions',
        value: updatedQuestions,
      },
    });
  };

  const editOption = (qIndex, oIndex, newOptionText) => {
    const updatedQuestions = [...questions];
    updatedQuestions[qIndex].options[oIndex] = newOptionText; 
    changeStateHandler({
      target: {
        name: "questions",
        value: updatedQuestions,
      },
    });
  };

  const markCorrect = (qIndex, oIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[qIndex].options = updatedQuestions[qIndex].options.map((option, index) => ({
      ...option,
      correct: index === oIndex,
    }));
    changeStateHandler({
      target: {
        name: 'questions',
        value: updatedQuestions,
      },
    });
  };

  const deleteQuestion = (index) => {
    const updatedQuestions = questions.filter((_, i) => i !== index);
    changeStateHandler({
      target: {
        name: 'questions',
        value: updatedQuestions,
      },
    });
  };

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', p: 2 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Quiz
      </Typography>
      <form onSubmit={submitHandler}>
        {questions.map((q, qIndex) => (
          <Card key={qIndex} sx={{ mb: 2 }}>
            <CardContent>
              <TextField
                fullWidth
                label={`Question ${qIndex + 1}`}
                value={q.question}
                onChange={(e) => editQuestion(qIndex, e.target.value)}
                variant="outlined"
                margin="normal"
              />

              <Grid container spacing={2}>
                {q.options.map((option, oIndex) => (
                  <Grid item xs={12} sm={6} key={oIndex}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <TextField
                        fullWidth
                        label={`Option ${oIndex + 1}`}
                        value={option.text}
                        onChange={(e) => editOption(qIndex, oIndex, e.target.value)}
                        variant="outlined"
                      />
                      <Radio
                        checked={option.correct}
                        onChange={() => markCorrect(qIndex, oIndex)}
                        color="primary"
                      />
                    </Box>
                  </Grid>
                ))}
              </Grid>

              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                <IconButton color="error" onClick={() => deleteQuestion(qIndex)}>
                  <DeleteIcon />
                </IconButton>
              </Box>
            </CardContent>
          </Card>
        ))}

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
          <Button variant="contained" color="primary" onClick={addQuestion}>
            Add Question
          </Button>
          <Button type="submit" variant="contained" color="success">
            Save
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default CreateTest;
