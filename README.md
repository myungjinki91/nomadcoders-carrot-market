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
