#
# My Fancy Node.js project
#

PROJECT = "My Fancy Node.js project"


all: install test server

debug: ;@echo "Debugging ${PROJECT}.....http://0.0.0.0:8080/debug?port=5858 to start debugging"; \
	export NODE_PATH=.; \
	node-inspector & coffee --nodejs --debug app.coffee;

test: ;@echo "Testing ${PROJECT}....."; \
	export NODE_PATH=.; \
	./node_modules/mocha/bin/mocha;

server : ;@echo "Starting ${PROJECT}....."; \
	export NODE_PATH=.; \
	coffee app.coffee

install: ;@echo "Installing ${PROJECT}....."; \
	npm install

update: ;@echo "Updating ${PROJECT}....."; \
	git pull --rebase; \
	npm install

clean : ;
	rm -rf node_modules

build:  ;
	docker build -t movies-api .

detach: ;
	docker run -p 3000:3000 -d movies-api 

.PHONY: test server install clean update