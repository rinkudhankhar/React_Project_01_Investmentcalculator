
import Header from './assets/component/Header/Header';
import UserInput from './assets/component/UserInput/UserInput';
import Results from './assets/component/Results/Results';
import { useState } from 'react';
function App() {
  const [results, setResult] = useState(null)
  const yearlyData = [];
  const calculateHandler = (userInput) => {



    let currentSavings = +userInput['current-savings'];
    const yearlyContribution = +userInput['yearly-contribution'];
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }


    setResult(yearlyData);
  };
  // okay ab hame chahiye ki jo bhi calculation hai wo ham apne result table me store kar sake right to usko pass karne ke liye hame firse useState ki jarurathogi. kaise ? that we will see now :|-_-|.
  // do something with yearlyData ...
  // ookay hopefully now you got the idea why we have passed the yearlydata 
  // okay if you see yrealyData is an array which is containing all the data we need for example yearlyInterest savingsEndOfYear yearlyContribution :) 

  return (
    <div>
      <Header />
      {/* aathe onCalculate props hai jisme calculatehandler function pass karo hai appa ab dekh calculateHandler bo function hai jo userInput as argument le rahyo aur jab code dekhagi to smjh aawago tan ki aaga code m userInput ki kuch value access kar rahya aapa ab athe make sure ki those values are exactly same whatever we have defined in the UserInput componet for the userInput variable 
      ab agar yo doubt hai ki UserInput component m aapa props.onCalculate(userInput) hi kyo likho to dekh onCalculate to property ko nam hai jo aapa app.js compenent m define karo hai aur ab aapan chahiye tho ki jo input data hai b aapa access kar saka to ba hai userInput variable m stored to aapa bs unan pass kar de rahya 
       */}
      <UserInput onCalculate={calculateHandler} />
      {!results && <p style ={{textAlign:'center'}}> No Investment calculated yet.</p>}
      {results && <Results data={yearlyData} initialInvestment={results['current-savings']} />}
    </div>
  );
}

export default App;

