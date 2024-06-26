# 이원도 202230226

## 6월 12일
### CSS란?
- CSS는 Cascading Style Sheets의 약자로 스타일링을 위한 언어입니다.
- Cascading이란 계단식이라는 뜻으로 한 엘리먼트에 여러 스타일이 적용될 경우 **스타일간의 충돌을 막기 위해 계단식으로 스타일을 적용**시키는 규칙을 갖고 있습니다.
- 즉 하나의 스타일이 여러 개의 엘리먼트에 적용될 수도 있고, **하나의 엘리먼트에도 여러 개의 스타일이 적용**될 수도 있습니다.
- 엘리먼트에 스타일이 적용되는 규칙을 `selector(선택자)`라고 합니다. CSS는 이 선택자와 스타일로 이루어 집니다.
- 이번 장에서는 선택자와 스타일을 카테고리별로 나누어 학습합니다.

### CSS 문법과 선택자
- 선택자를 먼저 쓰고 다음에 적용할 스타일을 중괄호 안에 세미콜론으로 구분하여 하나씩 작성합니다.
- 선택자는 HTML 엘리먼트를 직접 넣어도 되고, 에리먼트의 조합 혹은 class의 형태로 작성 가능합니다.
- 스타일은 `property(속성)` `key value(키 값)`으로 이루어 지며, 이들은 `콜론(:)`으로 구분하고, 각 스타일은 `세미콜론(;)`으로 구분합니다.

### 상태 선택자
- ![Alt text](img/image3.png)

### 레이아웃과 관련된 속성
- 화면에 엘리먼트를 어떻게 배치할 것인지를 정의합니다.
- 가장 중요한 속성은 display입니다.
- 모든 엘리먼트는 기본 display 속성을 갖고 있지만 이 기본값을 변경해 줄 수 있습니다.
```js
div {
  display: none | block | inline | flex;
}
```
- none는 존재는 하지만 화면에 보이지 않는 것으로, 자바스크립트를 넣을 때 많이 사용합니다.
- block은 세로로 정렬되며, with의 heigh를 갖을 수 있다. 크기와 상관없이 한 줄을 점유합니다.
- inline은 가로로 정렬되며, with의 heigh를 갖을 수 없다. 컨텐츠의 크기만큼 공간을 점유합니다.
- inline-block는 기본적으로 inline의 특성을 갖지만, with와 heigh 등 block의 특성을 사용할 수 있습니다.

### 대표적인 block과 inline 태그는 다음과 같습니다.
- block
- inline
- flex는 컨테이너의 형태로 엘리먼트를 관리합니다.
- 최근 들어서는 Grid를 많이 사용합니다. Flex가 1차원 적이라면 Grid는 2차원 적으로 관리가 가능하기 때문
- visibilit 속성은 엘리먼트 가시성을 정의합니다
```js
div{
  visiblily: visible | hidden;
}
```
- 여기서 중요한 것은 diplay:none과 visibid는 차이입니다.

### 폰트와 관련된 속성
```js
#title {
	font-family: "사용할 글꼴 이름", <일반적인 글꼴 분류>;
    font-siz: value;
    font-weight: normal | bold;
    font-style: normal | italic | oblique;
}
```

### Style-components
- CSS 문법을 그대로 사용하면서 결과물을 스타일링된 컴포넌트 형태로 만들어 주는 오픈소스  라이브러리입니다.
- 컴포넌트의 개념을 사용하고 있어 리액트 개발에 많이 사용됩니다.
  ### 1. Styled-components 설치하기
  - npm install --save styled-components
  - 교재에는 위와 같이 save가 나와 있지만 npm v5부터는 생략해도 됩니다.

  ### 2. Styled-components 기본 사용법
  - 태그드 템플릿 리터럴을 사용하여 구성 요소의 스타일을 지정합니다.
  - 태그드 템플릿 리터럴을 자바스크립트에서 제공하는 문법 중 하나로 리터럴을 템플릿 현태로 사용하는 것입니다.

  ### 3. Styled-components props 사용하기
  - props를 이용하여 조건이나 동적으로 변하는 값을 사용해서 스타일링을 할 수 있습니다.

  ### 4. Styled-components의 스타일 확장하기
  - 먼저 정의한 스타일 컴포넌트에 스타일을 추가하여 재정의 하는 것이 가능합니다.




## 6월 11일
### Containment와 Specialization을 같이 사용하기
- Containment와를 위해서 props.children을 사용하고, Specialization을 위해 직접 정의한 props를 사용하면 됩니다.
- Dialog컴포넌트는 이전의 것과 비슷한데 Containment를 위해 끝부분에 props.childre을 추가 했습니다.
- Dialog를 사용하는 SignUpDialog는 Specialization을 위해 props인 title, message에 값을 넣어주고 있고, 입력을 받기위해 `<input>`과 `<button>`을 사용합니다.
이 두개의 태그는 모두 props.children으로 전달되어 다이얼로그에 표시됩니다.
- 이러한 형태로 Cotainment와 Specialization을 동시에 사용할 수 있습니다.
```js
function Dialog(props) {
  	return (
      	<FancyBorder color="blue">
      		<h1 className="Dialog-title">
      			{props.title}
			</h1>
			<p className="Dialog-message">		
              	{props.message}
			</p>
			// 이를 통해 하위 컴포넌트가 Dialog 하단에 렌더링
			{props.children}
		</FancyBorder>
	);
}
```
```js
function SignUpDialog(props) {
  	const [nickname, setNickname] = useState('');

  	const handleChange = (event) => {
      	setNickname(event.target.value);
    }
    
    const handleSignUp = () => {
      	alert(`어서오세요. ${nickname}님!`);
    }
    
    return (
      	<Dialog
   			// Specialization
      		// Specialization을 위한 props인 title, message에 값을 넣어줌
      		title="화성 탐사 프로그램"
      		message="닉네임을 입력해 주세요.">
      	// Containment
      	// 사용자로부터 입력받고 가입을 하도록 유도하기 위해 input과 button 태그 
      	// props.children에 전달, Dialog에 표시
          <input
              value={nickname}
              onChange={handleChange} />
          <button onClick={handleSignUp}>
              가입하기
          </button>
         </Dialog>
	);
}
```
### 컨텍스트란 무엇인가?
- 기존의 일반적인 리액트에서는 데이터가 컴포넌트의 props를 통해 부모에서 자식으로 단반향으로 전달되었습니다.
- 컨텍스트는 리액트 컴포넌트들 사이에서 데이터를 기존의 props를 통해 전달하는 방식 대신 `"컴포넌트 트리를 통해 곧바로 컴포넌트에 전달하는 새로운 방식"`을 제공합니다.
- 이 것을 통해 어떤 컴포넌트라도 쉽게 데이터에 접근할 수 있습니다.
- 컨텍스트를 사용하면 일일이 props로 전달할 필요 없이 그림처럼 데이터를 필요로 하는 컴포넌트에 곧바로 데이터를 수 있습니다.

![Alt text](img/image-1.png)
![Alt text](<img/image (1).png>)

### 언제 컨텍스트를 사용해야 할까?
- 여러 컴포넌트에서 자주 필요로 하는 데이터는 로그인 여부, 로그인 정보, UI 테마, 현재 선택된 언어 등이 있습니다.
- 이런 데이터들을 기존의 방식대로 컴포넌트의 props를 통해 넘겨주는 예를 페이지 392에서 보여주고 있습니다.
- 예제에서 처럼 props를 통해 데이터를 전달하는 기존 방식은 실제 데이터를 필요로 하는 컴포넌트까지의 깊이가 깊어질 수록 복잡해 집니다.
- 또한 반복전인 코드를 계속해서 작성해 주어야 하기 때문에 비효율적이고 가독성이 떨어집니다.
- 컨텍스트를 사용하면 이러한 방식을 깔끔하게 개선할 수 있습니다.

### 상속에 대해 알아보기
- 합성과 대비되는 개념으로 상속이 있습니다.
- 자식 클래스는 부모 클래스가 가진 변수나 함수 등의 속성을 모두 갖게 되는 개념입니다.
- 하지만 리액트에서는 상속보다는 합성을 통해 새로운 컴포넌트를 생성합니다.
- 복잡한 컴포넌트를 쪼개 여러 개의 컴포넌트로 만들고, 만든 컴포넌트들을 조합하여 새로운 컴포넌트를 만들자

### 컨텍스트를 사용하기 전에 고려할 점
- 컨텍스트는 다른 레벨의 많은 컴포넌트가 특정 데이터를 필요로 하는 경우에 주로 사용합니다.
- 하지만 무조건 컨텍스트를 사용하는 것이 좋은 것은 아닙니다.
- 왜냐하면 컴포넌트와 컨텍스트가 연동되면 재사용성이 떨어지기 때문입니다.
- 따라서 다른 레벨의 많은 컴포넌트가 데이터를 필요로 하는 경우가 아니면 props를 통해 데이터를 전달하는 컴포넌트 합성 방법이 더 적합 합니다.

### 컨텍스트 API
- 이 절에서는 리액트에서 제공하는 컨텍스트 API를 통해 컨텍스트를 어떻게 사용하는지에 대해 알아 봅시다.
  ### [1] React.createContext
    - 컨텍스트를 생성하기 위한 함수입니다.
    - 파라미터에는 기본값을 넣어주면 됩니다.
    - 하위 컴포넌트는 가장 가까운 상위 레벨의 Provider로 부터 컨텍스트를 받게 되지만, 만일 Provider를 찾을 수 없다면 설정한 기본값을 사용하게 됩니다.

  ### [2] Context.Provider
  - Context.Provider 컴포넌트로 하위 컴포넌트들을 감싸주면 모든 하위 컴포넌트들이 해당 컨텍스트의 데이터에 접근할 수 있게 됩니다.
  ```js
  <MyContext.Provider value = {/* some vlaue */ }> 
  ```
  - Provider 컴포넌트에서 value는 props가 있고, 이것은 Provider 컴포넌트 하위에 있는 컴포넌트에게 전달됩니다.
  - 하위 컴포넌트를 consumer 컴포넌트라고 부릅니다.

  ### [3] Class.contextType
  - Provider 하위에 있는 클래스 컴포넌트에서 컨텍스트의 데이터에 접근하기 위해 사용합니다.
  - Class 컴포넌트는 더 이상 사용하지 않으므로 참고만 합니다.

  ### [4] Context.Consumer
  - 함수형 컴포넌트에서 Context.Consumer를 사용하여 컨텍스트를 구독할 수 있습니다.
  - 컴포넌트의 자식으로 함수가 올 수 있는데 이것을 function as a child라고 부릅니다.
  - Context.Consumer로 감싸주면 자식으로 들어간

  ### [5] Context.displayName
  - 컨텍스트 객체는 displayName이라는 문자열 속성을 갖습니다.
  - 크롬의 리액트 개발자 도구에서는 컨텍스트의 Provider나 Consumer를 표시할 때 displayName를 함께 표시해 줍니다.
  - 예를 들어 아래와 같이 코드를 작성하면 MyDisplayName이 리액트 개발자 도구에 표시됩니다.
  ```js
  const MyContext = React.createContext(/* some value */);
  MyContext.displayName = 'MyDisplayName';

  // 개발자 도구에 "MyDisplayName.Provider"로 표시됨
  <MyContext.Provider>
    
  // 개발자 도구에 "MyDisplayName.Consumer"로 표시됨
  <MyContext.Consumer>
  ```

### 여러 개의 컨텍스트 사용하기
- 여러 개의 컨텍스트를 동시에 사용하려면 Context.Provider를 중첩해서 사용합니다.
- 예제에서는 ThemeContext와 UserContext를 중첩해서 사용하고 있습니다.
- 예제 코드는 페이지 403~404에 있습니다.
- 이런 방법으로 여러 개의 컨텍스트를 동시에 사용할 수 있습니다.
- 하지만 두 개 또는 그 이상의 컨텍스트 값이 자주 함께 사용될 경우 모든 값을 한 번에 제공해 주는 별도의 render prop 컴포넌트를 직접 만드는 것을 고려하는 것이 좋습니다.

### useContext
- 함수형 컴포넌트에서 컨텍스트를 사용하기 위해 컴포넌트를 매번 Consumer 컴포넌트로 감싸주는 것보다 더 좋은 방법이 있습니다. 바로 7장에서 배운 Hook 입니다.
- `useContext()` 훅은 React.createContext() 함수 호출로 생성된 컨텍스트 객체를 인자로 받아서 현재 컨텍스트의 값을 리턴합니다.

```js
function MyComponent(props){
	const value = useContext(MyContext);
  
  	return (
    	...
    )
}
```
- 이 방법도 가장 가까운 상위 Provider 부터 컨텍스트의 값을 받아옵니다.
- 만일 값이 변경되면 `useContext()` 훅을 사용하는 컴포넌트가 재 렌더링 됩니다.
- 또한 `useContext()` 훅을 사용할 때에는 파라미터로 컨텍스트 객체를 넣어줘야 한다는 것을 기억해야 합니다.


## 6월 5일
### Shared State
- Shared state는 state의 공유를 의미합니다.
- 같은 부모 컴포넌트의 state를 자식 컴포넌트가 공유해서 사용하는 것입니다.
- 다음 그림은 부모 컴포넌트가 섭씨 온도의 state를 갖고 있고, 이 것을 컴포넌트C와 컴포넌트F가 공유해서 사용하는 것을 보여 줍니다.

![Alt text](img/image.png)

### 하위 컴포넌트에서 State 공유하기
- 물의 끓음 여부를 알려주는 컴포넌트
- 섭씨 온도 값을 props로 전달 받아 물이 끓는지 안끓는지 문자열로 출력해주는 컴포넌트
```js
function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>물이 끓습니다.</p>;
    }
    return <p>물이 끓지 않습니다.</p>;
}
```
### Shared State 적용하기
- 다음은 하위 컴포넌트의 state를 부모 컴포넌트로 올려서 shared state를 적용합니다.
- 이것을 Lifting State Up (State 끌어 올리기)라고 합니다.
- 이를 위해 먼저 TemperatureInput 컴포넌트에서 온도 값을 가져오는 부분을 다음과 같이 수정합니다.
- 이렇게 수정하면 온도를 state에서 가져오지 않고 props를 통해 가져옵니다.

```js
export default function TemperatureInput(props) {
    //const [temperature, setTemperature] = useState('')
    const handleChange = (e) => {
        //setTemperature(e.target.value)
        props.onTemperatureChange(e.target.value)
    }
        return(
        <fieldset>
            <legend>섭씨 온도를 입력하세요(단위: {scaleName[props.scale]})</legend>
            <input type="number" value={props.temperature}
            onChange={handleChange} />
        </fieldset>
    )
}
```
- 또 한가지 컴포넌트의 state를 사용하지 않기 때문에 입력 값이 변경되었을 때 상위 컴포넌트로 변경된 값을 전달해 주어야 합니다.
- 이를 위해 handler함수를 다음과 같이 수정해줍니다.
- 최종 코드는 다음과 같이 state는 제거되고, 상위 컴포넌트에서 전달받은 값만 사용합니다.
- 상위 컴포넌트인 Calculator에서 온도와 단위를 state로 갖고
- 두개의 하위 컴포넌트는 각각 섭씨, 화씨로 변환된 온도와 단위, 그리고 온도를 업데이트하기 위한 함수를 props로 갖고 있습니다
- 만일 여러 개의 chidren 집합이 필요할 경우에도 별도로 props를 정의해서 각각 원하는 컴포넌트를 넣어줍니다.

### 정리하면
- 상위 컴포넌트만 Calculator에서 온도와 단위를 state로 갖고
- 두개의 하위 컴포넌트는 각각 섭씨와 화씨로 변환된 온도와 단위, 그리고 온도를 업데이트하기 위한 함수를 props로 갖고 있습니다.
- 이렇게 모든 컴포넌트가 state를 갖지 않고, 상위 컴포넌트로 올려서 공유하면 리액트를 더욱 간결하고 효율적이로 개발할 수 있습니다.

### 합성(Compostion)에 대해 알보기
- 합성은 여러 개의 컴포넌트를 합쳐서 새로운 컴포넌트를 만드는 것입니다.
- 조합 방법에 따라 합성의 사용 기법은 다음과 같이 나눌 수 있습니다.

  **1. Containment (담다, 포함하다, 격리하다)**
  - 특정 컴포넌트가 하위 컴포넌트를 포함하는 형태의 합성 방법입니다.
  - 컴포넌트에 따라서는 어떤 자식 엘리먼트가 들어올지 미리 예상할 수 없는 경우가 있습니다.
  - 범용적인 박스 역할을 하는 Sidebar 혹은 Dialog와 같은 컴포넌트에서 특히 자주 볼 수 있습니다.
  - 이런 컴포넌트에서는 children prop을 사용하여 자식 엘리먼트를 출력에 그대로 전달하는 것이 좋습니다.
  - 이때 children prop은 컴포넌트의 props에 기본적으로 들어있는 children속성을 사용합니다.
  - 다음과 같이 props.children을 사용하면 해당 컴포넌트의 하위 컴포넌트가 모두 children으로 들어오게 됩니다.
```js
function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}
```
### Specialization (특수화, 전문화)
- 웰컴다이얼로그는 다이얼로그의 특별한 케이스입니다.
- 범용적인 개념을 구별이 되게 구체화하는 것을 특수화라고 합니다.
- 객체지향 언어에서는 상속을 사용하여 특수화를 구현합니다.
- 리액트에서는 합성을 사용하여 특수화를 구현합니다.
- 다음 예와 같이 특수화는 범용적으로 쓸 수 있는 컴포넌트를 만들어 놓고 이를 특수한 목적으로 사용하는 합성 방식입니다.
```js
function Dialog(props) {
  	return (
      	<FancyBorder color="blue">
      		<h1 className="Dialog-title">
      			// 두 가지 props 사용
      			// 제목
      			{props.title}
			</h1>
			<p className="Dialog-message">		
              	// 메시지
              	{props.message}
			</p>
		</FancyBorder>
	);
}

function WelcomeDialog(props) {
  	return (
      	<Dialog
      		title="어서 오세요"
      		message="우리 사이트에 방문하신 것을 환영합니다!"
      	/>
    );
}

```

## 5월 29일
### textarea 태그
- 여러 줄에 걸쳐서 나올 정도의 긴 텍스트를 입력받기 위한 HTML 태그
- HTML 에서는 아래와 같이 텍스트를 태그가 감싸는 형태로 사용
```js
<textarea>
  이곳에 긴 텍스트가 들어가게 됩니다.
</textarea>
```
- 리액트에서는 `<textarea>` 태그에 value라는 attribute를 사용하여 텍스트를 표시 제어 컴포넌트 방식이므로 값을 컴포넌트의 state를 사용해서 다룰 수 있음

### select 태그
```js
<select>
    <option value="apple">사과</option>
    <option value="banana">바나나</option>
    <option selected value="grape">포도</option>
    <option value="watermelon">수박</option>
</select>
```
- 드롭다운(drop-down) 목록을 보여주기 위한 HTML 태그
- 여러 가지 옵션 중에서 하나를 선택할 수 있는 기능을 제공

### File input 태그
- 디바이스의 저장 장치로부터 사용자가 하나 또는 여러 개의 파일을 선택할 수 있게 해주는 HTML 태그
- 서버로 파일을 업로드하거나 자바스크립트의 File API를 사용해서 파일을 다룰 때 사용
아래와 같이 `<input>` 태그를 사용하고 타입을 file로 해주면 됩니다.
- File input 태그는 그 값이 읽기 전용이기 때문에 리액트에서는 비제어 컴포넌트가 됩니다.
```js
<input type="file" />
```

### File input 태그 (여러 개의 입력 다루기)
- 하나의 컴포넌트에서 여러 개의 입력을 다루기 위해서는 어떻게 해야할까?
- 여러 개의 state를 선언하여 각각의 입력에 대해 사용하면 됨
- 아침 식사 선택 유무를 **checkbox type**으로, 방문객 수를 **number type**으로 제출할 수 있는 Reservation 컴포넌트를 작성해보자.
```js
import React, {useState} from 'react';

function Reservation(props) {
    const [haveBreakfast, setHaveBreakfast] = useState(true);
    const [numberOfGuest, setNumberOfGuest] = useState(2);

    const handleSubmit = (event) => {
        alert(`아침식사 여부:  ${haveBreakfast}, 방문객 수: ${numberOfGuest}`);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                아침식사 여부:
                <input type="checkbox" checked={haveBreakfast} 
                    onChange={(event) => {
                        setHaveBreakfast(event.target.checked)
                    }} />
            </label>
            <br />
            <label>
                방문객 수:
                <input type="number" value={numberOfGuest} 
                    onChange={(event) => {
                        setNumberOfGuest(event.target.value)
                    }} />
            </label>
            <button type="submit">제출</button>
        </form>
    )
}

export default Reservation
```

### Input Null Value
- 제어 컴포넌트에 value prop을 정해진 값으로 넣으면 코드를 수정하지 않는 한 입력값을 바꿀 수 없습니다.
- 만약 value prop은 넣되 자유롭게 입력할 수 있게 만들고 싶다면 값이 undefined 또는 null을 넣어주면 됩니다.
```js
ReactDOM.render(<input value="hi" />, rootNode);

setTime(function() {
    ReactDOM.render(<input value={null} />, rootNode);
}, 1000);
```

## 5월 22일
### 리스트와 키란 무엇인가?
- 리스트는 자바스크립트의 변수나 객체를 하나의 변수로 묶어 놓은 배열과 같은 것입니다.
- 키는 각 객체나 아이템을 구분할 수 있는 고유한 값을 의미합니다.
- 리액트에서는 배열과 키를 사용하는 반복되는 다수의 엘리먼트를 쉽게 렌더링할 수 있습니다.

### 여러 개의 컴포넌트 렌더링 하기
- 다음은 numbers 배열에 들어있는 각각의 요소를 map()를 이용하여 하나씩 추출하여, 2를 곱한 후 double이라는 배열에 다시 넣은 코드입니다.
```js
const doubled = numbers.map((number) => number * 2);
```
- 다음은 리액트에서 map()함수를 사용한 예제입니다.
```js
const numbers = [1,2,3,4,5];
const listItem = numbers.map((number) =>
  <li>{number}</li>
);
```

### 리스트의 키에 대해 알아보기
- 리스트에서의 키는 **"리스트에서 아이템을 구별하기 위한 고유한 문자열"** 입니다.
- 이 키는 리스트에서 어떤 아이템이 변경, 추가 또는 제거되어는지 구분하기 위해 사용합니다.
- 키는 같은 리스트에 있는 엘리언트 사이에서만 고유한 값이면 됩니다.

### 폼이란 무엇인가
- 폼은 일반적으로 사용자로부터 입력을 받기위한 양식에서 많이 사용됩니다.

### 제어 컴포넌트
- 제어 컴포넌트는 사용자가 입력한 값에 접근하고 제어할 수 있도록 해주는 컴포넌트입니다.
## 5월 8일
### Arguments
- 함수를 정의할 때는 파라미터 혹은 매개변수
- 함수를 사용할 때는 아귀먼트 혹은 인수 라고 부릅니다.
- 이벤트 핸들러에 매개변수를 전달해야 하는 경우도 많습니다.

```js
<button onClick={(event)=> this.deleteItem(id, event)}>삭제하기</button>
<button onClick={this.deleteItem.bind(this, id)}>삭제하기</button>
```
- 위 코드는 모두 동일한 역할을 하지만 하나는 화살표 함수를, 다른 하나는 bind를 사용했습니다.
- event라는 매개변수는 리액트의 이벤트 객체를 의미합니다.
- 두 방법 모두 첫 번째 매개변수는 id이고 두 번째 매개변수로 event가 전달 됩니다.

### 조건부 렌더링이란?
- 여기서 조건이란 우리가 알고 있는 조건문의 조건입니다.
```js
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

```
- props로 전달 받은 isLoggedIn이 true이면 <UserGreeting />을, false면 <GuestGreeting />을 return합니다.
- 이와 같은 렌더링을 조건부 렌더링 이라고 합니다.

### 엘리먼트 변수
```js
let button;
if(isLoggedIn){
  button = <Logoutbutton onClick={handleLogoutClick}/>
}else {
  button = <Loginbutton onClick={handleLoginClick}/>
}
return (
    <div>
        <Greeting isLoggedIn={isLoggedIn}>
        {button}
    </div>
)
```
- 렌더링해야 될 컴포넌트를 변수처럼 사용하는 방법이 엘리먼트 변수 입니다.
- 8페이지 코드 처럼 state에 따라 button 변수에 컴포넌트의 객체를 저장하여 return문에서 사용하고 있습니다.

### 인라인 조건
- 필요한 곳에 조건문을 직접 넣어 사용하는 방법입니다.

```js
ture && expression -> expression
false && expression -> false
```
### 1. 인라인 if
- if문을 직접 사용하지 않고, 동일한 효과를 내기 위해 && 논리 연산자를 사용합니다.
- &&는 and연산자로 모든 조건이 참일때만 참이 됩니다.
- 첫 번째 조건이 거짓이면 두 번째 조건은 판단할 필요가 없습니다. 단축평가
### 2. 인라인 if-else
```js
조건문 ? 참일 경우 : 거짓일 경우
```
- 삼항 연사자를 사용합니다.
- 문자열이나 엘리먼트를 넣어서 사용할 수도 있습니다.

### 컴포넌트 렌더링 막기
```js
function WarningBanner(props) {
  if (!props.warning) {
    return null;
  }
  return (
    <div>경고!</div>
  );
}
```
- 컴포넌트를 렌더링하고 싶지 않을 때에는 null을 리턴합니다.


## 5월 1일

### 훅의 규칙
- 첫 번째 규칙은 무조건 최상위 레벨에서만 호출해야 한다는 것입니다.
- 따라서 반복문이나 조건문 또는 중첩된 함수들 안에서 훅을 호출하면 안 됩니다.
- 이 규칙에 따라서 훅은 컴포넌트가 렌더링 될 때마다 같은 순서로 호출되어야 합니다.
- 아래 코드는 조건에 따라 호출되기 때문에 잘못된 코드입니다.
```js
function MyComponent(props) {
  const [name, setName] = useState('Inje');

  if(name !== ''){
    useEffect(() => {
      ...
    })
  }

  ...
}
```
- 두 번째 규칙은 함수형 컴포넌트에서만 훅을 호출해야 한다는 것입니다.
- 따라서 일반 자바스크립트 함수에서 훅을 호출하면 안 됩니다.
- 훅은 함수형 컴포넌트 혹은 직접 만든 커스텀 훅에서만 호출할 수 있습니다.

### 나만의 훅 만들기
- 필요 하다면 직접 훅을 만들어 쓸 수도 있습니다. 이것을 커스텀 훅 이라고 합니다.
- 커스텀 훅을 만들어야 하는 상황
- 다음 예는 연락처 목록을 제공하는데, 온라인인 사용자의 이름은 초록색으로 표시하는 `UserListItem` 컴포넌트 입니다.

### 커스텀 훅 추출하기
- 한가지 주의할 점은 일반 컴포넌트와 마찬가지로 다른 훅을 호출하는 것은 무조건 훅의 상위 레벨에서만 해야 합니다.
- 이름은 `use`로 시작되도록 합니다. 그렇지 않으면 다른 훅를 불러올 수 없습니다.
- `useUserStatus()` 훅의 목적은 사용자의 온라인/오프라인 상태를 구독하는 것 입니다.

### 커스텀 훅 사용하기
- 2에서 작성했던 코드를 사용자 훅을 사용해서 수정하면 다음과 같습니다.
```js 
export default function UserStatus (props) {
    const isOnline = useUserStatus(props.user.id)
    
    if (isOnline === null) {
        return '대기중...'
    }
    return isOnline ? '온라인' : '오프라인'
}

export default function UserListItem (props) {
    const isOnline = useUserStatus(props.user.id)
    
    return(
        <li style={{ color: isOnline ? 'green' : 'black'}}>
            {props.user.name}
        </li>
    )
}
```

### 이벤트 처리하기
- DOM 클릭 이벤트를 처리하는 예제 코드
```js
<button onClick="activate()">
    Activate
</button>
```
-React에서 클릭 이벤트 처리하는 예제 코드
```js
<button onClick={activate}>
    Activate
</button>
```
- 둘의 차이점은
1. 이벤트 이름이 onclick에서 onClick으로 변경 (Camel case)

2. 전달하려는 함수는 문자열에서 함수 그대로 전달

- 이벤트가 발생했을 때 해당 이벤트를 처리하는 함수를 `"이벤트 핸들러(Event Handler)"`라고 합니다. 또는 이벤트가 발생하는 것을 계속 듣고 있다는 의미로 `"이벤트 리스너(Event Listener)"`라고 부르기도합니다.

### 이벤트 핸들러 추가하는 방법은?
```js
class Toggle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {isToggleOn: true};

    this.handleClick = this.handleClick.bind(this);

  }
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? '켜짐' : '꺼짐'}
      </button>
    );
  }
}
```
- 버튼을 클릭하면 이벤트 핸들러 함수인 `handleClick()함수`를 호출 하도록 되어 있습니다.
- `bind`를 사용하지 않으면 this.handleClick은 글로벌 스코프에서 호출되어 **undefind**으로 사용할 수 없기 때문입니다.
- `bind`를 사용하지 않으려면 화살표 함수를 사용하는 방법도 있습니다.
- 하지만 클래스 컴포넌트는 이제 거의 사용하지 않기 때문에 이 내용은 참고만 합니다.

## 4월 17일 강의

### 훅이란 무엇인가?
- 클래스형 컴포넌트에서는 생성자에서 state를 정의하고, setState()함수를 통해 state를 업데이트 합니다.
- 예전에 사용하던 함수형 컴포넌트는 별도로 state를 정의하거나, 컴포넌트의 생명주기에 맞춰서 어떤 코드가 실행되도록 할 수 없었습니다.
- 함수형 컴포넌트에서도 state나 생명주기 함수의 기능을 사용하게 해주기 위해 추가된 기능이 바로 `훅(Hook)`입니다.
- 함수형 컴포넌트도 훅을 사용하여 클래스형 컴포넌트의 기능을 모두 동일하게 구현할 수 있ㅎ게 되었습니다.
- Hook이란 'state와 생명주기 기능에 갈고기를 걸어 원하는 시점에 정해진 함수를 실행되도록 만든 함수'를 의미합니다.
- 훅의 이름은 모두 `use`로 시작합니다.
- 사용자 정의 훅(custom hook)을 만들 수 있으며, 이 경우에 이름은 자유롭게 할 수 있으나 `use`로 시작할 것을 권장합니다.

### useState
- useState는 함수형 컴포넌트에서 state를 사용하기 위한 Hook 입니다.
- 다음 예제는 버튼을 클릭할 때마다 카운트가 증가하는 함수형 컴포넌트 입니다.
- 하지만 증가는 시킬 수 있지만 증가할 때마다 재 렌더링은 일어나지 않습니다.
- 이럴 때 state를 사용해야 하지만 함수형에는 없기때문에 useState()를 사용합니다.
- useState() 함수의 사용법은 다음과 같습니다.
- 첫번째 항목은 state의 이름(변수명)이고,
- 두번째 항목은 state의 set함수입니다. 즉 state를 업데이트 하는 함수입니다.
- 함수를 호출 할 때 state의 초기값을 설정합니다.
- 함수의 리턴 값은 배열의 형태입니다.
```js 
import { useState } from "react"

export default function Counter(props) {
    // let count = 0
    const [count, setCount] = useState(0) // useState(초기값) 

    return (
        <>
            <p>총 {count}</p>
            <button onClick={() => setCount(count+1)}>
                클릭
            </button>
        </>
    )
}
```

### useEffect
- useState와 함께 가장 많이 사용하는 Hook입니다.
- 이 함수는 사이드 이펙트를 수행하기 위한 것입니다.
- 영어로 side effect는 부작용을 의미합니다. 일반적으로 프로그래밍에서 사이트 이펙트는 '개발자가 의도하지 않은 코드가 실행되면서 버그가 발생하는 것'을 말합니다.
- 하지만 리액트에서는 효과 또는 영향을 뜻하는 effect의 의미에 가깝습니다.
- 예를 들면 서버에서 데이터를 받아오거나 수동으로 DOM을 변경하는 등의 작업을 의미합니다.
- 이 작업을 이펙트라고 부르는 이유는 이 작업들이 다른 컴포넌트에 영향을 미칠 수 있으며, 렌더링 중에는 작업이 완료될 수 없기 때문입니다. 렌더링이 끝난 이후에 실행되어야 하는 작업들입니다.
- 클래스 컴포넌트의 생명주기 함수와 같은 기능을 하나로 통합한 기능을 제공합니다.
- 저자는 useEffect가 side effect가 아니라 effect에 가깝다고 설명하고 있지만, 이것은 부작용의 의미를 잘못 해석해서 생긴 오해이다. 부작용의 부를 不로 생각했기 때문입니다.
- Side effect는 원래의 용도 혹은 목적의 효과외에 부수적으로 다른 효과가 있는 것을 뜻하는 겁니다.
- 결국 sideEffect는 렌더링 외에 실행해야 하는 부수적인 코드를 말합니다.
- 예를 들면 네트워크 리퀘스트, DOM 수동 조작, 로깅 등은 정리가 필요 없는 경우들입니다.
- useEffect()함수는 다음과 같이 사용합니다.
- 첫 번째 파라미터는 이펙트 함수가 들어가고, 두 번째 파라미터로는 의존성 배열이 들어갑니다.
```js
useEffect(이펙트 함수, 의존성 배열);
```
- 의존성 배열은 이펙트가 의존하고 있는 배열로, 배열 안에 있는 변수 중에 하나라도 값이 변경되었을 때 이펙트 함수가 실행됩니다.
- 이펙트 함수는 처음 컴포넌트가 렌더링 된 이후, 그리고 재 렌더링 이후에 실행됩니다.
- 만약 이펙트 함수가 마운트와 언마운트 될 때만 한 번씩 실행되게 하고 싶으면 빈 배열을 넣으면 됩니다. 이 경우 props나 state에 있는 어떤 값에도 의존하지 않기때문에 여러 번 실행되지 않습니다.

### useMemo
```js
const memoizedValue = useMemo(
  () => {
    // 연산량이 높은 작업을 수행하여 결과를 반환
    return computeExpensiveValue(의존성 변수1, 의존성 변수2);
  },
  [의존성 변수1, 의존성 변수2]
);
```
- useMemo() 훅은 Memoized value를 리턴하는 훅입니다.
- 이전 계산값을 갖고 있기 때문에 연산량이 많은 작업의 반복을 피할 수 있습니다.
- 이 훅은 렌더링이 일어나는 동안 실행됩니다.
- 따라서 렌더링이 일어나는 동안 실행돼서는 안될 작업을 넣으면 안됩니다.
- 예를 들면 useEffect에서 실행되어야 할 사이드 이펙트 같은 것입니다.
```js
const memoizedValue = useMemo(
  () => computeExpensiveValue(a, b)
);
``` 
- 다음 코드와 같이 의존성 배열을 넣지 않을 경우, 렌더링이 일어날 때마다 매번 함수가 실행됩니다.
- 따라서 의존성 배열을 넣지 않는 것은 의미가 없습니다.
- 만약 빈 배열을 넣게 되면 컴포넌트 마운트 시에만 함수가 실행됩니다.


### useCallback
- uscCallback() 훅은 useMemo()와 유사한 역할을 합니다.
- 차이점은 값이 아닌 함수를 반환한다는 점입니다.
- 의존성 배열을 파라미터로 받는 것은 useMemo와 동일 합니다.
- 파라미터로 받은 함수를 콜백이라고 부릅니다.
- useMemo와 마찬가지로 의존성 배열 중 하나라도 변경되면 콜백함수를 반환합니다.

### useRef
- useRef() 훅은 레퍼런스를 사용하기 위한 훅입니다.
- 레퍼런스란 특정 컴포넌트에 접근할 수 있는 객체를 의미합니다.
- useRef() 훅은 바로 이 레퍼런스 객체를 반환합니다.
- 레퍼런스 객체에는 .current라는 속성이 있는데, 이것은 현재 참조하고 있는 엘리먼트를 의미합니다.
```js
const refContainer = useRef(초기값);
```
- 이렇게 반환된 레퍼런스 객체는 컴포넌트의 라이프타임 전체에 걸쳐서 유지됩니다. 즉, 컴포넌트가 마운트 해제전까지는 계속 유지된다는 의미입니다.

## 4월 3일 강의

### Props 사용법
JSX에서는 key-value쌍으로 `props`를 구성합니다.
```js
function App(props) {
  return (
    <Profile
          name="소플"
          introduction="안녕하세요. 소플입니다."
          viewCount={1500}
          />
  );
}
```
위의 코드는 Profile 컴포넌트로 name, introduction, viewCount Props를 전달한다.<br>
이때 전달되는 props는 다음과 같은 자바스크립트 객체입니다.<br>
JSX에서는 중괄호를 사용하면 JS코드를 넣을 수 있다고 배웠습니다.<br>

```js
function App(props) {
  return (
    <Layout
          width={2560}
          height={1440}
          header={
              <Header title="소플의 블로그입니다." />
          }
          footer={
            <footer />
          }
      />
  );
}
```
위의 코드처럼 props를 vlaue를 할당 할 수도 있고, 직접 중괄호를 사용하여 할당할 수도 있습니다.<br>
JSX를 사용하지 않는 경우 props의 전달 방법은 `createElement()함수`를 사용하는 것입니다.

### <컴포넌트 만들기>
### 컴포넌트의 종류
- 리액트 초기 버전을 사용할 때는 클래스형 컴포넌트를 주로 사용했습니다.
- 이후 Hook이라는 개념이 나오면서 최근에는 함수형 컴포넌트를 주로 사용합니다.
- 예전에 작성된 코드나 문서들이 클래스형 컴포넌트를 사용하고 있기 때문에,
- 클래스형 컴포넌트와 컴포넌트의 생명주기에 관해서도 공부해 두어야 합니다.

### 함수형 컴포넌트
- Welcome컴포넌트는 props를 받아, 받은 props중 name키의 값을 "안녕," 뒤에 넣어 반환합니다.

### 클래스형 컴포넌트
- Welcome컴포넌트는 React.Component class로 부터 상속을 받아 선언합니다.

### 컴포넌트 이름 짓기
- 이름은 항상 대문자로 시작합니다.
- 왜냐하면 리액트는 소문자로 시작하는 컴포넌트를 DOM 태그로 인식하기 때문입니다. html tag.
- 컴포넌트 파일 이름과 컴포넌트 이름은 같게 합니다.

### 컴포넌트의 랜더링
- 랜더링의 과정은 다음 코드와 같습니다.
```js
function Welcome(props) {
  return <h1>안녕, {props.name}</h1>
}

const element = <Welcome name = "인제" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
```

### 컴포넌트  합성
- 컴포넌트 합성은 여러 개의 컴포넌트를 합쳐서 하나의 컴포넌트를 만드는 것입니다.
- 리액트에서는 컴포넌트 안에 또 다른 컴포넌트를 사용할 수 있기 때문에, 복잡한 화면을 여러개의 컴포넌트로 나누어 구현할 수 있습니다.

### 컴포넌트 추출
- 복잡한 컴포넌트를 쪼개서 여러 개의 컴포넌트를 나눌 수도 있습니다.
- 큰 컴포넌트에서 일부로 추출해서 새로운 컴포넌트를 만드는 것입니다.
- 실무에서는 처음부터 1개의 컴포넌트에 하나의 기능만 사용하도록 설계하는 것이 좋습니다.
- Comment는 댓글 표시 컴포넌트입니다.
- 내부에는 이미지, 이름, 댓글과 작성일이 포함되어 있습니다.
- 첫 번째로 이미지 부분을 Avatar 컴포넌트로 출해 보겠습니다.
- 두 번째로 사용자 정보 부분을 추출합니다.
- 컴포넌트 이름은 UserInfo로 합니다. React 컴포넌트 이름은 Camel notation을 사용합니다.
- UserInfo 안에 Avatar 컴포넌트를 넣어서 완성시킵니다.  
```js
function UserInfo(props) {
  return (
    <div className="user-info">
      <Avatar user={props.user} />
      <div className="user-info-name">
          {props.user.name}
      </div>
    </div>
  );
}
```

### State 란?
- State는 리액트 컴포넌트의 상태를 의미합니다.
- 상태의 의미는 정상인지 비정상인지가 아니라 컴포넌트의 데이터를 의미합니다.
- 정확히는 컴포넌트의 변경가능한 데이터를 의미합니다.
- State가 변하면 다시 렌더링이 되기 때문에 렌더링과 관련된 값만 state에 포함시켜야 합니다.

### State의 특징
- 리액트만의 특별한 형태가 아닌 단지 자바스크립트 객체일 뿐입니다.
- 예의 LikeButton은 class 컴포넌트입니다.
- constructor는 생성자이고 그 안에 있는
- this.state가 현 컴포넌트의 state입니다.
- 함수형에서는 useState()라는 함수 사용합니다.
- state는 변경이 가능하다고 했지만 직접수정해서는 안됩니다.
- 불가능 하다고 생각하는 것이 좋습니다.
- state를 변경하고자 할 때는 setstate()함수를 사용합니다.

### State 생명주기에 대해 알아보기
- 생명주기는 컴포넌트의 생성 시점, 사용 시점, 종료 시점을 나타내는 것입니다.
- constructor가 실행 되면서 컴포넌트가 생성됩니다.
- 생성 직후 componentDidMount()함수가 호출됩니다.
- 컴포넌트가 소멸하기 전까지 여러 번 렌더링 합니다.
- 랜더링은 props, setState(), forceUpdate()에 의해 상태가 변경되면 이루어집니다.
- 그리고 렌더링이 끝나면 componentDinUpdate()함수가 호출됩니다.
- 마지막으로 컴포넌트가 언마운트되면 compomentWillUnmount()함수가 호출됩니다.

## 3월 27일 강의

### Props에 대해 알아보기
- Props는 prop(property : 속성, 특성)의 준말입니다.
- 이 props가 바로 컴포넌트의 속성입니다.
- 컴포넌트에 어떤 속성, props를 넣느냐에 따라서 속성이 다른 엘리먼트가 출력됩니다.
- props는 컴포넌트에 전달 할 다양한 정보를 담고 있는 자바스크립트 객체입니다.
- 에어비앤비의 예도 마찬가지 입니다.

### Props의 특징
- 읽기 전용입니다. 변경할 수 없다는 의미 입니다.
- 속성이 다른 엘리먼트를 생성하려면 새로운 props를 컴포넌트에 전달하면 됩니다.

### Pure 함수 vs Impure 함수
- Pure함수는 인수로 받은 정보가 함수 내부에서도 변하지 않는 함수입니다.
- Impure함수는 인수로 받은 정봐 함수 내부에서 변하는 함수 입니다.
```js
// pure함수
// input을 변경하지 않으며 같은 input에 대해서 항상 같은 output을 리턴
function sum(a,b) {  
  return a + b;
}
```
```js
// impure 함수
// input을 변경함
function withdraw(account, amount) { 
  account.total -= amount;
}
```
- 리액트 공식 문서에는 컴포넌트의 특징을 다음과 같이 설명하고 있습니다.
- 모든 리액트 컴포넌트는 그들의 props에 관해서는 pure함수 같은 역할을 해야 한다.
- 다시 말해 "모든 리액트 컴포넌트는 props를 직접 바꿀 수 없고, 같은 props에 대해서는 항상 같은 결과를 보여준다."는 이야기 입니다.

### 컴포넌트에 대해 알아보기
- 2장에서 설명한 바와 같이 리액트는 컴포넌트 기반의 구조를 같습니다.
- 컴포넌트 구조라는 것은 작은 컴포넌트가 모여 큰 컴포넌트를 구성하고, 다시 이런 컴포넌트들이 모여서 전체 페이지를 구성한다는 것을 의미합니다.
- 컴포넌트 재사용이 가능하기 때문에 전체 코드의 양을 줄일 수 있어 개발 시간과 유지 보수 비용도 줄일 수 있습니다.
- 컴포넌트는 자바스크립트 함수와 입력과 출력이 있다는 면에서는 유사합니다.
- 다만 입력은 Props가 담당하고, 출력은 리액트 엘리먼트의 형태로 출력됩니다.
- 엘리먼트를 필요한 만큼 만들어 사용한다는 면에서는 객체 지향의 개념과 비슷합니다.

### 엘리먼트의 정의
- 엘리먼트는 리액트 앱을 구성하는 요소를 의미합니다.
- 공식페이지에는 "엘리먼트는 리액트 앱의 가장 적은 빌딩 블록들"이라고 설명하고 있습니다.
- 웹사이트의 경우는 DOM 엘리먼트이며 HTML요소를 의미합니다.

### 엘리먼트의 생김새
- 리액트 엘리먼트는 자바스크립트 객체의 형태로 존재합니다.
- 컴포넌트(Button 등), 속성(color 등) 및 내부의 모든 children을 포함하는 일반 JS객체입니다.
- 이 객체는 마음대로 변경할 수 없는 불변성을 갖고 있습니다.
- 리액트 엘리먼트의 예를 보면 type에 태그 대신 리액트 컴포넌트가 들어가 있는 것 외에는 차이가 없다는 것을 알 수 있습니다.
- 역시 자바스크립트 객체입니다.

```js
{
  type : button
  props: {
    color: 'green';
    children: 'Hello, element!'
  }
}
```
내부적으로 자바스크립트 객체를 만드는 역할을 하는 함수가 createElement()입니다.
- 첫 번째 매개변수가 type입니다.이 곳에 태그가 들어가면 그대로 표현하고, 만일 리액트 컴포넌트가 들어가면 이 것을 분해해 결국 태그로 만들게 됩니다.
- 두 번째 매개변수인 props는 속성을 나타냅니다.
- 세 번째 매개변수는 children입니다. 자식 태그라고 이해하면 됩니다.

### 리액트 엘리먼트와 DOM엘리먼트의 차이
- 리액트 엘리먼트는 Virtual DOM의 형태를 취하고 있습니다.
- DOM 엘리먼트는 페이지의 모든 정보를 갖고 있어 무겁습니다.
- 반면 리액트 엘리먼트는 변화한 부분만 갖고 있어 가볍습니다.

### 엘리먼트의 특징
- 리액트 엘리먼트의 가장 큰 특징은 불변성입니다.
- 즉. 한 번 생성된 엘리먼트의 children이나 속성을 바꿀 수 없습니다.

#### 만일 내용이 바뀌면 어떻게 해야 할까요?

- 이 때는 컴포넌트를 통해 새로운 엘리먼트를 생성하면 됩니다.
- 그 다음 이전 엘리먼트와 교체를 하는 방법으로 내용을 바꾸는 것입니다.
- 이렇게 교체하는 작업을 하기 위해 virtual DOM을 사용합니다.

### 엘리먼트를 랜더링하기 위해서는 다음과 같은 코드가 필요합니다.
```js
const element = <h1>안녕, 리액트!</h1>;
ReactDOM.render(element, document.getElementById('root'));
```

### 랜더링된 엘리먼트 업데이트하기
- 다음 코드는 tick() 함수를 정의하고 있습니다.
- 이 함수는 현재 시간을 포함한 element를 생성해서 root div에 랜더링해줍니다.
- 그런데 라인12에 보면 setInterval()함수를 이용해서 위에서 정의한 tick()를 1초에 한번씩 호출하고 있습니다.
- 결국 1초에 한번씩 element를 새로 만들고 그것을 교체하는 것입니다.
- 다음 코드를 실행하고, 크롬 개발자도구에서 확인해 보면 시간 부분만 업데이트 되는 것을 확인할 수 있습니다.
```js
function tick() {
    const element = (
        <div>
            <h1>안녕, 리액트</h1>
            <h2>현재 시간 : {new Date().toLocaleTimeString()}</h2>
        </div>
    );

    ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
```
### JSX의 역할
- JSX는 내부적으로 XML/HTML 코드를 자바스크립트로 변환합니다.
- React가 createElement함수를 사용하여 자바스크립트로 변환해 줍니다.
- 만일 jS로 작업할 경우 직접 createElement함수를 사용해야 합니다.
- JSX는 가독성을 높여 주는 역할을 합니다.

### JSX의 장점
- 코드가 간결해 집니다.
- 가독성이 향상 됩니다.
- Injection Attack이라 불리는 해킹 방법을 방어함으로써 보안에 강합니다.

### JSX 사용법
- 모든 자바스크립트 문법을 지원합니다.
- 자바스크립트 문법에 XML과 HTML을 섞어서 사용합니다.
- 만일 html이나 xml에 자바스크립트 코드를 사용하고 싶으면 {}괄호를 사용합니다.

## 3월 20일 강의
### React란? 웹 및 앱 유저 인터페이스를 위한 라이브러리.

복잡한 사이트를 쉽고 빠르게 만들고, 관리하기 위해 만들어진 것이 바로 리액트입니다.
SPA(Single Page Application)를 쉽고 빠르게 만들 수 있도록 해주는 도구라고 생각하면 됩니다.

### 컴포넌트 기반 구조
- 리액트의 모든 페이지는 컴포넌트로 구성됩니다.
- 하나의 컴포넌트는 다른 여러 개의 컴포넌트의 조합으로 구성할 수 있습니다.
- 그래서 리액트로 개발을 하다 보면 레고 블록을 조립나는 것처럼 컴포넌트를 조합해서 - 웹사이트를 개발하게 됩니다.
- 아래 그림은 에어비앤비 사이트 화면의 컴포넌트 구조 입니다. 재사용성이 뛰어납니다.

### 재사용성
- 반복적인 작업을 줄여주기 때문에 생산성을 높여 줍니다.
- 또한 유지보수가 용이합니다.
- 재사용이 가능 하려면 해당 모듈의 의존성이 없어야 합니다.

### 리액트의 장점
#### 빠른 업데이트와 렌더링 속도
- 이 것을 가능하게 하는 것이 바로 Virtual DOM입니다.
- DOM(Document Object Model)이란 XML, HTML 문서의 각 항목을 계층으로 표현하여 생성, 변형, 삭제할 수 있도록 돕는 인터페이스입니다. 이것은 W3C의 표준입니다.
- Virtual DOM은 DOM 조작이 비효율적인 이유로 속도가 느리기 떄문에 고안된 방법입니다.
- DOM은 동기식, Virtual DOM은 비동기식 방법으로 렌더링을 합니다.

### 든든한 지원군
- 메타(구 페이스북)에서 오픈소스 프로젝트로 관리하고 있어 계속 발전하고 있습니다.

### 활발한 지식 공유 & 커뮤니티

### 모바일 앱 개발가능
- 리액트 네이티브라는 모바일 환경 UI프레임워크를 사용하면 크로스 플랫폼 모바일 앱을 개발할 수 있습니다.

### 리액트의 단점

1.방대한 학습량
자바스크립트를 공부한 경우 빠르게 학습할 수 있습니다.

2.높은 상태 관리 복잡도
state.component life cycle 등의 개념이 있지만 그리 어렵지 않습니다.


```js
function Video({ video }) {   //Video 컴포넌트
  return (
    <div>
      <Thumbnail video={video} />
      <a href={video.url}>
        <h3>{video.title}</h3>    //오브젝트
        <p>{video.description}</p>
      </a>
      <LikeButton video={video} />
    </div>
  );
}
```


## 3월 13일 강의
### Git과 Github는 무엇인가?
### Git
- VCS(Version Control System)의 일종으로 프로그램의 버전 관리를 위한 툴.
시간(시간에 따른 버전 변화. v1 → v2)과 차원(비슷하지만 조금씩 다른 형상. 원본과 copy&update 본)의 두 축으로 관리를 해준다.

### Github
- Git으로 관리하는 프로젝트들을 온라인 공간에 공유해서 프로젝트 구성원들이 함께 소프트웨어를 만들어갈 수 있도록 돕는 코드 공유 및 협업 서비스
온라인 git 저장소는 모든 업로드와 다운로드를 커밋 단위로 주고 받는다. 팀원 A가 커밋을 해서 버전을 만들어 업로드하면 깃헙 상의 프로젝트는 해당 버전으로 최신화되고, 팀원 B가 완료한 작업을 커밋해서 올리기 위해서는 반드시 깃헙 상의 최신 커밋을 먼저 다운받아서 자기 컴퓨터에 있는 프로젝트에 적용부터 하도록 강제가 된다. 커밋 상의 충돌사항이 있다면 그것도 팀원 B의 컴퓨터에서 병합 등으로 해결 하여야 비로소 자신이 작업한 커밋을 공유 공간에 올릴 수 있다. 즉, 작업은 개개인이 원하는 공간에서 원하는 시간에 하되 공유공간에 올릴 때에는 깃헙이 중간에서 교통 정리를 하여 서로의 작업 간 loss가 발생하지 않도록 해준다.
전세계의 많은 오픈소스 프로젝트들이 깃헙에서 공유되고 있다는 점!
### HTML
- 하이퍼 텍스트 마크업 언어(영어: Hyper Text Markup Language, HTML, 문화어: 초본문표식달기언어, 하이퍼본문표식달기언어)는 웹 페이지 표시를 위해 개발된 지배적인 마크업 언어다.
### 자바스크립트
- 자바스크립트(영어: JavaScript)는 객체 기반의 스크립트 프로그래밍 언어이다. 이 언어는 웹 브라우저 내에서 주로 사용되며, 다른 응용 프로그램의 내장 객체에도 접근할 수 있는 기능을 가지고 있다. 
## 3월 6일 강의
# h1
## h2
### h3
#### h4
##### h5
###### h6 

# 리스트
1. 첫 번째
2. 두 번째
3. 세 번째

- 첫 번째
- 두 번째

*이탤릭체*  
**굵게**  
***두개합침***

개행은  
스페이스 두개

```js
const para = document.querySelector("p");

para.addEventListener("click", updateName);

function updateName() {
  const name = prompt("Enter a new name");
  para.textContent = `Player 1: ${name}`;
}

```

[구글 링크](http://google.com)  
[페이지 내 링크](#리스트)  

![리트리버](11.jpg)
---
