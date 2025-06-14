# Notes API 

This is a Dockerized Node.js + MongoDB Notes API built with Express and Mongoose.

## Features
- REST API for adding and retrieving notes
- MongoDB for data storage
- Docker + Docker Compose for easy setup

## Getting Started

```bash
docker-compose up --build

Then test:

curl -X POST http://localhost:3000 -H "Content-Type: application/json" -d '{"text": "Hello Docker!"}'
curl http://localhost:3000
