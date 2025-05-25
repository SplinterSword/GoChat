# GoChat

In today's fast-paced digital world, real-time communication is more important than ever. Whether you're collaborating with a team, catching up with friends, or building the next big social platform, having a reliable and efficient chat application is crucial.

GoChat is a modern, real-time chat application that demonstrates the power of WebSockets combined with the performance of Go in the backend and the flexibility of Next.js in the frontend. Built as a learning project, it showcases how to create responsive, real-time applications using modern web technologies.

## The Problem It Solves

Traditional HTTP-based chat applications often suffer from latency and inefficiency due to their request-response nature. They either require constant polling (which is resource-intensive) or long-polling (which has its own set of challenges).

GoChat solves this by implementing WebSockets, enabling full-duplex communication channels over a single TCP connection. This means messages are delivered instantly with minimal overhead, providing a smooth and responsive chat experience.

## Key Features

- Real-time messaging with WebSockets
- Blazing fast backend built with Go
- Modern UI built with Next.js and shadcn/ui
- Bi-directional communication
- Responsive design that works on all devices
- Easy to set up and deploy

## Technologies Used

### Frontend

#### Next.js
Next.js provides a robust framework for building React applications with server-side rendering and static site generation. It offers an excellent developer experience and optimizations out of the box, making it perfect for building modern web applications.

#### shadcn/ui
A beautifully designed component library that provides accessible, customizable, and reusable UI components. It follows best practices and helps in building consistent user interfaces quickly.

#### WebSocket API
Enables real-time, bidirectional communication between the browser and the server, allowing for instant message delivery without the need for constant polling.

### Backend

#### Go (Golang)
Known for its simplicity, efficiency, and excellent concurrency support, Go is the perfect language for building high-performance network applications like chat servers.

#### Gorilla WebSocket
A popular WebSocket implementation for Go that provides a complete and tested implementation of the WebSocket protocol, making it easy to add real-time features to your applications.

## Getting Started

### Prerequisites

- Go (1.20 or higher)
- Node.js (18.x or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SplinterSword/GoChat.git
   cd GoChat
   ```

2. **Set up the backend**
   ```bash
   cd backend
   go mod download
   go build -o out && ./out
   ```
   The backend server will start on `http://localhost:8080`

3. **Set up the frontend**
   ```bash
   cd ../frontend
   npm install
   npm run dev
   ```
   The frontend will be available at `http://localhost:3000`

## Project Structure

```
GoChat/
├── backend/           # Go backend server
│   ├── main.go        # Entry point of the Go application
│   ├── go.mod         # Go module file
│   └── ...
├── frontend/          # Next.js frontend
│   ├── components/    # React components
│   ├── pages/         # Next.js pages
│   ├── public/        # Static files
│   └── ...
└── README.md         # This file
```

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Your Name - [@SplinterSword1](https://x.com/SplinterSword1) - sparshj2003@gmail.com

Project Link: [https://github.com/SplinterSword/GoChat.git ](https://github.com/SplinterSword/GoChat.git)