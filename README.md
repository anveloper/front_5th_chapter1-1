## 과제 체크포인트

### 배포 링크

- history router : https://anveloper.github.io/front_5th_chapter1-1/
  - SSG vite 플러그인 적용완료 :   
    - https://anveloper.github.io/front_5th_chapter1-1/login
    - https://anveloper.github.io/front_5th_chapter1-1/profile
- hash router : https://anveloper.github.io/front_5th_chapter1-1/index.hash.html

### 기본과제

<details>
<summary>1) 라우팅 구현: </summary>

- [x] History API를 사용하여 SPA 라우터 구현
  - [x] '/' (홈 페이지)
  - [x] '/login' (로그인 페이지)
  - [x] '/profile' (프로필 페이지)
- [x] 각 라우트에 해당하는 컴포넌트 렌더링 함수 작성
- [x] 네비게이션 이벤트 처리 (링크 클릭 시 페이지 전환)
- [x] 주소가 변경되어도 새로고침이 발생하지 않아야 한다.
</details>
<details>
<summary>2) 사용자 관리 기능:</summary>

- [x] LocalStorage를 사용한 간단한 사용자 데이터 관리
  - [x] 사용자 정보 저장 (이름, 간단한 소개)
  - [x] 로그인 상태 관리 (로그인/로그아웃 토글)
- [x] 로그인 폼 구현
  - [x] 사용자 이름 입력 및 검증
  - [x] 로그인 버튼 클릭 시 LocalStorage에 사용자 정보 저장
- [x] 로그아웃 기능 구현
  - [x] 로그아웃 버튼 클릭 시 LocalStorage에서 사용자 정보 제거

</details>
<details>
<summary>3) 프로필 페이지 구현:</summary>

- [x] 현재 로그인한 사용자의 정보 표시
  - [x] 사용자 이름
  - [x] 간단한 소개
- [x] 프로필 수정 기능
  - [x] 사용자 소개 텍스트 수정 가능
  - [x] 수정된 정보 LocalStorage에 저장

</details>
<details>
<summary>4) 컴포넌트 기반 구조 설계:</summary>

- [x] 재사용 가능한 컴포넌트 작성
  - [x] Header 컴포넌트
  - [x] Footer 컴포넌트
- [x] 페이지별 컴포넌트 작성
  - [x] HomePage 컴포넌트
  - [x] ProfilePage 컴포넌트
  - [x] NotFoundPage 컴포넌트

</details>
<details>
<summary>5) 상태 관리 초기 구현:</summary>

- [x] 간단한 상태 관리 시스템 설계
  - [x] 전역 상태 객체 생성 (예: 현재 로그인한 사용자 정보)
- [x] 상태 변경 함수 구현
  - [x] 상태 업데이트 시 관련 컴포넌트 리렌더링

</details>
<details>
<summary>6) 이벤트 처리 및 DOM 조작:</summary>

- [x] 사용자 입력 처리 (로그인 폼, 프로필 수정 등)
- [x] 동적 컨텐츠 렌더링 (사용자 정보 표시, 페이지 전환 등)
</details>
<details>
<summary>7) 라우팅 예외 처리:</summary>

- [x] 잘못된 라우트 접근 시 404 페이지 표시

</details>

### 심화과제
<details>
<summary>1) 해시 라우터 구현</summary>

- [x] location.hash를 이용하여 SPA 라우터 구현
  - [x] '/#/' (홈 페이지)
  - [x] '/#/login' (로그인 페이지) 
  - [x] '/#/profile' (프로필 페이지)
</details>
<details>
<summary>2) 라우트 가드 구현</summary>

- [x] 로그인 상태에 따른 접근 제어
- [x] 비로그인 사용자의 특정 페이지 접근 시 로그인 페이지로 리다이렉션
</details>
<details>
<summary>3) 이벤트 위임</summary>

- [x] 이벤트 위임 방식으로 이벤트를 관리하고 있다.
</details>

## 과제 셀프회고

- 화살표 함수를 너무 좋아한 나머지, 불필요한 오류를 직면한 것을 반성합니다.
- 어줍잖게 Store구현하다가 출제자의 의도를 파악하지 못한점 반성합니다.
- 그동안 구현에 급급했던 제 자신에 대하여 반성합니다.

+ 25.03.26 세션을 듣고 나서 history router와 hash router를 별도의 index.html | index.hash.html 로 분리하여 배포까지하였습니다.
+ 25.03.27 추가 개발 사항을 고민하여, 세션중에 잠깐 보여주신 SSG를 구현해봤습니다.

### 기술적 성장

- 사람이 수행하는 일반적인 테스트 외에, 요구 사항이 갖춰진 테스트에 대하여 개발을 진행해보는 좋은 경험이었습니다. 
- vite를 많이 사용해보지 않아서 이번 기회에 많이 알게 되었습니다.

### 코드 품질

- Java로 개발을 시작했지만, JavaScript의 class 문법이 단순히 syntax sugar라는 이야기를 듣고 오히려 반발감을 느꼈습니다. 그로 인해 JavaScript의 class를 사용하지 않는 경향이 있었습니다. 
- 제 코드를 보고, 다시 동료의 코드를 보니 클래스 확장을 활용한 컴포넌트 구성도 나쁘지 않겠다는 생각을 다시 하게되었습니다.

- e2e 테스트 실패로 인하여 한번 전부 리팩토링 하면서 이전 코드를 그대로 보전하였는 데, router, hash-router로 분리한 코드가 잘 되었는 지는 아직 의문입니다.

### 학습 효과 분석
### 과제 피드백

- 흔하게 볼 수 있는 아이디 저장 기능을 구현에 추가해도 재미있을 것 같습니다.
- 

## 리뷰 받고 싶은 내용

- 기본 과제 테스트 성공보다 사이트 배포를 먼저하게되었는데, ~~해시를 사용하지 않아 버튼으로 이동하는 방식만 구현된 상태입니다.~~
- /front_5th_chapter1-1 값을 prefix URL에 직접 붙혀주는 방식으로 활용하여 git page, localhost 똑같이 동작하도록 구현해봤는데, 적절한 구현인 지 궁금합니다.

- 세션을 들으면서 추가 배포작업을 완료했습니다. 감사합니다.

