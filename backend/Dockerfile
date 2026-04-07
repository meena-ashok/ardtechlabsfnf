FROM eclipse-temurin:17-jdk-jammy

WORKDIR /app

# Copy the project files
COPY pom.xml .
COPY src ./src

# Download and install the Maven wrapper
RUN apt-get update && apt-get install -y maven

# Build the application
RUN mvn clean install -DskipTests

EXPOSE 8080

# Run the application
CMD ["java", "-jar", "target/backend-0.0.1-SNAPSHOT.jar"]
