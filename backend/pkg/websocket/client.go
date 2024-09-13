package websocket

import (
	"encoding/json"
	"fmt"
	"log"

	"github.com/google/uuid"
	"github.com/gorilla/websocket"
)

type Client struct {
	ID   string
	Conn *websocket.Conn
	Pool *Pool
}

type Message struct {
	ID     string `json:"id"`
	Sender string `json:"sender"`
	Body   string `json:"content"`
}

func (c *Client) Read() {
	defer func() {
		c.Pool.Unregister <- c
		c.Conn.Close()
	}()

	type parameters struct {
		Sender  string `json:"sender"`
		Content string `json:"content"`
	}

	for {
		_, p, err := c.Conn.ReadMessage()
		if err != nil {
			log.Println(err)
			break
		}

		params := parameters{}
		err = json.Unmarshal(p, &params)
		if err != nil {
			log.Println(err)
			break
		}

		id := uuid.New().String()
		c.Pool.Broadcast <- Message{ID: id, Sender: params.Sender, Body: params.Content}
		fmt.Printf("Message Received: %+v\n", string(p))
	}
}
