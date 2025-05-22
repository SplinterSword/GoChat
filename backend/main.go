package main

import (
	"fmt"
	"net/http"

	"github.com/SplinterSword/GoChat/backend/pkg/websocket"
	"github.com/rs/cors"
)

func serveWS(pool *websocket.Pool, w http.ResponseWriter, r *http.Request) {
	fmt.Println("WebSocket Endpoint Hit")

	ws, err := websocket.Upgrade(w, r)
	if err != nil {
		RespondWithError(w, http.StatusBadRequest, err.Error())
		return
	}

	client := &websocket.Client{
		Conn: ws,
		Pool: pool,
	}
	pool.Register <- client
	client.Read()
}

func setupRoutes() {
	pool := websocket.NewPool()
	go pool.Start()

	http.HandleFunc("/ws", func(w http.ResponseWriter, r *http.Request) {
		serveWS(pool, w, r)
	})
}

func main() {
	setupRoutes()
	fmt.Println("Chat Backend server is listening on http://localhost:8080")
	
	// Create a CORS middleware
	c := cors.New(cors.Options{
		AllowedOrigins:   []string{"*"}, // Allow all origins
		AllowedMethods:   []string{"GET", "POST", "OPTIONS"},
		AllowedHeaders:   []string{"Content-Type", "Authorization"},
		AllowCredentials: true,
	})
	
	// Wrap the default ServeMux with CORS middleware
	http.ListenAndServe(":8080", c.Handler(http.DefaultServeMux))
}
