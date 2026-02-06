import { Chatbot } from "@/components/chatbot";

export default function ChatbotPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">Campus Assistant</h1>
        <p className="text-muted-foreground">Ask me anything about campus!</p>
      </div>
      <Chatbot />
    </div>
  );
}
