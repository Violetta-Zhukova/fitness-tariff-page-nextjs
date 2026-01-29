# Страница тарифов для фитнеса (Next.js)

Страница фитнес-приложения с тарифами с таймером акции и интерактивным выбором плана подписки.

<div style="display: flex; gap: 10px; align-items: center;">
<img height="300" alt="image" src="./public/img/1920.png"> 
<img height="300" alt="image" src="./public/img/375.png"> 
<img height="300" alt="image" src="./public/img/320.png"> 
</div>

## Стек

<img src='https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white'/> <img src='https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB'/> <img src='https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white'/> <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />

## Реализованный функционал

- Адаптивная верстка трех экранов по макету Figma (320, 375, 1920)
- Таймер обратного отсчета (2 минуты) в закрепленном хедере, красная подсветка и мигание при остатке <30 секунд
- Управление скидками: автоматическое скрытие скидок при окончании таймера, плавная анимация исчезновения скидочных цен
- Выбор тарифов: визуальное выделение выбранного тарифа, hover-эффекты на карточках
- Валидация страницы: красная подсветка чекбокса при попытке покупки без согласия

## Установка и запуск

Для установки и запуска проекта необходимо выполнить команды

```
npm install
npm run dev
```

или

```
yarn
yarn dev
```
