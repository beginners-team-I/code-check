init:
		make build
		make yarn
		make up

build:
	docker-compose build --no-cache

up:
	rm -f api/tmp/pids/server.pid
	docker-compose up

down:
	docker-compose down

stop:
	docker-compose stop

yarn:
	docker-compose run front yarn install

back_yarn:
	docker-compose run back yarn install

fastify:
	docker-compose run front yarn add fastify fastify-cors nodemon

kintone:
	docker-compose run front yarn add @kintone/rest-api-client


