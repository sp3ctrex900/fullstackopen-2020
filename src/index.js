import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}
const Part = (props) => {
  return (
    <p>{props.part} {props.exercises}</p>
  )
}
const Content = (props) => {
  return (
    <Part part={props.part} exercises={props.exercises} />
  )
}
const Total = (props) => {
  return (
    <p>Number of exercises {props.total1 + props.total2 + props.total3}</p>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part={part1} exercises={exercises1} />
      <Content part={part2} exercises={exercises2} />
      <Content part={part3} exercises={exercises3} />
      <Total total1={exercises1} total2={exercises2} total3={exercises3} />
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))

