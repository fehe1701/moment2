# Moment 2


Syftet med automatiseringsprocessen är att göra det enklare att redigera och uppdatera filer. Det har även en stor inverkan på filstorlek och tar bort de onödiga delarna vid publicering av en webbplats.

Jag har använt mig av gulp-concat för att konkatenera JavaScript och gulp-concat-css för att konkatenera CSS. För att minimera dessa två använde jag mig av gulp-uglify. Jag använde mig av dessa för att de kändes mest logiska för mitt syfte och enkla att förstå. Koden har jag skrivit i VSC och kört mina kommandon genom terminalen där.

Vid kloning av mina filer får man src-mappen där alla arbetsfiler ligger. Dessa är inte ihopkopplade som det är eftersom länkarna till JavaScript och CSS i HTML-filen är de länkar som skapas när arbetsfilerna skickas till pub-mappen som är den mappen där filerna hamnar när de är färdiga. Min funktion "watcher" är den som håller utkik efter när något ändras i src-mappen och uppdaterar dessa på en gång i pub-mappen.

För att starta systemet behövs bara "gulp" skrivas i terminalen för att starta förflyttningen av filerna från src till pub, det startar även watcher-funktionen som gör att sidan uppdateras allt efter koden redigeras.
