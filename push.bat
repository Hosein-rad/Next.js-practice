@echo off
set msg=%1
git add .
git commit -m "%msg%"
git push