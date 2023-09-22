# https://fluidcourse.ru/

## Требования

- PHP >= 8.1

## Установка

- Скачать `MODX` с [официального сайта](https://modx.com/download) и выполнить его установку
- Добавить дамп базы данных в `MySQL`
- Инициализировать `git` внутри проекта
- Добавить в проект удалённый репозиторий с помощью команды `git remote add`
- Выполнить `git pull`
- Выполнить `composer install` и `npm install` для установки зависимостей
- Поменять настройки при необходимости в таблице `modx_system_settings`
- Переименовать файл `.htaccess.example` в `.htaccess`
- Скопировать файл `.env.example` и переименовать копию в `.env`.
- Добавить `public` и `private` ключи для
  сервиса `Teachbase` в файл `.env`
- Создать файл `credentials/google/peak-age-279206.json`, в котором должны
  находиться ключи доступа к проекту `peak-age-279206` в Bigquery.

## DEV информация

- В проекте используется сборщик `webpack`
- Для запуска сборщика `css,js` файлов используйте команду `npm run dev` или `npm run watch`
- Вся анимация находится в файле `assets/js/pages/courses/course-page.js`
- Все стили находятся в каталоге `assets/scss/`, каждый файл без `_` используется для определённого шаблона ресурсов

## Перенос изменений с локального сервера на боевой с помощью `git` (все данные для входа присутствуют в .xlsx файле)

- С помощью терминала подключаемся по `ssh` к хосту
- Далее проваливаемся в `docker-контейнер`
- Внутри контейнера
  добавляем `ssh-key в ssh-agent`, [здесь инструкция](https://docs.github.com/ru/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
  и уже в нём выполняем стандартные git-команды 