import { MessageCircle } from 'lucide-react';

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5531996895217"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Falar no WhatsApp"
      title="Falar no WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
      
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
    </a>
  );
}
