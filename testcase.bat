@echo off
setlocal

:: 获取脚本所在目录
set SCRIPT_DIR=%~dp0

:: 设置 JMeter 脚本路径和脚本文件路径
set JMETER_SCRIPT=%SCRIPT_DIR%testcase.jmx

:: 获取当前日期和时间
for /f "tokens=2 delims==" %%i in ('wmic os get localdatetime /value') do set datetime=%%i
set DATESTAMP=%datetime:~0,4%-%datetime:~4,2%-%datetime:~6,2%
set TIMESTAMP=%datetime:~8,2%-%datetime:~10,2%-%datetime:~12,2%

:: 设置输出目录
set OUTPUT_DIR=%SCRIPT_DIR%logs\testcase\%DATESTAMP%_%TIMESTAMP%

:: 创建输出目录（如果不存在）
if not exist "%OUTPUT_DIR%" mkdir "%OUTPUT_DIR%"

:: 设置输出文件名
set JTL_FILE=%OUTPUT_DIR%\result.jtl

:: 执行 JMeter 脚本
JMeter -n -t "%JMETER_SCRIPT%" -l "%JTL_FILE%"

endlocal

exit