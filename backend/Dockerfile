FROM eclipse-temurin:17-jdk-jammy

WORKDIR /app

# Copy the Maven wrapper files
COPY mvnw .
COPY .mvn ./.mvn

# Copy the project's POM file
COPY pom.xml .

# Copy the source code
COPY src ./src

# Make the Maven wrapper executable
RUN chmod +x mvnw

# Build the application using the Maven wrapper
RUN ./mvnw clean install -DskipTests

EXPOSE 8080

# Run the application
CMD ["java", "-jar", "target/backend-0.0.1-SNAPSHOT.jar"]
