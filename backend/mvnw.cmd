@ECHO OFF

REM Licensed to the Apache Software Foundation (ASF) under one
REM or more contributor license agreements.  See the NOTICE file
REM distributed with this work for additional information
REM regarding copyright ownership.  The ASF licenses this file
REM to you under the Apache License, Version 2.0 (the
REM "License"); you may not use this file except in compliance
REM with the License.  You may obtain a copy of the License at
REM
REM    http://www.apache.org/licenses/LICENSE-2.0
REM
REM Unless required by applicable law or agreed to in writing,
REM software distributed under the License is distributed on an
REM "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
REM KIND, either express or implied.  See the License for the
REM specific language governing permissions and limitations
REM under the License.

SETLOCAL

SET "MAVEN_CMD_LINE_ARGS=%*"

IF NOT ""%1"" == """-D"*""" GOTO check_m2_home

    SET MAVEN_PROJECT_DIR_RAW=%1
    SHIFT
    SET "MAVEN_CMD_LINE_ARGS=%*"

:check_m2_home

IF EXIST "%M2_HOME%\bin\mvn.cmd" GOTO check_maven_home

SET "M2_DEFAULT_HOME=%ProgramFiles%\apache-maven-3.0.5"
IF EXIST "%M2_DEFAULT_HOME%\bin\mvn.cmd" (
  ECHO Using M2_HOME: %M2_DEFAULT_HOME%
  SET "M2_HOME=%M2_DEFAULT_HOME%"
)

:check_maven_home

IF EXIST "%MAVEN_HOME%\bin\mvn.cmd" GOTO run_maven

IF EXIST "%M2_HOME%\bin\mvn.cmd" (
  ECHO Using MAVEN_HOME: %M2_HOME%
  SET "MAVEN_HOME=%M2_HOME%"
)

:run_maven

IF NOT EXIST "%MAVEN_HOME%\bin\mvn.cmd" GOTO error

SET "MAVEN_OPTS=%MAVEN_OPTS% -Dmaven.multiModuleProjectDirectory=%MAVEN_PROJECT_DIR_RAW%"

"%MAVEN_HOME%\bin\mvn.cmd" %MAVEN_CMD_LINE_ARGS%
IF ERRORLEVEL 1 GOTO error

GOTO end

:error

ECHO The MAVEN_HOME environment variable is not defined correctly.
ECHO This environment variable is needed to run this program.
ECHO NB: JAVA_HOME should be defined also.

:end

ENDLOCAL
