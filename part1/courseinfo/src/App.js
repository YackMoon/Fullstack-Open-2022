const Header = (header) => {
  console.log(header)
  return (
      <h1>{header.course.name}</h1>
  )
}

const Part = (content) => {
  console.log(content)
  return (
    <p>
      {content.parts.name} {content.parts.exercises}
    </p>
  )
}

const Content = (content) => {
  console.log(content)
  return (
    <div>
      <Part parts={content.course.parts[0]} />
      <Part parts={content.course.parts[1]} />
      <Part parts={content.course.parts[2]} />
    </div>
  )
}

const Total = (total) => {
  console.log(total)
  return (
    <p>Number of exercises {total.course.parts[0].exercises + total.course.parts[1].exercises + total.course.parts[2].exercises}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App