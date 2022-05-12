# VisualCast
UITLEGJE

## Inhoudsopgave


## User story ⏳
Marie is Doof (met een hoofdletter inderdaad, dat betekent dat ze zichzelf als Doof identificeert, wat simpel gezegd betekent dat haar eerste taal Nederlandse Gebarentaal is). Je zult begrijpen dat Marie moeite heeft met dingen waar geluid een grote rol speelt.

Hoe werkt een podcast voor Marie? In een transcriptie gaat natuurlijk nogal wat nuance verloren. Maak een oplossing die minimaal net zo prettig is voor iemand die niet kan luisteren als voor iemand die wel kan luisteren.

Hoe werken closed captions voor Marie? Voor Marie gaat er enorm veel nuance verloren tijdens het kijken naar een film of een documentaire. Bij veel films worden closed captions aangeboden, maar die zijn zo neutraal als het maar kan.

Ik heb besloten om er zo goed mogelijk voor te zorgen dat Marie op een voor haar fijne manier een podcast kan lezen, zonder dat daar nuance aan verloren gaat.

## User scenario
**Wie is de gebruiker?**

De applicatie wordt gemaakt voor Marie. Marie is Doof en kan dus geen podcasts luisteren. Ze wilt podcasts kunnen lezen zonder dat de nuance van de gesprekken verloren gaat.

**Wat wilt de gebruiker op mijn applicatie?**

Ik heb ervoor gekozen om een applicatie te maken waarbij de podcast getranscribeerd wordt, met daarbij de nuances van het gesprek. Het is de bedoeling dat de gebruiker een podcast naar keuze kan lezen, met daarbij informatie over de sprekers en een inhoudsopgave van de onderwerpen van de podcast.

**Hoe gaat de gebruiker haar doel bereiken?**

De gebruiker kan op start klikken, waarna de podcast alinea voor alinea tevoorschijn komt. In de alinea's staat de toon van de spreker en worden de stiltes en nadrukken weergegeven. 

**Waarom komt de gebruiker naar mijn website?**

De gebruiker gebruikt mijn applicatie omdat deze speciaal voor haar gemaakt is, omdat er nog geen andere platformen zijn zoals deze.

## Exclusive design principles

### Study situation
Studie Situation houdt in dat je onderzoek doet naar je gebruiker. Wat kan de gebruiker wel of niet? 

Marie is Doof. Alles moet daarom gebeuren zonder geluid. Ik heb een aantal vragen gesteld om meer over haar te weten te komen en om te ontdekken wat ze prettig vind en wat niet. Als er een gesprek is getranscribeerd, is het lastig om nuances te zien. Marie wilt dit graag kunnen zien in de podcasts. Ze wilt graag de emoties in de podcast kunnen zien. Marie kan Nederlands en Engels lezen, dus dit is geen probleem. Maar dit is niet voor iedereen die Doof is het geval. 

### Ignore conventions
Ignore conventions betekend dat de gebruikelijke ontwerp conventions genegeerd moeten worden, omdat deze conventions gemaakt zijn voor mensen zonder een hinderlijke beperking. Daarom is het belangrijk om rekening te houden met ontwerpen voor de doelgroep.

Een horend persoon zou gewoon naar de podcast kunnen luisteren, maar Marie kan dit niet. Daarom heb wordt de podcast getranscribeerd. De nuances en emoties in de podcast gaan verloren in platte tekst. Dit heb ik proberen te laten zien door de emotie van de alinea te laten zien en door de stiltes en nadrukken te highlighten.

### Prioritise identity
Prioritise identity betekent dat het ontwerp speciaal voor de wensen van de gebruiker gemaakt is. Daarom heb ik een aantal persoonlijke dingen aan de applicatie toegevoegd. Marie is een designer, dus ik heb een design podcast uitgekozen voor de opdracht. Haar favoriete kleur is geel, dus de website heeft verschillende kleuren geel. 

Een aantal andere dingen die Marie leuk vind zijn: 
- Koken
- Boeken lezen
- Wijn drinken
- Kitesurfen
- Sporten

Marie heeft aangegeven dat ze de podcast het meest op haar telefoon zou lezen. Daarom heb ik ervoor gezorgd dat de applicatie volledig responsive is, en er geen informatie mist op mobiel. Ook heeft ze gezegd dat ze heel snel leest, daarom heb ik een knop toegevoegd waarmee ze de snelheid van de tekst aan kan passen.

### Add nonsense
Add nonsense betekent het toevoegen van dingen die niet gebruikelijk zijn op websites. Hierdoor wordt het ontwerp méér dan alleen het functionele. Er kunnen nieuwe interessante ideeën opkomen door nonsense toe te passen.

Ik heb dit in eerdere versies toegepast, door bijvoorbeeld lettertypes te gebruiken waarmee de emotie werd aangegeven, maar Marie vond dit te veel afleiden. Daar heb ik dus niet voor gekozen.

## Testen 🧪

Ik heb in totaal drie keer getest met Marie. Hierbij liet ik elke keer mijn concept zien, waarna Marie door het concept heen liep. Tijdens en na het testen zei ze wat ze goed vond en wat ze niet goed vond. 

### Concept voor eerste test
Een website waarbij er met behulp van JavaScript de podcast live wordt getranscribeerd. Hierdoor kan de snelheid van de podcast goed worden aangepast en kan elke podcast gekozen worden.

Dit voorbeeld is hier te zien: https://tomvandenberg11.github.io/VisualCast/transcription/

### Bevindingen eerste test
Bij de eerste test hebben we Marie vooral beter leren kennen. Zo hebben we gehoord wat ze doet in het daglijks leven en welke hobbies ze heeft. 
Daarna hebben we veel tips gehad over hoe we verder konden. 

De verschillende tips waren bijvoorbeeld:

- Verdriet, sarcasme, voice-over zijn lastig om te zien
- Christine Sun Kim maakt goede ondertiteling met veel emotie, dit kan als voorbeeld gebruikt worden
- Zorg dat er te zien is met welke emoties er worden gesproken en met welke snelheid er iets gezegd wordt.
- Het is fijn om in films te horen welke omgevingsgeluiden er zijn. Dit mag meer specifieker, omdat het geluid in de film altijd een nut heeft.
- Laat goed zien wie er aan het woord is en wat de emotie van het gesprek is.
- Onderzoek naar ondertitelingen voor doven → BBC heeft goede richtlijnen.


Ideeën voor concept:

- Snelheid van de podcast kunnen aanpassen? 
- Sferen, stijlen. Bijvoorbeeld verschillende lettertypen. 
- Laat stiltes in zinnen ook zien. 
- Laten zien waar de spreker is in de tekst, bijvoorbeeld met een kleur. → Speel met de stijlen en vormgeving. 
- Beter teveel dan te weinig!


Dit concept heb ik na de eerste test afgeschoten omdat de transcriptie niet goed werkt. Ik kan hierbij ook niet laten zien welk persoon er aan het woord is. Na de eerste test kwam ik er ook achter dat de opdracht geen werkende applicatie hoeft te zijn, maar meer een concept, uitgewerkt in code.

Daarom heb ik er dus voor gekozen om een ander concept te maken waarbij meer rekening wordt gehouden met de belangrijke punten van Marie, bijvoorbeeld door de nuances meer naar boven te laten komen.


### Concept voor tweede test
Voor de tweede test heb ik een ander ontwerp gemaakt. Hierbij is beter te zien welk persoon van de podcast welke tekst zegt en hoe ver ze zijn in het verhaal.

SCREENSHOT

### Bevindingen tweede test
Misschien het concept animeren door de tekst te laten bewegen. Ook is het niet nodig om steeds de foto's van de sprekers elke keer in te voegen, 1 keer is genoeg.
Ook meer spelen met lettertypes en kleuren in de tekst. Nu is het gewoon platte tekst, waardoor de emoties niet te zien zijn. Misschien een kleine intro van de podcast toevoegen, waar de podcast over gaat.
Eventuele achtergrondgeluiden erbij betrekken. Stiltes in gesprekken ook goed weergeven!

Misschien klein stukje uitwerken waarbij de werking echt te zien is.
Nederlandse podcast uitkiezen misschien.

Laten zien aan het begin welke personen er in de podcast zitten met daarbij de eigenschappen van de stemmen.
Mobile first! Meer nuances geven, bijvoorbeeld met laten zien wanneer er stiltes zijn en bijvoorbeeld met accenten. 

### Concept derde test
Voor deze test had ik helaas niet heel veel tijd om aanpassingen te doen. Het laatste gesprek met Marie was op vrijdag, dus we hebben geen HCD meer gehad na de laatste test.

Ik heb nog een aantal kleine dingen aangepast. Zo zei Marie in de laatste test dat ze vooral op haar telefoon podcasts las. Daarom heb ik de pagina omgebouwd naar mobile, door alle informatie ook op mobiel te tonen.
Ze zei ook dat ze niet elke keer de foto van de sprekers hoeft te zien, deze heb ik dus weggehaald, zodat er minder afleiding is.

SCREENSHOT

### Bevindingen derde test
Zo vond het nieuwe tabje met de secundaire informatie een goede oplossing en vond het dus goed dat de applicatie ook mobiel ondersteund wordt. Ze wilde alleen wel meerdere nuances zien, met daarin de emoties en de stiltes. Ook ga ik nog toevoegen dat de eigenschappen van de stemmen van de sprekers te zien zijn.
Misschien de tekst animeren. Lettertype veranderen naar een meer leesbaarder lettertype en spelen met de lettertypes en kleuren naar emoties.

Na de test heb ik meerdere nuances, zoals de emotie, stilte en nadruk, laten zien in het ontwerp. Ook is de applicatie nu geanimeerd, zodat echt te zien is hoe het in z'mn werk gaat.

## Uiteindelijke concept 💡
Het concept wat ik uiteindelijk heb gemaakt is een transcriptie van een podcast. De podcast wordt hierbij op snelheid naar keuze laten zien. De nuances in de gesprekken worden laten zien. Ook is er secundaire informatie te zien, zoals eigenschappen over de sprekers en een inhoudsopgave. 

Het concept is [hier](https://tomvandenberg11.github.io/VisualCast/ "VisualCast") te zien

## Bronnen:
- https://uxplanet.org/podcasts-for-the-deaf-d4d9b5f3ce99
- https://www.temi.com/blog/podcast-transcription/
- https://www.thisamericanlife.org/542/transcript
- https://exclusive-design.vasilis.nl/
- https://www.getfeedback.com/resources/ux/how-user-scenarios-help-to-improve-your-ux/

## Licence 👨🏻‍⚖️

Dit project is voorzien van een MIT licence. Zie de pagina LICENCE voor meer informatie.

## Credits 📣

Ik wil graag als eerste de docenten bedanken voor al hun inzet, uitleg en lesstof. Ten tweede wil ik mijn supportgroepje bedanken voor de mentale en functionele support. Ten derde wil ik Stackoverflow bedanken voor al hun antwoorden op mijn vragen.
