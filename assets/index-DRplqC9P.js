(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerPolicy&&(s.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?s.credentials="include":l.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(l){if(l.ep)return;l.ep=!0;const s=n(l);fetch(l.href,s)}})();const o={MAIN:"/",LOGIN:"/login",LOGOUT:"/logout",PROFILE:"/profile",ERROR:"/error"},c={PAGE_PUSH:"page-push"},b={LOGIN_FORM:"login-form",PROFILE_FORM:"profile-form"},m=()=>({template:`
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
  `}),x=()=>({template:`
    <main class="bg-gray-100 flex items-center justify-center min-h-screen">
      <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">항해플러스</h1>
        <form id="login-form">
          <div class="mb-4">
            <input type="text" id="username" name="username" placeholder="사용자 이름" class="w-full p-2 border rounded" required>
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
  `}),p=({children:e})=>`
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        ${e}
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
  `,v=({url:e,isLogon:t})=>`
    <nav class="bg-white shadow-md p-2 sticky top-14">
      <ul class="flex justify-around">
        <li><a href="/" class="${e===o.MAIN?"text-blue-600":"text-gray-600"}">홈</a></li>
        ${t?`
            <li><a href="/profile" class="${e===o.PROFILE?"text-blue-600":"text-gray-600"}">프로필</a></li>
            <li><a href="/logout" id="logout" class="text-gray-600">로그아웃</a></li>
          `:`
            <li><a href="/login" id="login-link" class="${e===o.LOGIN?"text-blue-600":"text-gray-600"}">로그인</a></li>
            `}
      </ul>
    </nav>
  `,y=()=>{const e=()=>{try{return JSON.parse(localStorage.getItem("user"))||{}}catch{return{}}},t=e();return{get:s=>{const a=e();return s?(t==null?void 0:t[s])||(a==null?void 0:a[s])||void 0:t},set:s=>(Object.entries(s).forEach(([a,h])=>t[a]=h),localStorage.setItem("user",JSON.stringify(t)),t),reset:()=>{Object.keys(t).forEach(s=>delete t[s]),localStorage.removeItem("user")}}},i=globalThis.store||y();globalThis.store=i;const w=()=>{const e=!!i.get("username");return{template:p({children:[g(),v({url:o.MAIN,isLogon:e}),E(),f()].join("")})}},E=()=>`
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
`,O=()=>{const e=!!i.get("username"),t=i.get(),n=`
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
              value="${(t==null?void 0:t.username)||"홍길동"}"
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
              value="${(t==null?void 0:t.email)||"hong@example.com"}"
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
            >${(t==null?void 0:t.bio)||"안녕하세요, 항해플러스에서 열심히 공부하고 있는 홍길동입니다."}</textarea>
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
  `;return{template:p({children:[g(),v({url:o.PROFILE,isLogon:e}),n,f()].join("")})}},d="/front_5th_chapter1-1",L="";console.log(L);const I=e=>{e.preventDefault();let t=e.target.getAttribute("href");t===o.LOGOUT?(i.reset(),t=o.MAIN):t===o.LOGIN&&i.get("username")&&(t=o.MAIN);const n={detail:{url:t},bubbles:!0,cancelable:!0};document.dispatchEvent(new CustomEvent(c.PAGE_PUSH,n))},P=()=>{document.querySelectorAll("a").forEach(e=>{e.addEventListener("click",I)})},N={[o.PROFILE]:O,[o.LOGIN]:x,[o.MAIN]:w,[o.ERROR]:m},u=e=>{var r;let t=((r=e.detail)==null?void 0:r.url)||location.pathname||o.MAIN;const n=i.get("username");!n&&t===o.PROFILE&&(t=o.LOGIN),n&&t===o.LOGIN&&(t=o.MAIN),t.includes(d)||(t=d+t),history.pushState({},"",t),R(t)},R=e=>{const t=e.replace(d,""),n=(N[t]||m)(),r=document.querySelector("#root");r.innerHTML=n.template,P()};document.addEventListener(c.PAGE_PUSH,u);document.addEventListener("submit",e=>{if(e.preventDefault(),e.target.id===b.LOGIN_FORM){const t=new FormData(e.target),n=t.get("username"),r=t.get("password");n&&r&&i.set({username:n,email:"",bio:""});const s={detail:{url:o.MAIN},bubbles:!0,cancelable:!0};document.dispatchEvent(new CustomEvent(c.PAGE_PUSH,s))}else if(e.target.id===b.PROFILE_FORM){const t=new FormData(e.target),n={username:t.get("username")||"",email:t.get("email")||"",bio:t.get("bio")||""};console.log(n),i.set(n);const l={detail:{url:o.PROFILE},bubbles:!0,cancelable:!0};document.dispatchEvent(new CustomEvent(c.PAGE_PUSH,l))}});window.addEventListener("popstate",u);window.addEventListener("DOMContentLoaded",u);
