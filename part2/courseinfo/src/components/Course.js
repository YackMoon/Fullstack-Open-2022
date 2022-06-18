import React from 'react'

const Course = ({ course }) => {
    return (
        <div>
            <Header name={course.name}/>
            <Content parts={course.parts}/>
            <Total parts={course.parts} />
        </div>
    )
}

const Header = ({ name }) => {
    return (
        <h1>{name}</h1>
    )
}
  
const Part = ({ name, exercises }) => {
    return (
        <p>
        {name} {exercises}
        </p>
    )
}
  
const Content = ({ parts }) => {
    return (
      <div>
        {parts.map((part) => (
            <Part key={part.id} name={part.name} exercises={part.exercises}/>
        ))}
      </div>
    )
}
  
const Total = ({ parts }) => {
    const total = parts.reduce( (sum, part) => sum + part.exercises, 0)

    return <strong> total of {total} exercises</strong>

}


export default Course