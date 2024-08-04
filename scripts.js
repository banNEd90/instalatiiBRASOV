// Adăugăm un eveniment pentru butonul de apel principal
document.getElementById('callButton').addEventListener('click', function() {
    var phoneNumber = '+40720662255'; // Numărul de telefon
    // Afișăm o fereastră de confirmare înainte de a iniția apelul
    var userConfirmed = confirm('Doriți să sunați la ' + phoneNumber + '?');
    if (userConfirmed) {
        window.location.href = 'tel:' + phoneNumber; // Inițializare apel telefonic
    }
});

// Adăugăm un eveniment pentru butonul din colțul stânga sus
document.getElementById('phoneButton').addEventListener('click', function() {
    var phoneNumber = '+40720662255'; // Numărul de telefon
    // Afișăm o fereastră de confirmare înainte de a iniția apelul
    var userConfirmed = confirm('Doriți să sunați la ' + phoneNumber + '?');
    if (userConfirmed) {
        window.location.href = 'tel:' + phoneNumber; // Inițializare apel telefonic
    }
});
