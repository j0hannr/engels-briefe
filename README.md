# Engelsbriefe

### Repo für das Interface der Engels Ausstellung
`https://engels.arrenberg.studio/`


## Table of Contents
* [Requirements](#requirements)
* [React Commands](#react-commands)
* [Git Commands](#git-commands) 
    * [Set Up](#set-up)
    * [Check Master](#check-master)
* [Briefe](#briefe)
* [Additional Testing](#additional-testing)
* [Markdown Styles](#markdown-styles)
* [Pages](#pages)
* [Tools](#tools)
* [Contact](#contact)

## Requirements
```bash
Nodejs # nodejs needs to be installed seperately 
npm # will be installed in the Git setup process
```

## React Commands
```bash
# Start localhost dev server
npm run dev
# Start localhost server
npm run build
npm run start
# on Windows
npm run start_windows
```

## Git Commands

### set up 
```bash
git init
git clone https://github.com/j0hannr/engels-briefe.git
# make sure you are always in the *engels-briefe* directory to execute git and nodejs
cd engels-briefe
npm install
```
### check master
```bash
git pull origin master
```
### create branch
```bash
git checkout -b <BRANCH_NAME>
```
### check branch
```bash
git fetch
git checkout <BRANCH_NAME>
```
### update branch
```bash
# update branch internally
git pull 
# update from master
git merge origin/master
```
### trash local changes
```bash
# particular file
git checkout -- <FILENAME>
# all files
git checkout -- .
```

### push files (in branch)
```bash
git add . 
# or <FILENAME OR PATH>
git commit -m "<comment>"
git push
# or git push --set-upstream origin <BRANCH_NAME> 
```
### merge and update branch in master
*you need to push all changes in branch and switch to master*
```bash
git checkout origin/master
git merge <BRANCH_NAME>
```

## Briefe

Nummer *ID* | Author | Datum | Ort | Vorhanden | Exportiert | Fertig | Audio | Kommentar 
--- | --- | --- | --- | --- | --- | --- | --- | --- 
001 | Louise Engels, geb. Noot | 1791-01-05 | Hagen | :white_check_mark: | | | | falsche audio datei |
004 | Friedrich Christian Hoffmann | 1791-05-12 | Düsseldorf | :white_check_mark: |
021 | Johann Caspar Engels | 1791-09-09| Barmen | :white_check_mark: |
022 | Louise Engels, geb. Noot | 1791-09-10 | Ruhrort | :white_check_mark: |
029 | Louise Engels, geb. Noot | 1792-10-25 | Barmen | :white_check_mark:|
068 | Johann Caspar Engels | 1813-07-04 | Barmen | :white_check_mark:|
071 | Johann Caspar Engels | 1813-11-12 | Barmen | :white_check_mark: |
075 | Johann Caspar Engels | 1814-02-03 | Barmen | :white_check_mark: |
130 | Friedrich Engels sen. | 1816-09-21 | Barmen | :white_check_mark: |
169 | Friedrich Engels sen. | 1818-07-03/04 | Barmen | :white_check_mark: |
235a | Friedrich Engels sen. | 1820-12-01 | Barmen | :white_check_mark: | | | | Schlechte Scan Qualität!
255 | Friedrich Engels sen. | 1822-07-09 | Barmen | :white_check_mark: |
265 | Friedrich Engels sen. | 1823-05-31 | Barmen | :white_check_mark: |
284 | Gerhard Bernhard van Haar | 1826-04-20 | Hamm | :white_check_mark: |
294 | Friedrich Engels sen. | 1827-08-16 | Paris | :white_check_mark: |
306 | Friedrich Engels sen. | 1838-07-26 | London | :white_check_mark: |
307 | Friedrich Engels sen. | 1838-08-11 | Bremen | :white_check_mark: | | | | Fehlerhafte Benennung?
341 | Friedrich Engels sen. | 1858-09-10 | Manchester | :white_check_mark: | | | | Schlechte Scan Qualität!

## Additional Testing

* Matomo https://www.npmjs.com/package/@datapunt/matomo-tracker-react
* LogRocket
* Service Workers

## Markdown Styles

*Hello* `World` **nicely**
:warning:   :white_check_mark:  :x:

## Pages

Name | Dir | Kommentar 
--- | --- | --- 
Index | / | landing page link to `briefe`
briefe | / | main_menu
themen | / | main_menu
personen | / | main_menu
[brief] | /brief | sub_menu + brief ansichten
[person] | /person | sub_menu
[thema] | /thema | sub_menu

## Tools

#### Code review
https://deepscan.io/dashboard <br>
https://www.codefactor.io/ <br>
https://codecov.io
#### Image optimization 
https://imgbot.net/app/
#### Html to JSX
https://magic.reactjs.net/htmltojsx.htm 
*remove all tags including `html` and `body`*

## Contact

`Studio Arrenberg`
hallo@arrenberg.studio