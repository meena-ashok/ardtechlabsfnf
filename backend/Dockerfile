FROM eclipse-temurin:17-jdk-jammy

WORKDIR /app

COPY . .

RUN chmod +x backend/mvnw

RUN backend/mvnw -f backend/pom.xml clean install -DskipTests

EXPOSE 8080

CMD ["java", "-jar", "backend/target/backend-0.0.1-SNAPSHOT.jar"]
