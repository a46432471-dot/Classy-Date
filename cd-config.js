// ============================================================
// ClassyDate — Global Config
// ============================================================
// 📌 HOW TO USE:
//   1. Edit the values below
//   2. Commit the change to GitHub
//   3. Render auto-deploys in ~1 minute
//   4. Every page (chat.html, matchmaking.html, etc.) picks up the new values
// ============================================================

window.CD_CONFIG = {

    // ============================================================
    // 🌍 CASHIER NUMBER
    // Where non-Kenya users land after picking their country
    // (from the country modal → cashier overlay → WhatsApp)
    // ============================================================
    WHATSAPP_NUMBER: '254707001191',

    // ============================================================
    // 💬 SUPPORT CHAT NUMBER
    // Where the "Chat with us on WhatsApp" button in the chat page leads
    // (direct chat with support team)
    // ============================================================
    WHATSAPP_SUPPORT_NUMBER: '254754447524',

    // ============================================================
    // 💬 DEFAULT WHATSAPP MESSAGE
    // ============================================================
    WHATSAPP_MESSAGE: "Hi ClassyDate, I'd like to book a private connection. I am ready with the required fee",

    // ============================================================
    // 📧 SUPPORT EMAIL
    // ============================================================
    SUPPORT_EMAIL: 'support@classydate.com',

    // ============================================================
    // 💵 BOOKING FEE (USD)
    // For Kenya: charged in KES equivalent
    // For others: WhatsApp cashier flow
    // ============================================================
    BOOKING_FEE_USD: 10,

    // ============================================================
    // 💱 FX RATES (per 1 USD)
    // Update these when exchange rates shift noticeably
    // ============================================================
    FX_RATES: {
        KES: 125,      // Kenyan Shilling — 125 * $10 = 1250 KES
        UGX: 3700,     // Ugandan Shilling
        TZS: 2600,     // Tanzanian Shilling
        ZAR: 18.6,     // South African Rand
        NGN: 1550,     // Nigerian Naira
        GHS: 15.2,     // Ghanaian Cedi
        USD: 1
    },

    // ============================================================
    // 🎯 PAYSTACK PUBLIC KEY
    // ============================================================
    PAYSTACK_PUBLIC_KEY: 'pk_live_4fb6e4cd39c85021b0ea1f07731619714dfbeab3'

};
