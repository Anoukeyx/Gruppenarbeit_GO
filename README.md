# Gruppenarbeit_GO

Reflexion Gruppe GO!

In unserer Gruppe gibt es keine Programmiergenies oder coole Hacker:innen. Doch wir 
haben uns von Anfang an mit Interesse und Elan dem Projekt gewidmet. Was gut 
funktioniert hat, war die Durchführung der Arbeitsschritte. Wir haben systematisch 
einen Punkt nach dem anderen abgearbeitet und nicht überstürzt zu schnell zu viel 
gemacht. Zunächst war es wichtig, klar zu definieren, was wir machen wollen, den 
User Flow zu erstellen und das Figma-Design zu entwerfen. Dabei haben wir Aufgaben 
unter uns aufgeteilt, uns aber regelmässig abgesprochen, auf dem aktuellen Stand 
gehalten und gegenseitig Feedback gegeben. Wir haben auch die Funktionalität des 
Codes priorisiert, statt uns zuerst mit dem CSS auseinanderzusetzen. Beim Programmieren 
traten immer wieder Probleme auf, und wir waren auch oft auf Hilfe angewiesen. 
Doch haben wir immer zuerst selbst (und mit der Hilfe von ChatGPT) versucht, eine 
Lösung zu finden, und manchmal ist uns das auch gelungen, was kleine Freudenmomente 
waren. Was wir bei der Arbeit mit ChatGPT gelernt haben, ist, dass wir manchmal einen 
von ChatGPT generierten Code benutzt haben, um eine Funktion zum Laufen zu bringen. 
Aber dann sind wir beim nächsten Schritt nicht weitergekommen, weil wir den Code nicht 
verstanden haben. Deshalb haben wir die Wichtigkeit erkannt, dass wir den Code, 
den wir verwenden, auch verstehen müssen.

Mit Supabase entwickelten wir einen Authentifizierungsfluss. Unsere Herausforderung 
bestand darin, den Magic-Link zur Authentifizierung effektiv zu nutzen und sicherzustellen, 
dass Benutzerinformationen korrekt im Browser gespeichert werden. Wir stiessen auf ein 
Problem, bei dem die uuid eines Benutzers nach der Registrierung mit dem Magic-Link 
nicht als Cookie gespeichert wurde. Dieses Detail war entscheidend, da ohne das Cookie 
die Applikation nicht in der Lage war, den angemeldeten Benutzer zu identifizieren und 
dessen Sitzung zu aktualisieren. Bei der Fehlersuche vermuteten wir, dass die Implementierung 
des Sitzungsmanagements in unserem Code nicht ausreichte. Konkret führte das Einleiten 
einer Authentifizierungssitzung und das Speichern der Sitzungsinformationen im lokalen 
Speicher des Browsers nicht dazu, dass das erwartete Cookie gesetzt wurde. Dies behinderte 
unsere Fähigkeit, Funktionen wie das automatische Laden und Aktualisieren des angemeldeten 
Benutzers sowie das Löschen der Benutzerdaten. Darüber hinaus verhinderte dieses Problem 
die automatische Generierung von QR-Codes, da die Benutzeridentifikation unmittelbar damit 
zusammenhing. Wir erkannten, dass wir den statischen Platzhalter für die uuid durch eine 
dynamische Zuweisung ersetzen mussten, die die echte Benutzer-ID nach der Authentifizierung 
reflektiert. Unsere vorläufige Lösung bestand darin, die Benutzer-ID hart zu kodieren, was 
uns erlaubte, den Prozess vorübergehend zu simulieren. Die Schwierigkeiten mit der 
Cookie-Speicherung zeigten uns die Bedeutung von gründlichen Tests und der Notwendigkeit, 
verschiedene Szenarien durchzuspielen, um zu gewährleisten, dass die Weiterleitungen 
funktionieren. Leider konnten wir aufgrund von Zeitmangel in der Benutzungsphase dieses 
Feature nicht ausreichend testen, was zu einer Lücke in unserem Verifizierungsprozess führt.

Im Grossen und Ganzen sind wir zufrieden. Unser Projekt ist zwar nicht genau dort, 
wo wir es uns vorgestellt hatten, aber wir haben alle dabei viel gelernt und konnten davon profitieren.
