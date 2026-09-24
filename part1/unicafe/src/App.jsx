import { useState } from 'react'

const Button = ({clickHandler, text}) => <button onClick={clickHandler}>{text}</button>

const StatisticsLine = ({text, value}) => <tr><td>{text}</td><td>{value}</td></tr>

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const average = (good - bad) / (good + neutral + bad)
  const positive = good / (good + neutral + bad) * 100

  if (all === 0) {
    return(<p>No feedback given</p>)
  }

  return (
    <table>
      <tbody>
        <StatisticsLine text="good" value={good} />
        <StatisticsLine text="neutral" value={neutral} />
        <StatisticsLine text="bad" value={bad} />
        <StatisticsLine text="all" value={all} />
        <StatisticsLine text="average" value={average} />
        <StatisticsLine text="positive" value={positive + ' %'} />
      </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <h1>give feedback</h1>
      <Button clickHandler={() => setGood(good + 1)} text='good'/>
      <Button clickHandler={() => setNeutral(neutral + 1)} text='neutral'/>
      <Button clickHandler={() => setBad(bad + 1)} text='bad'/>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default App