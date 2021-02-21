import React, { useState } from 'react';
import './Quiz.scss';

export default function Quiz() {
	const questions = [
		{
			questionText: 'Ony obese women have PCOD',
			answerOptions: [
				{ answerText: 'True', isCorrect: false },
				{ answerText: 'False', isCorrect: true },
			],
		},
		{
			questionText: 'You cant get preganant if you have PCOD',
			answerOptions: [
				{ answerText: 'True', isCorrect: false },
				{ answerText: 'False', isCorrect: true },
			],
		},
		{
			questionText: 'I can get PCOD(or S), if I eat McDonalds',
			answerOptions: [
				{ answerText: 'True', isCorrect: false },
				{ answerText: 'False', isCorrect: true },
			],
		},
		{
			questionText: 'Which of the following is a common cause of PCOD?',
			answerOptions: [
				{ answerText: 'Knee Pain', isCorrect: false },
				{ answerText: 'Wrong lifestyle practices', isCorrect: true },
				{ answerText: 'Migraine', isCorrect: false },
				{ answerText: 'Fever', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
    const [correct, setCorrect] = useState(false);
    const[clicked, setClicked] = useState(false);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
            setCorrect(true);
		}

		setTimeout(function() {
            setClicked(false);
            setCorrect(false);
            const nextQuestion = currentQuestion + 1;
            if (nextQuestion < questions.length) {
                setCurrentQuestion(nextQuestion);
            } else {
                setShowScore(true);
            }
        }, 2000)
	};
	return (
		<div className='Quiz' style={{ marginTop: '3rem' }}>
			<div className="container py-4">
                <div className="text-center text-white heading">
                    <h2 className="mt-5">
                        Quiz
                    </h2>
                    <div className="display-4">
                        Here to remove all the myths related to PCOD and PCOS
                    </div>
                </div>
                <div className="row justify-content-center mx-auto p-3 mt-5">
                    <div className="col-lg-5 col-md-12">
                        {showScore ? (
                            <div className='score-section text-white'>
                                You scored {score} out of {questions.length}
                                <br/>
                                <div className="refresh-icon">
                                    <a className="btn text-white" href="/quiz">&#8634;</a>
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className='question-section text-white'>
                                    <div className='question-count'>
                                        <span>Question {currentQuestion + 1}</span>/{questions.length}
                                    </div>
                                    <div className='question-text'>{questions[currentQuestion].questionText}</div>
                                </div>
                                <div className='answer-section'>
                                    {questions[currentQuestion].answerOptions.map((answerOption) => (
                                        <button 
                                            onClick={() => {handleAnswerOptionClick(answerOption.isCorrect); setClicked(true)}}
                                            className="mb-2"
                                        >
                                            {answerOption.answerText}
                                        </button>
                                    ))}
                                </div>

                                {
                                    clicked && (
                                        <div className="response">
                                            {
                                                correct ? (<div className="correct">Correct</div>) : (<div className="incorrect">Incorrect</div>)
                                            }
                                        </div>
                                    )
                                }
                            </>
                        )}
                    </div>
                </div>
            </div>
		</div>
	);
}