import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Button,FAB } from 'react-native-paper';
import data from './DummyData';

let shuffled = [];
let randomQuestions = [];

export default App = () => {
  const [started, setStarted] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [correct, setCorrect] = useState(4);
  const [questions, setQuestions] = useState([])
  

 
  showStart = () =>{
    return(
      <View style = {styles.container}>
        <Text style={styles.welcome}>WELCOME TO YOUR QUIZ</Text>
        <Button mode ="contained" theme={theme} style={styles.Startbutton} 
        onPress= {()=>{setStarted(true)
        shuffled = data.sort(() => 0.5 - Math.random());
        randomQuestions = shuffled.slice(0, 5);
        }
        }>
          Let's Go
        </Button>
      </View>
    )
  }

  checkAnswer = (answerNo)=>{
    if(answerNo === randomQuestions[questionNumber].getAnswer){
      setScore((score)=>score+1); 
      setCorrect(answerNo);
    }
    else{
      setScore((score)=>score);
      setCorrect(-1)
    }
    setAnswered(true)
  }
  
  showApp = () =>{
    const fab = ( <FAB
      theme={theme}
      style={styles.fab}
      icon="forward"
      disabled ={answered ? false: true}
      onPress={() => {if(questionNumber <randomQuestions.length-1){
                      setQuestionNumber((questionNumber)=>questionNumber+1)
                      setCorrect(4)}
                      setAnswered(false)
                    }}
    />)
    const finish = (
      <Button
        mode = "contained"
        style = {styles.options}
        theme= {finsihTheme}
        onPress= {()=>{setQuestionNumber(0);
          setScore(0);
          setCorrect(4)
          setStarted(false);
          setAnswered(false)
         }
        }
        >
        FINISH
      </Button>
    )

    return (
      <View style = {styles.container}>
        <View style = {styles.header}>
          <Text style={styles.headText}>{`Score: ${score}`}</Text>
          <Text style={styles.headText}>{`Question: ${questionNumber+1}/5`}</Text>
        </View>
        <View style={styles.questionContainer} onPress = {()=>{checkAnswer(0)}}>
          <Text style ={styles.question}>{randomQuestions[questionNumber].getQuestion}</Text>
        </View>
          {randomQuestions[questionNumber].getOptions.map((item, i)=>{
          return (
            <Button key={i} theme={(i === correct)? Greentheme :theme}  mode="contained" style= {styles.options} onPress = {()=>{checkAnswer(i)}}>
              {item}
            </Button>
          )
        })}
        {(questionNumber === 4) ? finish : fab}
       
      </View>
      
    )
  }
  return (
    <View style={styles.container}>
      {started ? showApp() : showStart()}
    </View>
  );
}

const theme = {
  colors:{
    primary: "#8de3d3"
  }
}
const finsihTheme ={
  colors:{
    primary:"#4f8065"
  }
}
const Redtheme = {
  colors:{
    primary: "#bd0e08"
  }
}

const Greentheme = {
  colors:{
    primary: "#10c227"
  }
}

// const T = ()=>{
//   if (correct === randomQuestions[questionNumber].getAnswer.getAnswer){
//     return Greentheme
//   }
//   if(correct === -1){
//     return Redtheme
//   }
//   else{
//     return theme
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width:"100%",
    height:"100%"
  },
  header:{
    flexDirection:"row",
    justifyContent: "space-around",
    width:"90%",
    marginBottom:100
  },
  headText:{
    fontSize:30,
    fontWeight:"bold"
  },
  Startbutton:{
    padding:10,
    margin:15,
    width:200
  },
  welcome:{
    fontSize: 25
  },
  question:{
    fontSize: 30
  },
  questionContainer:{
    marginTop: 20,
    marginBottom:20,
    justifyContent:"center",
    alignContent:"center"
  },
  options:{
    width :"90%",
    padding:20,
    marginTop:10
  },
  optionText:{
    color:"#fff",
    fontSize:20
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
 
});
// <View style={styles.questionContainer} onPress = {()=>{checkAnswer(0)}}>
//           <Text style ={styles.question}>{randomQuestions[questionNumber].getQuestion}</Text>
//         </View>
//         <Button theme={theme} mode="contained" style= {styles.options} onPress = {()=>{checkAnswer(0)}}>
//         {randomQuestions[questionNumber].getOptions[0]}
//         </Button>
//         <Button theme={theme}  mode="contained" style= {styles.options} onPress = {()=>{checkAnswer(1)}}>
//           {randomQuestions[questionNumber].getOptions[1]}
//         </Button>
//         <Button theme={theme}  mode="contained" style= {styles.options} onPress = {()=>{checkAnswer(2)}}>
//           {randomQuestions[questionNumber].getOptions[2]}
//         </Button>
//         <Button theme={theme}  mode="contained" style= {styles.options} onPress = {()=>{checkAnswer(3)}}>
//           {randomQuestions[questionNumber].getOptions[3]}
//         </Button>