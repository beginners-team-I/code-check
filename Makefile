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

