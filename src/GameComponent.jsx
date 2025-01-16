import { useEffect, useState } from "react";
import { PiHandWavingLight } from "react-icons/pi";
import rightIcon from "./assets/right.svg";
import falseIcon from "./assets/false.svg";
import congratsIcon from "./assets/congrats.svg";
import "./GameComponent.css";
import { useContext } from "react";
import { countriesContext } from "./CountriesContext/CountiesContext";
import { HashLoader } from "react-spinners";
import { MdWidthFull } from "react-icons/md";
export default function GameCompo() {
   const [pageStatus, setPageStatus] = useState();
   const ApiRes = useContext(countriesContext);
   const [status, setStatus] = useState("notStartedyet");
   const [Id, setId] = useState();
   const [answersRes, setAnswersRes] = useState(0);
   const [questionNumber, setQuestionNumber] = useState(0);
   const [answerCheck, setAnswerCheck] = useState(false);
   const [randomQuestion, setRandomQuestion] = useState();
   const [countryChoices1, setCountryChoices1] = useState([{ id: "", country: "", flagImg: "" }]);
   const [countryChoices2, setCountryChoices2] = useState([{ id: "", country: "", flagImg: "" }]);
   const [countryChoices3, setCountryChoices3] = useState([{ id: "", country: "", flagImg: "" }]);
   const [countryChoices4, setCountryChoices4] = useState([{ id: "", country: "", flagImg: "" }]);
   const [questions, setQuestions] = useState([]);
   const [correctAnswer, setCorrectAnswer] = useState([
      { id: 1, country: "gibraltar", flagImg: "sdvsdvsdv" },
   ]);
   useEffect(() => {
      () => {
         let index1 = Math.floor(Math.random() * ApiRes.length);
         let index2 = Math.floor(Math.random() * ApiRes.length);
         let index3 = Math.floor(Math.random() * ApiRes.length);
         let index4 = Math.floor(Math.random() * ApiRes.length);
         setCountryChoices1([
            { id: 1, country: ApiRes[index1].name.common, flagImg: ApiRes[index1].flags.png },
         ]);
         setCountryChoices2([
            { id: 2, country: ApiRes[index2].name.common, flagImg: ApiRes[index2].flags.png },
         ]);
         setCountryChoices3([
            { id: 3, country: ApiRes[index3].name.common, flagImg: ApiRes[index3].flags.png },
         ]);
         setCountryChoices4([
            { id: 4, country: ApiRes[index4].name.common, flagImg: ApiRes[index4].flags.png },
         ]);
      };
   }, [ApiRes, questions]);
   useEffect(() => {
      setCorrectAnswer(questions[Math.floor(Math.random() * 4)]);
   }, [questions]);
   // useEffect(() => {
   //    console.log(correctAnswer);
   // }, [correctAnswer]);
   // useEffect(() => {
   //    set;
   // });

   useEffect(() => {
      setQuestions([countryChoices1, countryChoices2, countryChoices3, countryChoices4]);
   }, [countryChoices1, countryChoices2, countryChoices3, countryChoices4]);
   useEffect(() => {
      // console.log(correctAnswer);
      return () => {};
   }, [correctAnswer, countryChoices1, countryChoices2, countryChoices3, countryChoices4]);
   useEffect(() => {});
   function setCountry() {
      let index1 = Math.floor(Math.random() * ApiRes.length);
      let index2 = Math.floor(Math.random() * ApiRes.length);
      let index3 = Math.floor(Math.random() * ApiRes.length);
      let index4 = Math.floor(Math.random() * ApiRes.length);
      setCountryChoices1([
         { id: 1, country: ApiRes[index1].name.common, flagImg: ApiRes[index1].flags.png },
      ]);
      setCountryChoices2([
         { id: 2, country: ApiRes[index2].name.common, flagImg: ApiRes[index2].flags.png },
      ]);
      setCountryChoices3([
         { id: 3, country: ApiRes[index3].name.common, flagImg: ApiRes[index3].flags.png },
      ]);
      setCountryChoices4([
         { id: 4, country: ApiRes[index4].name.common, flagImg: ApiRes[index4].flags.png },
      ]);
   }

   function correct_Answer() {
      setCorrectAnswer(questions[Math.floor(Math.random() * 4)]);
   }

   function buttonChoiceClicked(ChoiceVal) {
      let countryChoice = correctAnswer[0].country;

      if (ChoiceVal == countryChoice) {
         // console.log("right answer");
         setAnswersRes(answersRes + 1);
         setAnswerCheck(true);
      } else {
         // console.log("wrong answer");
      }
      setTimeout(() => {
         setQuestionNumber(questionNumber + 1);
         setCountry();
      }, 10);
   }
   const questionsNums = [
      {
         value: 1,
      },
      {
         value: 2,
      },
      ,
      {
         value: 3,
      },
      ,
      {
         value: 4,
      },
      ,
      {
         value: 5,
      },
      ,
      {
         value: 6,
      },
      ,
      {
         value: 7,
      },
      ,
      {
         value: 8,
      },
      ,
      {
         value: 9,
      },
      ,
      {
         value: 10,
      },
   ];
   const questionsNumToRender = questionsNums.map((questionNum) => {
      return (
         <>
            <section
               className="questionNumbers"
               style={{
                  background:
                     questionNumber == questionNum.value
                        ? "linear-gradient(#e65895, #bc6be8)"
                        : "#343964",
               }}
            >
               {questionNum.value}
            </section>
         </>
      );
   });
   const buttonChoices1 = [
      {
         id: countryChoices1[0].id,
         value: countryChoices1[0].country,
         flagImg: countryChoices1[0].flagImg,
      },
      {
         id: countryChoices2[0].id,
         value: countryChoices2[0].country,
         flagImg: countryChoices2[0].flagImg,
      },
   ];
   const buttonChoices2 = [
      {
         id: countryChoices3[0].id,
         value: countryChoices3[0].country,
         flagImg: countryChoices3[0].flagImg,
      },
      {
         id: countryChoices4[0].id,
         value: countryChoices4[0].country,
         flagImg: countryChoices4[0].flagImg,
      },
   ];
   const buttonChoicesToRender1 = buttonChoices1.map((buttonChoice1) => {
      return (
         <>
            <button
               onClick={() => {
                  setId(correctAnswer[0].id);
                  // console.log(buttonChoice1.id, Id);
                  buttonChoiceClicked(buttonChoice1.value);
                  if (questionNumber < 10) {
                     setPageStatus("loading");
                     setTimeout(() => {
                        setPageStatus("loaded");
                     }, 850);
                  } else if (questionNumber == 10) {
                     setPageStatus("finishLoading");
                     setTimeout(() => {
                        setPageStatus("loaded");
                     }, 2555);
                  }
               }}
            >
               <h3>{buttonChoice1.value}</h3>
               {/* {buttonChoice1.id == Id ? <img src={rightIcon} alt="" /> : ""} */}

               {/* {(answerCheck == true) & (buttonChoice1.id == Id) ? (
                  <img src={rightIcon} alt="" />
               ) : (
                  ""
               )} */}
            </button>
         </>
      );
   });
   const buttonChoicesToRender2 = buttonChoices2.map((buttonChoice2) => {
      return (
         <>
            <button
               onClick={() => {
                  setId(buttonChoice2.id);
                  // console.log(buttonChoice2.id, Id);
                  buttonChoiceClicked(buttonChoice2.value);
                  if (questionNumber < 10) {
                     setPageStatus("loading");
                     setTimeout(() => {
                        setPageStatus("loaded");
                     }, 850);
                  } else if (questionNumber == 10) {
                     setPageStatus("finishLoading");
                     setTimeout(() => {
                        setPageStatus("loaded");
                     }, 2555);
                  }
               }}
            >
               <h3>{buttonChoice2.value}</h3>
               {/* {buttonChoice2.id == Id ? <img src={rightIcon} alt="" /> : ""} */}
            </button>
         </>
      );
   });
   // const answers = [
   //    {id : 1, name : "", }
   // ]
   if (pageStatus == "loading") {
      return (
         <div className="waitingContainer">
            <HashLoader size={85} color="#C5CBE1" style={{ width: "200px", height: "200px" }} />
         </div>
      );
   } else if (pageStatus == "finishLoading") {
      return (
         <div className="waitingContainer">
            <h1>Calculating results</h1>
            <HashLoader size={85} color="#C5CBE1" style={{ width: "200px", height: "200px" }} />
         </div>
      );
   } else if (questionNumber == 0 && status == "notStartedyet") {
      return (
         <div className="welcomePage">
            <div
               style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "15px",
               }}
            >
               <div>
                  <PiHandWavingLight style={{ fontSize: "100px", color: "#8B8EAB" }} />
               </div>
               <div>
                  <h2>Welcome to the country quiz</h2>
               </div>
            </div>
            <div>
               <button
                  onClick={() => {
                     setCountry();
                     setQuestionNumber(questionNumber + 1);
                     setStatus("started");
                     correct_Answer();
                     setPageStatus("loading");
                     setTimeout(() => {
                        setPageStatus("loaded");
                     }, 1500);
                  }}
               >
                  Get Started
               </button>
            </div>
         </div>
      );
   } else if (questionNumber <= 10 && (status == "started") & (pageStatus == "loaded")) {
      return (
         <div className="gameContainer">
            <div>
               <h4 style={{ color: "#8B8EAB" }}>Country Quiz</h4>
            </div>
            <div className="questionNumbersDiv">{questionsNumToRender}</div>
            <div className="questionDiv">
               <h2>
                  Which country does this flag{" "}
                  {
                     <img
                        src={correctAnswer[0].flagImg}
                        alt=""
                        style={{ width: "100px", height: "60px", margin: "0 10px" }}
                     />
                  }
                  belongs to ?
               </h2>
            </div>
            <div className="answersDiv">
               <div className="leftAnswers">{buttonChoicesToRender1}</div>
               <div className="rightAnswers">{buttonChoicesToRender2}</div>
            </div>{" "}
         </div>
      );
   } else if (questionNumber > 10) {
      return (
         <div className="resultContainer">
            <div
               style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-evenly",
               }}
            >
               <div>
                  <img src={congratsIcon} alt="congratsIcon" />
               </div>
               <div>
                  <h2>Congrats you completed the quiz</h2>
               </div>
               <div>
                  <h3 style={{ color: "#8B8EAB" }}>{answersRes}/10</h3>
               </div>
            </div>
            <div>
               <button
                  style={{ background: "linear-gradient(#e65895, #bc6be8)" }}
                  onClick={() => {
                     setQuestionNumber(1);
                     setStatus("started");
                     setAnswersRes(0);
                     setPageStatus("loading");
                     setTimeout(() => {
                        setPageStatus("loaded");
                     }, 1500);
                  }}
               >
                  Play Again
               </button>
            </div>
         </div>
      );
   }
}
