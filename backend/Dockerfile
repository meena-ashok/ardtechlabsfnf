# Step 1: Build the application using Maven
FROM maven:3.8.5-eclipse-temurin-17 AS build
COPY . .
RUN mvn clean package -DskipTests

# Step 2: Run the application using a stable JDK image
FROM eclipse-temurin:17-jdk-jammy
COPY --from=build /target/*.jar app.jar

# Explicitly tell Spring Boot to listen on the port Render provides
ENV PORT=8080
EXPOSE 8080

# The -Xmx256m limit prevents Render from killing the process for high RAM usage
ENTRYPOINT ["java", "-Xmx256m", "-jar", "/app.jar"]
