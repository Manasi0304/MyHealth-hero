import React, { useEffect } from 'react';

const Chatbot = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            window.botpressWebChat.init({
                "composerPlaceholder": "Chat with bot",
                "botConversationDescription": "This chatbot was built surprisingly fast with Botpress",
                "botId": "38ed9c45-d8e2-43ba-bd18-35e4b76f9c97",
                "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
                "messagingUrl": "https://messaging.botpress.cloud",
                "clientId": "38ed9c45-d8e2-43ba-bd18-35e4b76f9c97",
                "webhookId": "7de78305-36fa-4a97-a0cb-7d3962e22582",
                "lazySocket": true,
                "themeName": "prism",
                "frontendVersion": "v1",
                "useSessionStorage": true,
                "enableConversationDeletion": true,
                "theme": "prism",
                "themeColor": "#2563eb"
            });
        };

        // Cleanup
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div>
            {/* This div will be replaced by the chatbot once initialized */}
            <div id="botpress-webchat"></div>
        </div>
    );
};

export default Chatbot;
