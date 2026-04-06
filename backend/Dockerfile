FROM eclipse-temurin:17-jdk-jammy

WORKDIR /app

COPY . .

WORKDIR /app/backend

RUN chmod +x ./mvnw

RUN ./mvnw clean install -DskipTests

EXPOSE 8080

CMD ["java", "-jar", "target/backend-0.0.1-SNAPSHOT.jar"]
