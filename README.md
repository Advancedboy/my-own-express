# My Own Express — Custom HTTP Server Framework Combining C++ and Node.js

<p align="center">
  <strong>Учебный проект</strong> демонстрирующий создание своего Express-подобного HTTP-фреймфорка с низкоуровневой реализацией сервера на C++ и высшим уровнем маршрутизации на Node.js.
</p>

---

## Описание

Этот проект реализует минималистичный веб-фреймворк, в основе которого лежит собственный HTTP-сервер, написанный на C++ с использованием TCP-сокетов и ручным парсингом HTTP-запросов и ответов.

На высоком уровне для удобства используется Node.js, который управляет маршрутизацией, middleware и бизнес-логикой, вызывая функции из C++ через native addon (Node-API).

Цель — показать умение работать с низкоуровневыми сетевыми технологиями, интегрировать C++ и Node.js, и писать удобный API, похожий на Express.js.

---

## Структура проекта
```
my-own-express/
├── cpp-http-server/        # Низкоуровневый HTTP сервер на C++
│   ├── src/                # Исходные коды
│   ├── include/            # Заголовочные файлы
│   └── CMakeLists.txt      # Сборщик C++
├── node-addon/             # Node.js native addon для обертки C++ сервера
│   ├── binding.cc          # Исходники Node-API
│   ├── binding.gyp         # Конфиг сборки node-gyp
│   └── package.json        # Зависимости Node.js addon
├── app/                    # Высокоуровневый Node.js слой, пользовательский API
│   ├── app.js              # Точка входа приложения
│   ├── router.js           # Логика маршрутов
│   ├── middleware.js       # Middleware
│   └── package.json        # Зависимости Node.js приложения
├── README.md
└── LICENSE
```

---

## Установка и запуск

### Требования

- CMake и компилятор C++ (gcc, clang или MSVC)
- Node.js 16+ (поддержка ES modules)
- node-gyp для сборки native addon

### Сборка C++ библиотеки

В папке `cpp-http-server/` выполните:
mkdir build && cd build
cmake ..
cmake --build .
npm install
node-gyp rebuild

### Запуск приложения

В папке `app/`:

---

## Использование

Пример простого Express-подобного использования:

import myExpress from './myexpress.js';

const app = myExpress();

app.get('/', (req, res) => {
res.end('Hello from custom Express + C++ server!');
});

app.listen(3000, () => {
console.log('Server running on http://localhost:3000');
});

---

## Особенности

- Реализация TCP-сервера и HTTP парсера на C++ с ручным управлением сокетами
- Обертка C++ серверной логики в Node.js native addon для вызова из JavaScript
- Простой API маршрутизации и middleware, похожий на Express.js
- Учебный проект для глубокого понимания работы HTTP серверов и интеграции C++ с Node.js

---

## Возможные улучшения и планы

- Асинхронная многопоточная обработка соединений в C++
- Поддержка маршрутов с параметрами и wildcard
- Собственная реализация middleware стека
- Парсинг тела запроса (JSON, URL-encoded)
- Логирование, ошибки и статические файлы

---

## Контрибуция

Вклад приветствуется! Создавайте issue или pull requests с улучшениями и исправлениями.

---

## Лицензия

Этот проект распространяется под лицензией MIT.

---

## Автор

[Pavel Haidukevich]  
[Профиль GitHub](https://github.com/Advancedboy)  
[Email](mailto:legobuilder0819@gmail.com)

---

## Благодарности

Проект вдохновлен работой Express.js и низкоуровневым программированием TCP серверов.

---

⭐ Если проект помог вам — поставьте звезду на GitHub!
