# Wasaby Hello World
#### Документация:
- [Документация для разработчиков](https://wasaby.dev)

## Сборка и запуск.

Для начала Вам потребуется установить [Node.js](http://nodejs.org/) и [NPM](http://npmjs.com).

1. Клонируйте репозиторий с контролами, например в папку `wasaby-hello-world` (все команды в следующих пунктах нужно будет выполнять в этой папке):

        git clone git@github.com:saby/wasaby-hello-world.git /path/to/wasaby-hello-world

2. Переключите репозиторий на нужную ветку, например rc-22.7000:

        git checkout rc-22.7000

3. Установите зависимости:

        npm install

4. Обновите хранилище платформы

        npm run update-cli-store

5. Cоберите проект:

        npm run build

6. Запустите стенд:

        npm run start

7. Откройте ссылку [http://localhost:777/HelloWorld](http://localhost:777/HelloWorld) в браузере

#### Ответственные:
- Мустафин Л.И. (Разработка)
