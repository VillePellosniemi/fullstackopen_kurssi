import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({coursename}) => {
  return (
      <h1>{coursename}</h1>
  )
};

const Content = ({titles}) => {
  return (
      <div>
        <p>{titles}</p>
      </div>
  )
};

const Total = ({numberofexercises}) => {
  return (
      <div>
        <p>Total amount of exercises: {numberofexercises}</p>
      </div>
  )
};


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
  };

  return (
      <div>
        <Header coursename={course.name} />
        <Content titles={course.parts.map(value =><React.Fragment> {value.name} {value.exercises} <br/> </React.Fragment>)} />
        <Total numberofexercises={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}/>
      </div>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));
