///////////////////////////////////
// Transparency-Maker by Lobers //
/////////////////////////////////

var doc = app.activeDocument; 

// QUELLDATEI
var QuelldateiStr = doc.toString(); // Neue Variable mit aktuellem Dateinamen als String generiert (Neuer Dateiname für das transparente Bild)
var QuelldateiName = QuelldateiStr.replace("[Document ", "").replace(/]/g, "").replace(/.jpg|.jpeg|.tif|.tiff|.gif|.eps|.svg|.bmp|.psd/g, ""); // Entfernt Teil des Strings (Überbleibsel "[Document" und "]" von app.activeDocument, sodass nur der tatsächliche Dateiname OHNE Endung übrig bleibt)

// DIALOGBOX
var Dialogbox = new Window("dialog", "Transparency-Maker by Lobers");
btnPnl = Dialogbox.add("panel", [7,10,200,100], "Bitte Transparenz-Art wählen!");
Hell = btnPnl.add("button", [10,15,175,35], "Hell" );
Dunkel = btnPnl.add("button", [10,45,175,65], "Dunkel"); // Dialogbox-Design in eckigen Klammern: [Seitlicher Abstand, Abstand zum nächsten Objekt nach oben, Breite, Höhe]

// HELLE TRANSPARENZ
Hell.onClick = function() {
doc.duplicate(QuelldateiName+"_Transparenz_hell"); // Dokument duplizieren und neuen Dateinamen mit Zusatzhinweis geben
var transparenzHell = new CMYKColor(); // Farbe für Transparenz festlegen
transparenzHell.cyan = 0;
transparenzHell.magenta = 0;
transparenzHell.yellow = 0;
transparenzHell.black = 0;
app.activeDocument.artLayers.add();
app.activeDocument.selection.fill(transparenzHell);
app.activeDocument.activeLayer.opacity = 85; // Deckkraft  
activeDocument.mergeVisibleLayers(); // Ebenen zusammenlegen
app.activeDocument = app.documents[0] ; // Wechsel zum ersten, geöffneten Dokument (Ausgangsbild)
app.activeDocument.close(SaveOptions.DONOTSAVECHANGES); // Schließe erstes geöffnetes Dokument (Ausgangsbild)
Dialogbox.close(); // Schließe Dialogbox am Ende
}

// DUNKLE TRANSPARENZ
Dunkel.onClick = function() {
doc.duplicate(QuelldateiName+"_Transparenz_dunkel"); // Dokument duplizieren und neuen Dateinamen mit Zusatzhinweis geben 
var transparenzDunkel = new CMYKColor(); // Farbe für Transparenz festlegen
transparenzDunkel.cyan = 54;
transparenzDunkel.magenta = 41;
transparenzDunkel.yellow = 36;
transparenzDunkel.black = 89;
app.activeDocument.artLayers.add();
app.activeDocument.selection.fill(transparenzDunkel);
app.activeDocument.activeLayer.opacity = 85;  // Deckkraft  
activeDocument.mergeVisibleLayers(); // Ebenen zusammenlegen
app.activeDocument = app.documents[0] ; // Wechsel zum ersten, geöffneten Dokument (Ausgangsbild)
app.activeDocument.close(SaveOptions.DONOTSAVECHANGES); // Schließe erstes geöffnetes Dokument (Ausgangsbild)
Dialogbox.close(); // Schließe Dialogbox am Ende
}

Dialogbox.show(); // Muss ganz am Ende stehen, damit die Dialogbox funktioniert

