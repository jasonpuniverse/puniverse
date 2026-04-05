export interface DigitalProduct {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  price: number;
  stripePaymentLink: string;
  imageUrl: string;
  downloadUrl: string; // The URL they access ONLY after payment success
  
  // n8n Extended Structure
  whosItFor: string;
  howItWorks: string[];
  setupSteps: string[];
  requirements: string[];
}

export const digitalProducts: Record<string, DigitalProduct> = {
  'aura-ugc-email-approval': {
    id: 'prod_aura_ugc_001',
    slug: 'aura-ugc-email-approval',
    title: 'Aura UGC Ads: POV Vibe (Email)',
    subtitle: 'Nano Banana 2 → Google Veo 3.1',
    description: 'An advanced n8n workflow designed to continuously generate hyper-realistic 8-second POV aesthetics UGC video ads for your brand using Nano Banana 2 and Google Veo 3.1. We solved the complex API upload limits so you do not have to—seamlessly pushing to TikTok via Zapier, along with direct Instagram and Pinterest integrations.',
    price: 99.00,
    stripePaymentLink: 'https://buy.stripe.com/test_dummy_link_email_ugc', 
    imageUrl: '/images/products/email_workflow_product.png', 
    downloadUrl: '/downloads/workflows/aura-ugc-email.json',
    
    whosItFor: 'For e-commerce founders, dropshippers, and marketing agencies who want to instantly scale TikTok, Meta, and Pinterest ad creatives without paying expensive UGC creators or dealing with complex API posting limits.',
    howItWorks: [
      'The workflow triggers on a schedule or via webhooks.',
      'Nano Banana 2 constructs a hyper-realistic, POV-style base image aligned with your product.',
      'Google Veo 3.1 synthesizes a dynamic, fluid 8-second video render from the base asset.',
      'The raw video is routed to an Email Approval node where you can Accept, Deny, or Regenerate.',
      'Upon approval, the system pushes the video natively to Instagram and Pinterest, while utilizing Zapier to bypass strict TikTok automated posting constraints.'
    ],
    setupSteps: [
      'Import the JSON file into your local or cloud hosted n8n environment.',
      'Paste your Gemini / Nano Banana / Veo API keys into the HTTP nodes.',
      'Bind your Zapier Webhook URL to securely pass video payloads into TikTok.',
      'Configure the Email triggering node with your administrator inbox.'
    ],
    requirements: [
      'n8n instance (Cloud or Desktop)',
      'Google Gemini API Key',
      'Nano Banana 2 / Veo 3.1 Engine Access',
      'Zapier Starter Account (for TikTok bypass)',
      'Instagram Business Account ID'
    ]
  },

  'aura-ugc-telegram-approval': {
    id: 'prod_aura_ugc_002',
    slug: 'aura-ugc-telegram-approval',
    title: 'Aura UGC Ads: Mood Transition (Telegram)',
    subtitle: 'Nano Banana 2 → Google Veo 3.1',
    description: 'An advanced n8n workflow designed to continuously generate hyper-realistic 8-second Mood Transition aesthetics UGC video ads for your brand. Features a seamless in-app Telegram approval loop allowing you to act as a fast-paced creative director from your phone.',
    price: 99.00,
    stripePaymentLink: 'https://buy.stripe.com/test_dummy_link_telegram_ugc', 
    imageUrl: '/images/products/telegram_workflow_product.png',
    downloadUrl: '/downloads/workflows/aura-ugc-telegram.json',
    
    whosItFor: 'For proactive founders and media buyers who want to rapidly scale ad volume and approve/reject massive pipelines of AI UGC video creatives straight from their mobile device.',
    howItWorks: [
      'The automated queue identifies your winning product parameters.',
      'Nano Banana 2 builds a distinct "Mood Transition" image composite.',
      'Google Veo 3.1 morphs and animates the composite into an ultra-smooth 8-second video.',
      'The video drops directly into your private Telegram Bot chat with an inline Approve/Deny button.',
      'Upon hitting Approve in Telegram, the video fires into Instagram, Pinterest, and your Zapier-TikTok hook.'
    ],
    setupSteps: [
      'Import the JSON file into n8n.',
      'Create a free Telegram Bot via BotFather and link the Token.',
      'Connect the API keys for Nano Banana and Google Veo.',
      'Link your Zapier webhook to finish the automated TikTok dispatch.'
    ],
    requirements: [
      'n8n instance (Cloud or Desktop)',
      'Telegram Bot API Token',
      'Google Gemini API Key',
      'Nano Banana 2 / Veo 3.1 Engine Access',
      'Zapier Starter Account (for TikTok bypass)'
    ]
  }
};
