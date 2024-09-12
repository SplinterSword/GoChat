package websocket

import (
	"fmt"
	"log"

	"github.com/gorilla/websocket"
)

type Client struct {
	ID   string
	Conn *websocket.Conn
	Pool *Pool
}

type Message struct {
	ID   string
	Body string `json:"body"`
	Type int    `json:"type"`
}

func (c *Client) Read() {
	defer func() {
		c.Pool.Unregister <- c
		c.Conn.Close()
	}()

	for {
		messageType, p, err := c.Conn.ReadMessage()
		if err != nil {
			log.Println(err)
			break
		}
		c.Pool.Broadcast <- Message{ID: c.ID, Body: string(p), Type: messageType}
		fmt.Printf("Message Received: %+v\n", string(p))
	}
}
