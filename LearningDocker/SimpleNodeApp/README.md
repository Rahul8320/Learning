# Learning Docker

## Build

Build this simple node backend application

```
docker build . -t node_app
```

## Run

Run the application in docker

```
docker run -p 3000:3000 node_app
```

## Tests

This backend api has two routes

### / Request

```
GET http://localhost:3000
```

### / Response

```json
Server is ready to serve!
```

### /jokes Request

```
GET http://localhost:3000/jokes
```

### /jokes Response

```json
[
  { "id": 1, "title": "A first joke", "content": "This is first joke content" },
  {
    "id": 2,
    "title": "A second joke",
    "content": "This is second joke content"
  },
  { "id": 3, "title": "A third joke", "content": "This is third joke content" },
  {
    "id": 4,
    "title": "A fourth joke",
    "content": "This is fourth joke content"
  },
  { "id": 5, "title": "A fifth joke", "content": "This is fifth joke content" }
]
```

## Docker Clean Up

### Remove Unused Containers

```
docker container prune
```

### Remove Unused Images

```
docker image prune
```

### Remove All Unused Resources

```
docker system prune
```

### Remove Volumes

```
docker volume prune
```

### Remove Networks

```
docker network prune
```

### See Disk Usage Information

```
docker system df
```

