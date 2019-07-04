import React from 'react'
import ReactDOM from 'react-dom'

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

  const Header = (props) => {
    console.log(props);
    return (
        <h1>{props.course.name}</h1>
    )
  };

  const Content = (props) => {
    console.log(props);
    return (
        <div>
          <p>{course.parts.map(value =><React.Fragment> {value.name} {value.exercises} <br/> </React.Fragment>)}</p>
        </div>
    )
  };

  const Total = () => {
    return (
        <div>
          <p>Total amount of exercises: {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}</p>
        </div>
    )
  };

  return (
      <div>
        <Header course={course} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));
