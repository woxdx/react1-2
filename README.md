# 이원도 202230226

## 3월 27일 강의
내용

## 3월 20일 강의

## 컴포넌트 기반 구조
리액트의 모든 페이지는 컴포넌트로 구성됩니다.
하나의 컴포넌트는 다른 여러 개의 컴포넌트의 조합으로 구성할 수 있습니다.
그래서 리액트로 개발을 하다 보면 레고 블록을 조립나는 것처럼 컴포넌트를 조합해서 웹사이트를 개발하게 됩니다.
아래 그림은 에어비앤비 사이트 화면의 컴포넌트 구조 입니다. 재사용성이 뛰어납니다.

## 리액트의 장점

메타(구 페이스북)에서 오픈소스 프로젝트로 관리하고 있어 계속 발전하고 있습니다.

활발한 지식 공유 & 커뮤니티

리액트 네이티브라는 모바일 환경 UI프레임워크를 사용하면 크로스 플랫폼 모바일 앱을 개발할 수 있습니다.

## 리액트의 단점

1.방대한 학습량
자바스크립트를 공부한 경우 빠르게 학습할 수 있습니다.

2.높은 상태 관리 복잡도
state.component life cycle 등의 개념이 있지만 그리 어렵지 않습니다.



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


## 3월 13일 강의
~~내용~~

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
