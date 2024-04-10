@echo off
color 57
echo Hey, do you love me(only answer is yes or no )
set /p love=
if %love%==yes goto love
if %love%==no goto hate
:love
echo I love you too...
echo meet you soon:)
pause
exit
:hate
echo But I Love You...hahahahahahaha
echo you are hacked..
echo your PC will crash in 5 seconds
timeout 5
shutdown -s -t 100