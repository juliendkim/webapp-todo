import React, { useState } from 'react';
import './App.css';

function App() {
  // Todo 항목들을 저장하는 배열
  const [todos, setTodos] = useState([]);
  
  // 입력 필드의 현재 값
  const [inputValue, setInputValue] = useState('');

  // 입력 필드 변경 핸들러
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // 폼 제출 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 빈 값 체크
    if (inputValue.trim() === '') {
      return;
    }
    
    // 새 Todo 추가
    const newTodo = {
      id: Date.now(), // 고유 ID 생성
      text: inputValue,
      completed: false
    };
    
    setTodos([...todos, newTodo]);
    setInputValue(''); // 입력 필드 초기화
  };

  // Todo 삭제 함수
  const deleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  // Todo 완료 상태 토글 함수
  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      {/* Todo 입력 폼 */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="할 일을 입력하세요"
        />
        <button type="submit">추가</button>
      </form>
      {/* Todo 목록 */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}           // 완료 상태에 따라 체크
              onChange={() => toggleTodo(todo.id)} // 클릭 시 상태 토글
            />
            <span
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;