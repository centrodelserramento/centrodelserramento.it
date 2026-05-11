document.addEventListener('DOMContentLoaded', function() {
    const failedPath = window.location.pathname;
    const messageContainer = document.getElementById('dynamic-message');
    
    // Check if it's a product-related path (likely from the old website)
    if (failedPath.includes('/prodotti/') || failedPath.includes('/shop/')) {
        messageContainer.innerHTML = `
            <p style="font-size: 1.2rem; margin-bottom: 1.5rem;">
                Il prodotto che stai cercando <strong>non è più disponibile sul nostro sito web</strong>.
            </p>
            <p>
                Ma non preoccuparti! Contattaci direttamente per avere maggiori informazioni, 
                conoscere le alternative disponibili o ricevere assistenza personalizzata. 
                Siamo qui per aiutarti a trovare la soluzione perfetta per la tua casa.
            </p>
        `;
    }
});
