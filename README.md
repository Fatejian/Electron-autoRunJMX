# Electron-autoRunJMX

[![License: MIT](https://img.shields.io/github/license/Fatejian/Electron-autoRunJMX.svg)](https://github.com/Fatejian/Electron-autoRunJMX/blob/master/LICENSE)

### Features

- **Graphical User Interface (GUI)**: Provides an intuitive GUI for easy operation.
- **Batch Execution of JMX Files**: Supports batch selection and execution of multiple JMX files.
- **Real-time Log Output**: Displays real-time logs of JMeter's output in the application.
- **Task Management**: Supports starting, stopping, and viewing the status of tasks.
- **Configuration Management**: Allows users to configure JMeter parameters and environment variables.

### Quick Start

#### Prerequisites

- **Node.js**: Ensure Node.js is installed (recommended version 14.x or higher).
- **npm**: Node.js package manager.
- **Git**: For cloning the project repository.
- **JMeter**: Ensure Apache JMeter is installed and its path is added to the system environment variables.

#### Installation

1. **Clone the Repository**:
   ```sh
   git clone https://github.com/Fatejian/Electron-autoRunJMX.git
   cd Electron-autoRunJMX
   ```

2. **Install Dependencies**:
   ```sh
   npm install
   ```

3. **Start the Application**:
   ```sh
   npm start
   ```

#### Building

To build executable files for the application, use the following commands:

1. **Build Windows Version**:
   ```sh
   npm run build:win
   ```

2. **Build macOS Version**:
   ```sh
   npm run build:mac
   ```

3. **Build Linux Version**:
   ```sh
   npm run build:linux
   ```

### Usage Instructions

1. **Open the Application**:
   After starting the application, you will see the main interface.

2. **Select JMX Files**:
   Click the "Select JMX Files" button to choose one or more JMX files.

3. **Configure Parameters**:
   In the "Configure Parameters" tab, you can set JMeter parameters and environment variables.

4. **Start Task**:
   Click the "Start Task" button to begin executing the selected JMX files. The logs during execution will be displayed in the "Log Output" tab.

5. **Stop Task**:
   If you need to stop a running task, click the "Stop Task" button.

### Pre-requisites for JMX File Execution

To ensure JMX files execute successfully, make sure the following conditions are met:

1. **Install JMeter**:
   - Download and install Apache JMeter: [Download Link](https://jmeter.apache.org/download_jmeter.cgi)
   - Add the JMeter installation path to the system environment variables. For example, on Windows, add `C:\path\to\jmeter\bin` to the `PATH` environment variable.

2. **Prepare JMX Files**:
   - Ensure JMX files are correctly formatted and contain all necessary test plans and configurations.
   - If JMX files depend on external data files (e.g., CSV files), ensure the paths to these files are correct.

3. **Configure JMeter Parameters**:
   - In the "Configure Parameters" tab, set JMeter parameters and environment variables. For example, you can set JMeter's JVM parameters and thread count.

### Configuration File

The main configuration information for the application is located in the `package.json` file. Here is an example configuration:

```json
{
  "name": "electron-auto-run-jmx",
  "version": "1.0.0",
  "description": "A desktop application to automate the execution of JMeter test scripts.",
  "main": "main.js",
  "scripts": {
    "start": "electron .",
    "build:win": "electron-builder build --win",
    "build:mac": "electron-builder build --mac",
    "build:linux": "electron-builder build --linux"
  },
  "author": "Your Name",
  "license": "MIT",
  "dependencies": {
    "electron": "^13.1.7",
    "child_process": "^1.0.2",
    "fs": "^0.0.1-security",
    "path": "^0.12.7"
  },
  "devDependencies": {
    "electron-builder": "^22.14.13"
  }
}
```

You can modify the configuration information in the `package.json` file as needed.

### Contribution

Contributions and suggestions for improvement are welcome! Please follow these steps:

1. **Fork the Repository**:
   ```sh
   git clone https://github.com/<your-username>/Electron-autoRunJMX.git
   ```

2. **Create a Branch**:
   ```sh
   git checkout -b feature/your-feature
   ```

3. **Commit Changes**:
   ```sh
   git add .
   git commit -m "Add your feature"
   git push origin feature/your-feature
   ```

4. **Submit a Pull Request**:
   Submit a Pull Request on GitHub.

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

### Contact

For any questions or suggestions, please contact the author via the following methods:

- **GitHub Issues**: [https://github.com/Fatejian/Electron-autoRunJMX/issues](https://github.com/Fatejian/Electron-autoRunJMX/issues)
- **Email**: [your-email@example.com](mailto:your-email@example.com)

# README.md

- en [English](README.md)
- zh_CN [简体中文](readme/README.zh_CN.md)