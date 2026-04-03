# Step 1: Build the application
FROM maven:3.8.5-openjdk-17 AS build
COPY . .
RUN mvn clean package -DskipTests

# Step 2: Run the application
FROM openjdk:17-jdk-slim
COPY --from=build /target/*.jar app.jar
# The -Xmx256m limit is CRITICAL for Render's 512MB free tier
ENTRYPOINT ["java", "-Xmx256m", "-jar", "/app.jar"]
