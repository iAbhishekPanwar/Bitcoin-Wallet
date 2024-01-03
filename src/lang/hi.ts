/* eslint-disable no-unused-vars */

import Language from '@/lang/langInterface'

/* eslint-enable no-unused-vars */

var hi = <Language> {
  
     // Initial page
    getting_started: 'प्रारंभ करना',
    create_new: 'नया बटुआ बनाएं',
    create_subtext: 'हम आपके लिए एक नया बटुआ बनाएंगे ताकि आप बिटकॉइन का उपयोग शुरू कर सकें।',
    restore_existing: 'मौजूदा बटुआ बहाल करें',
    restore_subtext: 'आपके पास पहले से ही एक बटुआ है और आप अपने बहाली शब्दों का उपयोग करके इसे बहाल करना चाहते हैं।',
    change_language: 'भाषा बदलें',
    choose_language: 'भाषा चुनें',

    // Create page
    seed_phrase: 'बहाली शब्द',
    wrote_it_down: 'मैंने इसे लिख लिया',
    generate: 'उत्पन्न करें',
    warning: 'चेतावनी',
    we_will_generate: 'हम आपके लिए 12 बहाली शब्द उत्पन्न करेंगे।',
    warning_text_1: 'शब्दों को सही क्रम में लिखें और उन्हें सुरक्षित और ऑफ़लाइन रखें। यदि आप इन शब्दों को खो देते हैं, तो आप अपने बिटकॉइन तक पहुँच नहीं पाएंगे।',
    warning_text_2: 'ये बहाली शब्द आपको आपके बटुए को बहाल करने की अनुमति देंगे। शब्दों को लिखें और उन्हें सुरक्षित और ऑफ़लाइन रखें।',
    write_it_down: 'लिखें',
    keep_it_safe: 'सुरक्षित रखें',
    do_not_lose_it: 'खोने मत दें',
    have_saved: 'मैंने अपने बहाली शब्द सुरक्षित रख लिए हैं।',

    // Restore page
    restore_notice: 'कृपया अपने बहाली शब्द दर्ज करें ताकि आप अपना बटुआ बहाल कर सकें।',
    restore_warning: 'आपने दर्ज किए गए बहाली शब्द अमान्य हैं। शब्दों को सही ढंग से लिखें और उनमें कोई बड़े अक्षर नहीं होना चाहिए।',
    restoring: 'बहाली हो रही है...',

    // Wallet home
    refresh: 'ताज़ा करें',
    overview: 'अवलोकन',
    send: 'भेजें',
    receive: 'प्राप्त करें',
    settings: 'सेटिंग्स',
    amount_to_send: 'भेजने की राशि',
    not_enough_balance: 'उस राशि को भेजने के लिए पर्याप्त शेष नहीं है',
    send_max: 'अधिकतम भेजें',
    amount: 'राशि',
    miner_fee: 'नेटवर्क शुल्क',
    total: 'कुल',
    confirmation: 'पुष्टि',
    they_receive: 'वे प्राप्त करते हैं',
    recepient: 'प्राप्तकर्ता',
    sending: 'भेजा जा रहा है...',
    are_you_sure: 'क्या आप इस लेन-देन को भेजना चाहते हैं?',
    im_sure: 'हाँ, मैं सुनिश्चित हूँ, भेजें',
    seed_modal: 'बहाली शब्द',
    transaction: 'लेन-देन',
    transactions: 'लेन-देन',
    buy_bitcoin: 'बिटकॉइन खरीदें',

    // Pagination
    page: 'पृष्ठ', // Displayed as 'Page 1 of 1'
    of: 'का',

    // Overview
    total_balance: 'कुल शेष',
    no_transactions: 'आपने अभी तक कोई लेन-देन नहीं किया है',
    what_to_do: 'आप क्या करना चाहेंगे?',
    date: 'तारीख',
    status: 'स्थिति',
    processing: 'प्रसंस्करण',
    unconfirmed: 'अनपुष्टि',
    complete: 'पूरा',

    // Send
    send_to: 'केवल बिटकॉइन (BTC) पतों पर भेजें',
    bitcoin_address: 'बिटकॉइन पता',
    address: 'पता',
    low_priority: 'निम्न प्राथमिकता',
    standard: 'मानक',
    important: 'महत्त्वपूर्ण',
    low_priority_desc: 'आप कम शुल्क देते हैं, लेकिन आप इसे एक निम्न-प्राथमिकता लेन-देन मानते हैं और शायद विश्वास करते हैं कि पुष्टि के लिए अधिक समय लग सकता है।',
    standard_desc: 'यह मानक शुल्क लेगा, जब अधिक भीड़ होने पर इसके पुष्टि में अधिक समय लग सकता है, लेकिन ये विशेष स्थितियाँ होती हैं।',
    important_desc: '30 मिनट के भीतर पुष्टि को लक्ष्य करने के लिए एक प्रीमियम शुल्क का उपयोग करता है, यह एक उच्च प्राथमिकता लेन-देन है और आप चाहते हैं कि इसे जल्दी पुष्टि किया जाए।',
    not_enough: 'आपके पास उस राशि का पर्याप्त शेष नहीं है और नेटवर्क शुल्क भी देना होगा। इसे बिजली अधिकतम बटन के साथ अपने पूरे शेष के साथ भेजने की कोशिश करें।',
    dust_error: 'वह राशि जो आप भेजने की कोशिश कर रहे हैं, वह बिटकॉइन नेटवर्क के लिए बहुत छोटी है।',
    bitcoin_network_fee: 'बिटकॉइन नेटवर्क शुल्क',

    // Receive
    receive_only: 'केवल बिटकॉइन प्राप्त करें',
    wallet_address: 'वॉलेट पता',
    address_below: 'नीचे दिए गए पते पर',

    // Settings
    show_seed: 'बहाली',
    language: 'भाषा',
    currency: 'मुद्रा',
    exit_wallet: 'वॉलेट से बाहर निकलें',

    // Buttons
    back_button: 'पीछे जाएं',
    restore_button: 'बहाल करें',
    next_button: 'आगे',
    ok_button: 'ठीक है',
    copy_button: 'कॉपी',
    save_button: 'सहेजें',

    // Notification
    notification_title: 'आने वाला लेन-देन',

    // Exit wallet
    exit_text: 'यह आपके वॉलेट फ़ाइलें और आपके सभी लेन-देन के सभी रिकॉर्ड को नष्ट कर देगा। आपके वॉलेट को बहाल करने का एकमात्र तरीका आपके बहाली शब्दों के माध्यम से होगा',
    exit_are_you_sure: 'क्या आप वाकई इस वॉलेट को मिटाना और बाहर निकलना चाहते हैं?',
    exit_label_text: 'हाँ, इस वॉलेट को मिटाएं',
    exit_delete: 'मिटाएं'

}

export default hi
