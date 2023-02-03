#!/usr/bin/env bash

FRONTEND_PORT=3000
BACKEND_PORT=4000

start_servers(){
	PORT=$BACKEND_PORT npm start --prefix dictionaryServer &>/dev/null &
	DICTIONARYSERVER_PID=$!
	PORT=$BACKEND_PORT serve -s dictionaryFrontend/build -l $FRONTEND_PORT &>/dev/null &
	DICTIONARYFRONTEND_PID=$!
}

build_frontend(){
	echo REACT_APP_BE_PORT=$BACKEND_PORT > dictionaryFrontend/.env
	npm run build --prefix dictionaryFrontend
}

build_frontend
start_servers

echo $DICTIONARYSERVER_PID $DICTIONARYFRONTEND_PID
