import classes from '/Users/rkumari/Desktop/01-starting-project/src/assets/component/Results/Results.module.css'

const Results = (props) => {

  return (
    <>
      <table className={classes.result}>
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((yearlyData) => {
            <tr key={yearlyData.year}>
              <td>{yearlyData.year}</td>
              <td>{yearlyData.savingsEndOfYear}</td>
              <td>{yearlyData.yearlyInterest}</td>
              <td>{yearlyData.savingsEndOfYear - props.initialInvestment - yearlyData.yearlyContribution * yearlyData.year}</td>
              <td>{props.initialInvestment+yearlyData.yearlyContribution * yearlyData.year}</td>
            </tr>
          })}

        </tbody>
      </table>
    </>
  )
}

export default Results;
