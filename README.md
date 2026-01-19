# Todo App (웹앱 개발 특강 1일차 실습)

React로 구현된 간단한 할 일 목록(Todo List) 애플리케이션

## 기능 소개

1.  **할 일 추가 (Create):** 입력 필드에 할 일 작성 후 '추가' 버튼을 눌러 새로운 할 일 추가
1.  **할 일 목록 조회 (Read):** 추가된 할 일들을 리스트 형태로 확인
1.  **할 일 완료 처리 (Update):** 체크박스 클릭하여 완료 상태 토글(Toggle). 완료항목은 취소선 표시
1.  **할 일 삭제 (Delete):** 각 항목의 '삭제' 버튼을 클릭하여 목록에서 제거

## 기술 스택

*   **Front-end:** React (v19)
*   **Build Tool:** Create React App (react-scripts)
*   **Language:** JavaScript

## 프로젝트 구조

```
src/
├── App.js      # 메인 컴포넌트 (Todo 로직 및 UI 포함)
├── App.css     # App 컴포넌트 스타일
└── index.js    # 앱 진입점 (Entry Point)
```
### 주요 코드 로직 (`App.js`)

*   `useState` Hook을 사용하여 할 일 목록(`todos`)과 입력값(`inputValue`) 상태를 관리
*   `handleInputChange`: 사용자 입력을 실시간으로 상태에 반영
*   `handleSubmit`: 폼 제출 시 빈 값을 확인하고 새로운 Todo 객체(`id`, `text`, `completed`)를 생성하여 목록에 추가
*   `toggleTodo`: 특정 Todo의 완료 상태(`completed`)를 반전
*   `deleteTodo`: `filter` 함수를 사용하여 특정 Todo를 목록에서 제거

## 실행 방법

1.  **의존성 설치**
```bash
    npm install
```

2.  **개발 서버 실행**
```bash
npm start
```

3. **실행 확인** : 실행 후 웹브라우저에서 [http://localhost:3000](http://localhost:3000) 앱 확인

## 라이선스
- MIT License
- 이 프로젝트는 교육 목적으로 작성되었습니다.
