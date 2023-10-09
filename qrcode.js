const { createClient } = require('@supabase/supabase-js');
const QRCode = require('qrcode-svg');
const fs = require('fs');

// Supabase-Zugangsdaten (ersetze mit deinen eigenen)
const supabaseUrl = 'DEINE_SUPABASE_URL';
const supabaseKey = 'DEIN_SUPABASE_API_SCHLÜSSEL';

// Erstelle einen Supabase-Client
const supabase = createClient(supabaseUrl, supabaseKey);

// Funktion zum Generieren eines QR-Codes aus Daten
async function generateQRCode(data) {
  const qr = new QRCode({
    content: JSON.stringify(data), // Du kannst hier die Daten anpassen, die du im QR-Code speichern möchtest
    container: 'svg-viewbox',
    width: 300,
    height: 300,
  });

  const svgString = qr.svg();

  // Speichere den QR-Code als SVG-Datei (optional)
  fs.writeFileSync('qr-code.svg', svgString);

  // Du kannst den SVG-Code jetzt verwenden oder speichern, wie du möchtest
  console.log('QR-Code SVG generiert:', svgString);
}

// Daten aus der Supabase-Datenbank abrufen
async function fetchDataFromSupabase() {
  const { data, error } = await supabase.from('deine_tabelle').select('deine_spalten');

  if (error) {
    console.error('Fehler beim Abrufen der Daten:', error);
    return;
  }

  // Iteriere durch die abgerufenen Daten und generiere QR-Codes
  data.forEach((row) => {
    generateQRCode(row);
  });
}

// Daten abrufen und QR-Codes generieren
fetchDataFromSupabase();
