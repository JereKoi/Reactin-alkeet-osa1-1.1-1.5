const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <h1>{course.name}</h1>
      {course.parts.map((part, index) => (
        <p key={index}>
          {part.name} - Exercises: {part.exercises}
        </p>
      ))}
    </div>
  );
};

export default App;
