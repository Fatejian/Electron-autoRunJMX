# Electron-autoRunJMX

[![License: MIT](https://img.shields.io/github/license/Fatejian/Electron-autoRunJMX.svg)](https://github.com/Fatejian/Electron-autoRunJMX/blob/master/LICENSE)

### 功能特点

- **图形化界面**：提供直观的图形化界面，方便用户操作。
- **批量执行 JMX 文件**：支持批量选择和执行多个 JMX 文件。
- **实时日志输出**：在应用中实时显示 JMeter 的输出日志。
- **任务管理**：支持任务的启动、停止和查看状态。
- **配置管理**：允许用户配置 JMeter 的参数和环境变量。

### 快速开始

#### 先决条件

- **Node.js**：确保已安装 Node.js（建议版本 14.x 或更高）。
- **npm**：Node.js 包管理器。
- **Git**：用于克隆项目仓库。
- **JMeter**：确保已安装 Apache JMeter，并将其路径添加到系统环境变量中。

#### 安装

1. **克隆仓库**：
   ```sh
   git clone https://github.com/Fatejian/Electron-autoRunJMX.git
   cd Electron-autoRunJMX
   ```

2. **安装依赖**：
   ```sh
   npm install
   ```

3. **启动应用**：
   ```sh
   npm start
   ```

#### 构建

要构建应用的可执行文件，可以使用以下命令：

1. **构建 Windows 版本**：
   ```sh
   npm run build:win
   ```

2. **构建 macOS 版本**：
   ```sh
   npm run build:mac
   ```

3. **构建 Linux 版本**：
   ```sh
   npm run build:linux
   ```

### 使用说明

1. **打开应用**：
   启动应用后，您将看到主界面。

2. **选择 JMX 文件**：
   点击“选择 JMX 文件”按钮，选择一个或多个 JMX 文件。

3. **配置参数**：
   在“配置参数”选项卡中，您可以设置 JMeter 的参数和环境变量。

4. **启动任务**：
   点击“启动任务”按钮，开始执行选中的 JMX 文件。执行过程中的日志将在“日志输出”选项卡中显示。

5. **停止任务**：
   如果需要停止正在运行的任务，可以点击“停止任务”按钮。

### JMX 文件执行前置条件

为了确保 JMX 文件能够顺利执行，请确保以下条件已满足：

1. **安装 JMeter**：
   - 下载并安装 Apache JMeter：[下载链接](https://jmeter.apache.org/download_jmeter.cgi)
   - 将 JMeter 的安装路径添加到系统环境变量中。例如，在 Windows 上，可以将 `C:\path\to\jmeter\bin` 添加到 `PATH` 环境变量中。

2. **准备 JMX 文件**：
   - 确保 JMX 文件格式正确，并且包含所有必要的测试计划和配置。
   - 如果 JMX 文件依赖于外部数据文件（如 CSV 文件），请确保这些文件的路径正确无误。

3. **配置 JMeter 参数**：
   - 在应用的“配置参数”选项卡中，设置 JMeter 的参数和环境变量。例如，可以设置 JMeter 的 JVM 参数、线程数等。

### 配置文件

应用的主要配置信息位于 `package.json` 文件中。以下是一个示例配置：

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

您可以根据需要修改 `package.json` 文件中的配置信息。

### 贡献

欢迎贡献代码和提出改进建议！请遵循以下步骤：

1. **Fork 仓库**：
   ```sh
   git clone https://github.com/<your-username>/Electron-autoRunJMX.git
   ```

2. **创建分支**：
   ```sh
   git checkout -b feature/your-feature
   ```

3. **提交更改**：
   ```sh
   git add .
   git commit -m "Add your feature"
   git push origin feature/your-feature
   ```

4. **提交 Pull Request**：
   在 GitHub 上提交 Pull Request。

### 许可证

本项目采用 MIT 许可证，详情请参见 [LICENSE](LICENSE) 文件。

### 联系方式

如有任何问题或建议，请通过以下方式联系作者：

- **GitHub Issues**：[https://github.com/Fatejian/Electron-autoRunJMX/issues](https://github.com/Fatejian/Electron-autoRunJMX/issues)
- **Email**：[your-email@example.com](mailto:your-email@example.com)

# README.md

- en [English](README.md)
- zh_CN [简体中文](readme/README.zh_CN.md)