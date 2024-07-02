# Carrot Market Reloaded

# 1 ❤️ ANNOUNCEMENT

## 1.1 🚨 Read this First 🚨

## 1.2 Thank You!

## 1.3 🔔 NextJS Quiz 🔔

https://docs.google.com/forms/d/e/1FAIpQLSee9TXmr6qVsCMlrgO2lj0paJ5pXNKH9NSsPhZmah5d-VxmCA/viewscore?pli=1&viewscore=AE0zAgCMEFnFg55ttlgwlehrRNDYDg9RqoxZfTXiJF0yciQ1iOoxLg-NcJGTyRPn3Vtwwoc

# 2 INTRODUCTION

2월 6일 강의 녹화 시작

## 2.0 Welcome

유저에게 실제로 어떻게 보일지 만들어보는 강의

토이 프로젝트 말고, 실제 제품을 만들어보면 더 배우는게 많아요. 그리고 프레임워크가 이런 기능을 왜 제공하는지도 알 수 있게 되요.

Next.js도 불편한 것이 있어서 이걸 다른 프로그램을 사용해서 해결해 보기도 할거에요.

무엇이든 구현할 수 있다는 자신감!

## 2.1 Requirements

https://nomadocders.co/nextjs-for-beginners/

## 2.2 What Are We Using

- Next.js
- Prisma
- PlanetScale
- Vercel
- Cloudflare
  - Cloudflare Images
  - Cloudflare stream
  - Cloudflare workers

## 2.3 Learning Rate

배우는 시간은 선형입니다.

인증, 이미지까지는 오래 걸립니다. 그 이후는 쭉쭉 나갈겁니다.

## 2.4 How To Get Help

1. 댓글
   1. 작동, 개념 질문
2. Issues
   1. 뭔가 이상함, 에러2

## 2.5 Project Setup

Git Provider를 사용해야 합니다. 우리는 GitHub 사용!

https://nextjs.org/docs/app/api-reference/create-next-app

https://nextjs.org/docs/pages/api-reference/create-next-app

```bash
npx create-next-app@latest
```

TypeScript를 씁시다!

```
Yes Yes Yes No Yes No
```

# 3 TAILWIND

## 3.0 Introduction

디자이너 없이 멋진 CSS를 빠르게 만들고 싶다면 CSS Framework를 사용해야 합니다.

그 중 멋지고 멋진 Tailwind CSS를 배워봅시다.

Utility First는 짧은 class name이 엄청 많다.

Bootstrap, Foundation은 기본적인 UI를 제공해서 비슷비슷합니다. 하지만 Tailwind CSS는 아무것도 제공하지 않습니다.

직접 class를 만들려먼 class 이름도 고민해야하고, 값도 고민해야 합니다.

Tailwind CSS를 직접 만든 사람도, CSS와 Markup을 섞다니!!! 난리날 것을 알았지만, 그래도 한 번 써보라고 했다.

반응형, 다크모드 등등 다 준비되어 있습니다.

많은 회사들에서 사용합니다.

## 3.1 IntelliSense

간단한 것들 만들어봅시다.

Visual Studio Code Extension, Tailwind CSS IntelliSense 설치

그러면 이 Extension이 tailwind.config.ts를 확인

Auto complete: option + esc

## 3.2 Card Component

1 container + 4 row + each column

```tsx
export default function Home() {
  return (
    <main>
      <div>
        <div>
          <div>
            <span>In transit</span>
            <span>Coolblue</span>
          </div>
          <div />
        </div>
        <div>
          <span>Time</span>
          <span>9:30-10:30</span>
        </div>
        <div>
          <div />
          <div />
        </div>
        <div>
          <span>Expected</span>
          <span>Sorting center</span>
          <span>In transit</span>
          <span>Delivered</span>
        </div>
      </div>
    </main>
  );
}
```

작업 후

```tsx
export default function Home() {
  return (
    <main className="bg-gray-300 h-screen flex items-center justify-center p-5">
      <div className="bg-white shadow-lg p-5 rounded-2xl w-full">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-gray-600 font-semibold -mb-1">
              In transit
            </span>
            <span className="text-4xl font-semibold">Coolblue</span>
          </div>
          <div className="size-12 rounded-full bg-orange-400" />
        </div>
        <div className="my-2 flex items-center gap-2">
          <span className="bg-green-400 text-white uppercase px-2.5 py-1.5 text-xs font-medium rounded-full ">
            Today
          </span>
          <span>9:30-10:30</span>
        </div>
        <div className="relative">
          <div className="bg-gray-200 absolute rounded-full w-full h-2" />
          <div className="bg-green-400 absolute rounded-full w-2/3 h-2" />
        </div>
        <div className="flex justify-between items-center mt-5 text-gray-600">
          <span>Expected</span>
          <span>Sorting center</span>
          <span>In transit</span>
          <span className="text-gray-400">Delivered</span>
        </div>
      </div>
    </main>
  );
}
```

## 3.3 Modifiers

modifier는 Style을 조건부로 적용할 수 있게 해줌

modifier는 시작을 항상 : 으로 합니다.

Dark Mode

hover over

```tsx
export default function Home() {
  return (
    <main className="bg-gray-100 h-screen flex items-center justify-center p-5 dark:bg-gray-700">
      <div className="bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm dark:bg-gray-600">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-gray-600 font-semibold -mb-1 dark:text-gray-300">
              In transit
            </span>
            <span className="text-4xl font-semibold dark:text-white">
              Coolblue
            </span>
          </div>
          <div className="size-12 rounded-full bg-orange-400" />
        </div>
        <div className="my-2 flex items-center gap-2">
          <span className="bg-green-400 text-white uppercase px-2.5 py-1.5 text-xs font-medium rounded-full transition hover:bg-green-500 hover:scale-125">
            Today
          </span>
          <span className="dark:text-gray-100">9:30-10:30</span>
        </div>
        <div className="relative">
          <div className="bg-gray-200 absolute rounded-full w-full h-2" />
          <div className="bg-green-400 absolute rounded-full w-2/3 h-2" />
        </div>
        <div className="flex justify-between items-center mt-5 text-gray-600 dark:text-gray-300 ">
          <span>Expected</span>
          <span>Sorting center</span>
          <span>In transit</span>
          <span className="text-gray-400 dark:text-gray-500">Delivered</span>
        </div>
      </div>
    </main>
  );
}
```

## 3.4 Tailwind Variables

ring, —tw-ring-offset-shadow, —tw-ring-shadow

가끔 ring처럼 여러 변수를 필요로하는 속성을 만나게 될 거에요.

bg-black에는 —tw-bg-opacity가 있는데요 bg-opacity를 설정하면 CSS는 바꾸지 않지만 변수를 설정할 수 있습니다.

```tsx
export default function Home() {
  return (
    <main className="bg-gray-100 h-screen flex items-center justify-center p-5">
      <div className="bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm flex flex-col gap-2">
        <input
          className="w-full rounded-full h-10 bg-gray-200 pl-5 focus:outline-none ring ring-transparent focus:ring-orange-500 focus:ring-offset-2 transition-shadow placeholder:text-red-600 placeholder:drop-shadow"
          type="text"
          placeholder="Search here..."
        />
        <button className="bg-black text-white py-2 rounded-full active:scale-90 transition-transform font-medium  outline-none">
          Search
        </button>
      </div>
    </main>
  );
}
```

## 3.5 Responsive Modifiers

다크모드 딸깍

Tailwind CSS는 모바일이 우선이다. 그래서 더 큰 화면에 사용하는 modifier가 존재.

Tailwind에서는 반대로 모바일부터 하고 데스크탑을 꾸밉니다.

https://tailwindcss.com/docs/container에 sm, md, lg, xl, 2xl에 대한 내용이 있습니다.

```tsx
export default function Home() {
  return (
    <main className="bg-gray-100 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100 h-screen flex items-center justify-center p-5">
      <div className="bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm flex flex-col md:flex-row gap-2">
        <input
          className="w-full rounded-full h-10 bg-gray-200 pl-5 outline-none ring ring-transparent focus:ring-orange-500 focus:ring-offset-2 transition-shadow placeholder:drop-shadow"
          type="text"
          placeholder="Search here..."
        />
        <button className="bg-black text-white py-2 rounded-full active:scale-90  transition-transform font-medium outline-none md:px-10 ">
          Search
        </button>
      </div>
    </main>
  );
}
```

## 3.6 Form Modifiers

- bg-gradient-to-tr from-cyan-500 to-purple-400
- https://tailwindcss.com/docs/gradient-color-stops
- invalid:
- https://tailwindcss.com/docs/hover-focus-and-other-states#invalid
- invalid:form: 도 가능합니다.
- peer는 부모에 선언, 자식에서 설정
- https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-sibling-state
- hidden
  - display: none

```tsx
export default function Home() {
  return (
    <main className="bg-gray-100 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100 h-screen flex items-center justify-center p-5">
      <div className="bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm flex flex-col md:flex-row gap-2">
        <input
          className="w-full rounded-full h-10 bg-gray-200 pl-5 outline-none ring ring-transparent focus:ring-green-500 focus:ring-offset-2 transition-shadow placeholder:drop-shadow invalid:focus:ring-red-500 peer"
          type="email"
          required
          placeholder="Email address"
        />
        <span className="text-red-500 font-medium hidden peer-invalid:block ">
          Email is required.
        </span>
        <button className="text-white py-2 rounded-full active:scale-90  transition-transform font-medium outline-none md:px-10 bg-black ">
          Log in
        </button>
      </div>
    </main>
  );
}
```

## 3.7 State Modifiers

\*: outline-none → 자식에 모두 적용!

https://tailwindcss.com/docs/hover-focus-and-other-states#styling-direct-children

has-[.peer]:bg-green-100 →

https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-descendants

has는 CSS의 가상 클래스

```tsx
export default function Home() {
  return (
    <main className="bg-gray-100 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100 h-screen flex items-center justify-center p-5">
      <div
        className="bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm flex flex-col md:flex-row gap-2 *:outline-none ring ring-transparent transition-shadow
      has-[:invalid]:ring-red-100"
      >
        <input
          className="w-full rounded-full h-10 bg-gray-200 pl-5 ring ring-transparent focus:ring-green-500 focus:ring-offset-2 transition-shadow placeholder:drop-shadow invalid:focus:ring-red-500 peer"
          type="text"
          required
          placeholder="Email address"
        />
        <span className="text-red-500 font-medium hidden peer-invalid:block ">
          Email is required.
        </span>
        <button className="text-white py-2 rounded-full active:scale-90  transition-transform font-medium  md:px-10 bg-black ">
          Log in
        </button>
      </div>
    </main>
  );
}
```

## 3.8 Lists and Animations

- odd:
- even:
- first:
- last:
- animation-bounce
- animation-spin 로딩에 사용됨
- animation-pulse 로딩에 사용됨, 스켈레톤 + double background
- empty:

```
export default function Home() {
  return (
    <main className="bg-gray-100 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100 h-screen flex items-center justify-center p-5">
      <div className="bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm flex flex-col gap-4">
        {["Nico", "Me", "You", "Yourself", ""].map((person, index) => (
          <div key={index} className="flex items-center gap-5">
            <div className="size-10 bg-blue-400 rounded-full" />
            <span className="text-lg font-medium empty:w-24 empty:h-5 empty:rounded-full empty:animate-pulse empty:bg-gray-300">
              {person}
            </span>
            <div className="size-6 bg-red-500 text-white flex items-center justify-center rounded-full relative">
              <span className="z-10">{index}</span>
              <div className="size-6 bg-red-500 rounded-full absolute animate-ping " />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

```

## 3.9 Group Modifiers

지금까지는 자식의 상태가 바뀌면 부모 컨테이너를 바꾸는 걸 배워봤습니다.

이젠 부모의 state가 바뀌었을 때!!! 자식을 바꾸게 하는게 Group modifier

```tsx
<div className="group">
  <div className="group-hover: text-red-500"></div>
</div>
```

- group-hover
- group-require
- group-focus
- group-invalid

```tsx
export default function Home() {
  return (
    <main className="bg-gray-100 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100 h-screen flex items-center justify-center p-5">
      <div className="bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm flex flex-col gap-4">
        <div className="group flex flex-col">
          <input
            className="bg-gray-100 w-full"
            placeholder="Write your email"
          />
          <span className="group-focus-within:block hidden">
            Make sure it is a valid email...
          </span>
          <button>Submit</button>
        </div>
      </div>
    </main>
  );
}
```

## 3.10 JIT

Tailwind CSS가 수만가지 CSS class를 준비해 둔 것이 아니라, 유저가 className을 작성하면 거기에 맞게 CSS를 생성해줍니다.

JIT compiler입니다.

arbitrary values, 리스트에 없는 애매한 값 추가할 때

```tsx
<div className="h-10" />
<div className="h-[3523.23px]" />
```

원하는 색상 추가

https://tailwindcss.com/docs/adding-custom-styles

```tsx
<button className="rounded-sexy-name mt-tomato">Submit</button>
```

```tsx
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      margin: {
        tomato: "120px",
      },
      borderRadius: {
        "sexy-name": "11.11px",
      },
    },
  },
  plugins: [],
};
export default config;
```

## 3.11 Directives

https://tailwindcss.com/docs/functions-and-directives

우리가 className에 추가한 CSS는 utilities

base는 reset과 비슷

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

component는??

@apply는?? 분리된 컴포넌트를 위한 것.

```css
.btn {
  @apply w-full bg-black;
}
```

```html
<div className="btn" />
```

@layer는 base에 추가할때 사용

```html
@layer base { a { @apply text-blue-500; } }
```

@tailwind component는???

layer, base 등 base를 수정하기 위해 layer와 apply를 한 것들을 base는 내버려두고 component에서 해라~~

## 3.12 Plugins

component는 plugin을 위한 것

npm으로 남들이 만든 plugin을 받아서 사용할 수 있다.

ex) daisyUI, tailwind CSS Form

## 3.13 Conclusions

앞으로 만들어가면서 많이 사용할거라 금방 익숙해질 겁니다.

# 4 AUTHENTICATION UI

## 4.0 Home Screen

- 로그아웃 했을 때 페이지
- 로그인 페이지
- 회원가입 페이지
- SMS 인증 로그인 페이지

만들겁니다.

다크모드만 할 겁니다.

반응형 많이 안할겁니다.

제일 먼저 홈페이지부터 만듭시다.

- Tailwind CSS
  - underline-offset-4
  - \*:
  - my-auto, mx-auto

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  a {
    @apply text-orange-500;
  }
}
```

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-neutral-900 text-white max-w-screen-sm mx-auto`}
      >
        {children}
      </body>
    </html>
  );
}
```

```tsx
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-6">
      <div className="my-auto flex flex-col items-center gap-2 *:font-medium">
        <span className="text-9xl">🥕</span>
        <h1 className="text-4xl ">당근</h1>
        <h2 className="text-2xl">당근 마겟에 어서오세요!</h2>
      </div>
      <div className="flex flex-col items-center gap-3 w-full">
        <Link
          href="/create-account"
          className="w-full bg-orange-500 text-white text-lg font-medium py-2.5 rounded-md text-center hover:bg-orange-400 transition-colors"
        >
          시작하기
        </Link>
        <div className="flex gap-2">
          <span>이미 계정이 있나요?</span>
          <Link href="/login" className="hover:underline">
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
}
```

## 4.1 Create Account Screen

회원 가입 페이지 만듭시다.

- 인사말
- form을 사용한 가입
- SMS 가입

Tailwind CSS

- ring-1
- ring-2

굵기차이 입니다.

공통 부분 component로 옮기기

```css
@layer components {
  .primary-btn {
    @apply w-full bg-orange-500 text-white  font-medium  rounded-md text-center hover:bg-orange-400 transition-colors;
  }
}
```

h-1px은 없고 h-px는 있습니다.

```tsx
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function CreateAccount() {
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Fill in the form below to join!</h2>
      </div>
      <form className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <input
            className="bg-transparent rounded-md w-full h-10 focus:outline-none ring-1 focus:ring-2 ring-neutral-200 focus:ring-orange-500 border-none placeholder:text-neutral-400"
            type="text"
            placeholder="Username"
            required
          />
          <span className="text-red-500 font-medium">Input error</span>
        </div>
        <button className="primary-btn h-10">Create account</button>
      </form>
      <div className="w-full h-px bg-neutral-500" />
      <div>
        <Link
          className="primary-btn flex h-10 items-center justify-center gap-2"
          href="/sms"
        >
          <span>
            <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6" />
          </span>
          <span>Sign up with SMS</span>
        </Link>
      </div>
    </div>
  );
}
```

아이콘도 받을 수 있습니다.

@heroicons/react

https://github.com/tailwindlabs/heroicons
