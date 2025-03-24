(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function r(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(s){if(s.ep)return;s.ep=!0;const n=r(s);fetch(s.href,n)}})();const o={MAIN:"/",LOGIN:"/login",LOGOUT:"/logout",PROFILE:"/profile",ERROR:"/error"},c={PAGE_PUSH:"page-push"},m=()=>({template:`
    <main class="bg-gray-100 flex items-center justify-center min-h-screen">
      <div class="bg-white p-8 rounded-lg shadow-md w-full text-center" style="max-width: 480px">
        <h1 class="text-2xl font-bold text-blue-600 mb-4">항해플러스</h1>
        <p class="text-4xl font-bold text-gray-800 mb-4">404</p>
        <p class="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
        <p class="text-gray-600 mb-8">
          요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
        </p>
        <a href="/" class="bg-blue-600 text-white px-4 py-2 rounded font-bold">
          홈으로 돌아가기
        </a>
      </div>
    </main>
  `}),h=()=>{const t={};return{get:l=>l?t[l]:t,set:l=>(Object.entries(l).forEach(([s,n])=>t[s]=n),t)}},a=globalThis.store||h();globalThis.store=a;const w=()=>({template:`
    <main class="bg-gray-100 flex items-center justify-center min-h-screen">
      <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">항해플러스</h1>
        <form id="login-form">
          <div class="mb-4">
            <input type="text" name="username" placeholder="사용자 이름" class="w-full p-2 border rounded" required>
          </div>
          <div class="mb-6">
            <input type="password" name="password" placeholder="비밀번호" class="w-full p-2 border rounded" required>
          </div>
          <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">로그인</button>
        </form>
        <div class="mt-4 text-center">
          <a href="#" class="text-blue-600 text-sm">비밀번호를 잊으셨나요?</a>
        </div>
        <hr class="my-6">
        <div class="text-center">
          <button class="bg-green-500 text-white px-4 py-2 rounded font-bold">새 계정 만들기</button>
        </div>
      </div>
    </main>
  `,eventListener:()=>{const r=document.querySelector("#login-form");r&&r.addEventListener("submit",l=>{console.log(l),l.preventDefault();const s=new FormData(l.target),n=s.get("username"),i=s.get("password");n&&i&&a.set({username:n});const b={detail:{url:o.MAIN},bubbles:!0,cancelable:!0};document.dispatchEvent(new CustomEvent(c.PAGE_PUSH,b))})}}),p=({children:t})=>`
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        ${t}
      </div>
    </div>
  `,f=()=>`
    <footer class="bg-gray-200 p-4 text-center">
      <p>&copy; 2024 항해플러스. All rights reserved.</p>
    </footer>
  `,g=()=>`
    <header class="bg-blue-600 text-white p-4 sticky top-0">
      <h1 class="text-2xl font-bold">항해플러스</h1>
    </header>
  `,v=({url:t,isLogon:e})=>`
    <nav class="bg-white shadow-md p-2 sticky top-14">
      <ul class="flex justify-around">
        <li><a href="/" class="${t===o.MAIN?"text-blue-600":"text-gray-600"}">홈</a></li>
        ${e?`
            <li><a href="/profile" class="${t===o.PROFILE?"text-blue-600":"text-gray-600"}">프로필</a></li>
            <li><a href="/logout" id="logout" class="text-gray-600">로그아웃</a></li>
          `:`
            <li><a href="/login" id="login-link" class="${t===o.LOGIN?"text-blue-600":"text-gray-600"}">로그인</a></li>
            `}
      </ul>
    </nav>
  `,y=()=>{const t=!!a.get("username");return{template:p({children:[g(),v({url:o.MAIN,isLogon:t}),L(),f()].join("")})}},L=()=>`
  <main class="p-4">
    <div class="mb-4 bg-white rounded-lg shadow p-4">
      <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
      <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
    </div>

    <div class="space-y-4">

      <div class="bg-white rounded-lg shadow p-4">
        <div class="flex items-center mb-2">
          <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
          <div>
            <p class="font-bold">홍길동</p>
            <p class="text-sm text-gray-500">5분 전</p>
          </div>
        </div>
        <p>오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!</p>
        <div class="mt-2 flex justify-between text-gray-500">
          <button>좋아요</button>
          <button>댓글</button>
          <button>공유</button>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow p-4">
        <div class="flex items-center mb-2">
          <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
          <div>
            <p class="font-bold">김철수</p>
            <p class="text-sm text-gray-500">15분 전</p>
          </div>
        </div>
        <p>새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!</p>
        <div class="mt-2 flex justify-between text-gray-500">
          <button>좋아요</button>
          <button>댓글</button>
          <button>공유</button>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow p-4">
        <div class="flex items-center mb-2">
          <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
          <div>
            <p class="font-bold">이영희</p>
            <p class="text-sm text-gray-500">30분 전</p>
          </div>
        </div>
        <p>오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?</p>
        <div class="mt-2 flex justify-between text-gray-500">
          <button>좋아요</button>
          <button>댓글</button>
          <button>공유</button>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow p-4">
        <div class="flex items-center mb-2">
          <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
          <div>
            <p class="font-bold">박민수</p>
            <p class="text-sm text-gray-500">1시간 전</p>
          </div>
        </div>
        <p>주말에 등산 가실 분 계신가요? 함께 가요!</p>
        <div class="mt-2 flex justify-between text-gray-500">
          <button>좋아요</button>
          <button>댓글</button>
          <button>공유</button>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow p-4">
        <div class="flex items-center mb-2">
          <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
          <div>
            <p class="font-bold">정수연</p>
            <p class="text-sm text-gray-500">2시간 전</p>
          </div>
        </div>
        <p>새로 나온 영화 재미있대요. 같이 보러 갈 사람?</p>
        <div class="mt-2 flex justify-between text-gray-500">
          <button>좋아요</button>
          <button>댓글</button>
          <button>공유</button>
        </div>
      </div>
    </div>
  </main>
`,E=()=>{const t=!!a.get("username"),e=a.get(),r=()=>{const n=document.querySelector("#profile-form");n&&n.addEventListener("submit",i=>{i.preventDefault();const d=new FormData(i.target),b={username:d.get("username")||"",email:d.get("email")||"",bio:d.get("bio")||""};a.set(b);const x={detail:{url:o.PROFILE},bubbles:!0,cancelable:!0};document.dispatchEvent(new CustomEvent(c.PAGE_PUSH,x))})},l=`
    <main class="p-4">
      <div class="bg-white p-8 rounded-lg shadow-md">
        <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">
          내 프로필
        </h2>
        <form id="profile-form">
          <div class="mb-4">
            <label
              for="username"
              class="block text-gray-700 text-sm font-bold mb-2"
              >사용자 이름</label
            >
            <input
              type="text"
              id="username"
              name="username"
              value="${(e==null?void 0:e.username)||"홍길동"}"
              class="w-full p-2 border rounded"
            />
          </div>
          <div class="mb-4">
            <label
              for="email"
              class="block text-gray-700 text-sm font-bold mb-2"
              >이메일</label
            >
            <input
              type="email"
              id="email"
              name="email"
              value="${(e==null?void 0:e.email)||"hong@example.com"}"
              class="w-full p-2 border rounded"
            />
          </div>
          <div class="mb-6">
            <label
              for="bio"
              class="block text-gray-700 text-sm font-bold mb-2"
              >자기소개</label
            >
            <textarea
              id="bio"
              name="bio"
              rows="4"
              class="w-full p-2 border rounded"
            >${(e==null?void 0:e.bio)||"안녕하세요, 항해플러스에서 열심히 공부하고 있는 홍길동입니다."}</textarea>
          </div>
          <button
            type="submit"
            class="w-full bg-blue-600 text-white p-2 rounded font-bold"
          >
            프로필 업데이트
          </button>
        </form>
      </div>
    </main>
  `;return{template:p({children:[g(),v({url:o.PROFILE,isLogon:t}),l,f()].join("")}),eventListener:r}},O="",P=t=>{t.preventDefault();let e=t.target.getAttribute("href");e===o.LOGOUT?(a.set({username:""}),e=o.MAIN):e===o.LOGIN&&a.get("username")&&(e=o.MAIN);const r={detail:{url:e},bubbles:!0,cancelable:!0};document.dispatchEvent(new CustomEvent(c.PAGE_PUSH,r))},I=()=>{document.querySelectorAll("a").forEach(t=>{t.addEventListener("click",P)})},A={[o.PROFILE]:E,[o.LOGIN]:w,[o.MAIN]:y,[o.ERROR]:m},u=(t=o.MAIN)=>{const e=document.querySelector("#root"),r=a.get("username");!r&&t===o.PROFILE&&(t=o.LOGIN),r&&t===o.LOGIN&&(t=o.MAIN),t=O+t,console.log(t),history.pushState({},"",t);const l=(A[t]||m)();console.log(l),e.innerHTML=l.template,l.eventListener&&l.eventListener(),I()};document.addEventListener(c.PAGE_PUSH,t=>{var e;(e=t.detail)!=null&&e.url&&u(t.detail.url)});window.addEventListener("popstate",()=>u());window.addEventListener("DOMContentLoaded",()=>u());window.onpopstate=()=>u(location.pathname);
