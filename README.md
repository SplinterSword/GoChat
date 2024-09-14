
# GoChat

This is a chat application that I have Build to learn about webSockets and practice GO


## Backend

The Backend was created using GO programming Launguage. The backend is connected to the frontend using a webSocket Connection.

github.com/gorilla/websocket library was used to create the websocket connection in GO backend

To run the backend server you need to open a new ternimal at the location of the project directory and run these commands

```
cd backend
go build -o out && ./out
```

## Frontend

The frontend was build using nextjs framework.

I decided to use the latest shadcn ui library for designing the UI of the chat application which proved to be a big time save for me and helped me create a good looking website.

Again websockets were used to connect react frontend to the go backend

To run the frontend open a new terminal and run the following commands

```
cd frontend
npm install
npm run dev
```