# SE-leetcode
Eine App, die es ermöglicht aus verschiedenen Programmieraufgaben zufällig eine zu bearbeiten.
Verwendet werden dazu:
        - ein Javascript frontend mit express js
        - ein Java Spring Backend mit mongoDB
        - ein Python script, welches Aufgaben in Python testet
# Docker
Die einzelnen Komponenten laufen auf der bw-cloud und müssen via docker gestartet werden.
die Commands sind folgende:
        MongoDB: docker run -d --name mongo-on-docker -p 27017:27017 mongo
        frontend: docker run -d --name frontend-on-docker -p 5000:5000 quizify-frontend-image
        Java Spring backend: docker run -d --name springapplication-on-docker -p 8080:8080 myfirst_docker_image
Die Api wäre erreichbar mit der floating IP, der Instanz als Hostname und angehängt wird dann 
"/code/v1"

# Architekturherrausforderungen
Scalability und Availability sind hier in erster Linie von Bedeutung, um den Mehrnutzerbetrieb zu ermöglichen.
Elastizität ist relevant, wenn bei Programmierwettbewerben viele Nutzer auf einmal zugreifen.
Performance spielt bei unseren Nutzern nicht eine so wichtige Rolle

-> Wir haben uns für eine MicroService Architektur entschieden

# Probleme
Vermutung: Aufgrund den Berechtigungen der bw-cloud, kann das Spring Backend nicht auf die Datenbank zugreifen und dadurch war es nicht möglich die API zu testen.

Zusätzlich: Der Zeitraum, den wir aufgrund des vollgepackten Semesters für dieses Projekt zur Verfügung hatten, war nicht ausreichend, um ein Projekt dieses Umfangs mit unseren Wissensständen fertig zu stellen.
