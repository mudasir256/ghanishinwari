// WhatsApp: +92 307 3711414 (no + or spaces for wa.me)
export const WHATSAPP_NUMBER = "923073711414";
export const WHATSAPP_ORDER_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I would like to place an order from Ghani Shinwari.")}`;
export const WHATSAPP_DISPLAY = "+92 307 3711414";

/** WhatsApp order URL with optional item name in the message */
export function whatsappOrderUrl(itemName?: string): string {
  const message = itemName
    ? `Hi, I would like to order ${itemName} from Ghani Shinwari.`
    : "Hi, I would like to place an order from Ghani Shinwari.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Contact
export const PHONE = "+92 307 3711414";
export const PHONE_TEL = "tel:+923073711414";
export const EMAIL = "info.ghanishinwari@gmail.com";
export const EMAIL_MAILTO = "mailto:info.ghanishinwari@gmail.com";

// Social
export const FACEBOOK_URL = "https://www.facebook.com/GhaniShinwari14/";
export const INSTAGRAM_URL = "https://www.instagram.com/ghanishinwari14/";
