'use client'
import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Send, Menu } from 'lucide-react'


const socket = new WebSocket('ws://localhost:8080/ws');

socket.onopen = () => {
  console.log('WebSocket connection opened');
};

socket.onerror = (error) => {
  console.error('WebSocket error: ', error);
};

export default function Component() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [newMessage, setNewMessage] = useState("")
  const [Messages, setMessages] = useState([])

  
  const params = useSearchParams()
  const username = params.get('username')
  
  socket.onmessage = (event) => {
    let data = JSON.parse(event.data)
    setMessages([...Messages, data]);
  };


  const handleChange = (event) => {
    setNewMessage(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    let data = {
      sender: username,
      content: newMessage,
    }
    data = await JSON.stringify(data)
    socket.send(data);
    setNewMessage('')
  }

  const contacts = [
    { id: 1, name: 'Alice Johnson', status: 'online', avatar: '/placeholder.svg?height=32&width=32' },
    { id: 2, name: 'Bob Smith', status: 'offline', avatar: '/placeholder.svg?height=32&width=32' },
    { id: 3, name: 'Charlie Brown', status: 'online', avatar: '/placeholder.svg?height=32&width=32' },
    { id: 4, name: 'Diana Prince', status: 'away', avatar: '/placeholder.svg?height=32&width=32' },
  ]

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="bg-gray-800 p-4 flex items-center justify-between">
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <Menu className="h-6 w-6" />
          </Button>
          <h1 className="text-xl font-bold">Chat with GoChat</h1>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 p-4">
          {Messages.map((message) => (
            <div key={message.id} className={`mb-4 ${message.sender === username ? 'text-right' : ''}`}>
              <div className={`inline-block p-2 rounded-lg ${message.sender === username ? 'bg-blue-600' : 'bg-gray-700'}`}>
                <p>{message.sender}</p>
                <p>{message.content}</p>
              </div>
            </div>
          ))}
        </ScrollArea>

        {/* Message Input */}
        <div className="bg-gray-800 p-4">
          <form className="flex space-x-2">
            <Input 
              onChange = {handleChange}
              type="text" 
              value = {newMessage}
              placeholder="Type a message..."
              className="flex-1 bg-gray-700 border-gray-600 text-white"
            />
            <Button onClick={handleSubmit} className="bg-blue-600 hover:bg-blue-700">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}