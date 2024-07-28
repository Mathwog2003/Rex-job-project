

// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const TodoApp = () => {
//   const [todos, setTodos] = useState([]);
//   const [newTodo, setNewTodo] = useState('');
//   const [newTitle, setNewTitle] = useState('');
//   const [deadline, setDeadline] = useState('');
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     const storedTodos = localStorage.getItem('todos');
//     if (storedTodos) {
//       setTodos(JSON.parse(storedTodos));
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('todos', JSON.stringify(todos));
//   }, [todos]);

//   const handleAddTodo = (event) => {
//     event.preventDefault();
//     const newTodoItem = {
//       title: newTitle,
//       text: newTodo,
//       deadline: deadline,
//       createdAt: new Date().toISOString(),
//       completed: false,
//     };
//     setTodos([...todos, newTodoItem]);
//     setNewTodo('');
//     setNewTitle('');
//     setDeadline('');
//   };

//   const handleToggleCompleted = (index) => {
//     const updatedTodos = [...todos];
//     updatedTodos[index].completed =!updatedTodos[index].completed;
//     setTodos(updatedTodos);
//   };

//   const handleDeleteTodo = (index) => {
//     const updatedTodos = [...todos];
//     updatedTodos.splice(index, 1);
//     setTodos(updatedTodos);
//   };

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const filteredTodos = todos.filter((todo) => {
//     return todo.title.toLowerCase().includes(searchTerm.toLowerCase());
//   });

//   return (
//     <div className="container py-5">
//       <h1 className="display-4">Todo App</h1>
//       <form>
//         <div className="form-group">
//           <input
//             type="text"
//             value={newTitle}
//             onChange={(e) => setNewTitle(e.target.value)}
//             placeholder="Enter new title"
//             className="form-control"
//           />
//         </div>
//         <div className="form-group">
//           <input
//             type="text"
//             value={newTodo}
//             onChange={(e) => setNewTodo(e.target.value)}
//             placeholder="Enter new todo"
//             className="form-control"
//           />
//         </div>
//         <div className="form-group">
//           <input
//             type="date"
//             value={deadline}
//             onChange={(e) => setDeadline(e.target.value)}
//             placeholder="Enter deadline"
//             className="form-control"
//           />
//         </div>
//         <button onClick={handleAddTodo} className="btn btn-primary">
//           Add Todo
//         </button>
//       </form>
//       <div className="form-group mt-3">
//         <input
//           type="text"
//           value={searchTerm}
//           onChange={handleSearch}
//           placeholder="Search by title"
//           className="form-control"
//         />
//       </div>
//       <ul className="list-group mt-3">
//         {filteredTodos.map((todo, index) => (
//           <li key={index} className="list-group-item">
//             <div className="form-check">
//               <input
//                 type="checkbox"
//                 checked={todo.completed}
//                 onChange={() => handleToggleCompleted(index)}
//                 className="form-check-input"
//               />
//               <span
//                 style={{
//                   textDecoration: todo.completed? 'line-through' : 'none',
//                 }}
//               >
//                 {todo.title} - {todo.text}
//               </span>
//             </div>
//             <span className="text-muted">Deadline: {todo.deadline}&nbsp; &nbsp;</span>
//             <span className="text-muted">Created At: {todo.createdAt}&nbsp;</span>
//             <button
//               onClick={() => handleDeleteTodo(index)}
//               className="btn btn-danger btn-sm float-right"
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TodoApp;

import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [newTitle, setNewTitle] = useState('');
  const [deadline, setDeadline] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (event) => {
    event.preventDefault();
    const newTodoItem = {
      title: newTitle,
      text: newTodo,
      deadline: deadline,
      createdAt: new Date().toISOString(),
      completed: false,
    };
    setTodos([...todos, newTodoItem]);
    setNewTodo('');
    setNewTitle('');
    setDeadline('');
  };

  const handleToggleCompleted = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed =!updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredTodos = todos.filter((todo) => {
    return todo.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="container py-5">
      <h1 className="display-4">Todo App</h1>
      <form>
        <div className="form-group">
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="Enter new title"
            className="form-control"
            style={{ width: '30%' }}
          />
        </div>
        <br></br>
        <div className="form-group">
          <textarea
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Enter new todo"
            className="form-control"
            style={{ width: '50%', height: '100px' }}
          />
        </div>
        <br></br>
        <div className="form-group">
          <input
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            placeholder="Enter deadline"
            className="form-control"
            style={{ width: '20%' }}
          />
        </div>
        <br></br>
        <button onClick={handleAddTodo} className="btn btn-primary">
          Add Todo
        </button>
      </form>
      <div className="form-group mt-3">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search by title"
          className="form-control"
        />
      </div>
      <ul className="list-group mt-3">
        {filteredTodos.map((todo, index) => (
          <li key={index} className="list-group-item">
            <div className="form-check">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleCompleted(index)}
                className="form-check-input"
              />
              <span
                style={{
                  textDecoration: todo.completed? 'line-through' : 'none',
                }}
              >
                {todo.title} - {todo.text}
              </span>
            </div>
            <span className="text-muted">Deadline: {todo.deadline}&nbsp; &nbsp;</span>
            <span className="text-muted">Created At: {todo.createdAt}&nbsp;</span>
            <button
              onClick={() => handleDeleteTodo(index)}
              className="btn btn-danger btn-sm float-right"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;