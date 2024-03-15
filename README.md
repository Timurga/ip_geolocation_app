# Сервис Геолокации по IP

  

Сервис предоставляет информацию о геолокации на основе IP-адреса пользователя, включая страну, город, широту и долготу.

  

## Технологии

  

-  **NestJS**: Фреймворк для создания серверных приложений на Node.js.

-  **geoip-lite**: Библиотека для определения геолокации по IP.

  

## Установка и Запуск

  

Для запуска проекта необходимо выполнить следующие шаги:

  

1.  **Клонирование репозитория**

  

```bash

git  clone <url-репозитория>

cd  ip-geo-service

Установка  зависимостей

npm  install

Запуск  проекта

npm  run  start

```

  

После запуска, сервер будет доступен по адресу http://localhost:3000.

  

## Использование

Чтобы получить информацию о геолокации, отправьте GET-запрос на корневой адрес с параметром ip, содержащим IP-адрес. Например:

  

http://localhost:3000/?ip=8.8.8.8

  

## Ответ

Успешный запрос вернет JSON с данными о геолокации:

  

```json

{

"lat": "широта",

"lng": "долгота",

"country": "страна",

"city": "город"

}

```

  

## Коды ответа

200: Запрос успешно обработан.

400: Ошибка формата IP-адреса.

404: Информация по данному IP-адресу не найдена.

500: Внутренняя ошибка сервера.