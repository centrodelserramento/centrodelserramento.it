document.addEventListener('DOMContentLoaded', function() {
    const failedPath = window.location.pathname;
    const messageContainer = document.getElementById('dynamic-message');
    
    // Function to extract and clean product name from URL
    function getProductName(path) {
        // Get the last segment of the path
        const segments = path.split('/').filter(s => s.length > 0);
        let lastSegment = segments[segments.length - 1];
        
        // If it's a generic word like 'prodotti', try the one before it if available
        if (lastSegment === 'prodotti' || lastSegment === 'shop' || lastSegment === 'centrodelserramento.it') {
            return null;
        }

        // Clean up the slug: remove hyphens, capitalize
        return lastSegment
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    const productName = getProductName(failedPath);
    
    if (failedPath.includes('/prodotti/') || failedPath.includes('/shop/') || productName) {
        let displayMessage = `
            <p style="font-size: 1.2rem; margin-bottom: 1.5rem;">
                Il prodotto ${productName ? `<strong>"${productName}"</strong>` : ''} 
                non è più disponibile direttamente sul nostro sito web.
            </p>
        `;

        messageContainer.innerHTML = displayMessage + `
            <p>
                Ma non preoccuparti! Contattaci direttamente per avere maggiori informazioni, 
                conoscere le alternative disponibili o ricevere assistenza personalizzata. 
                Siamo qui per aiutarti a trovare la soluzione perfetta per la tua casa.
            </p>
        `;
    }
});
