
** Create Custom Template **

Step 1: Create a new project, make sure to keep the name "ProjectName"
```
% npx react-native init ProjectName
```

Step 2: Add packages & modify the project that needs to be included in the template

Step 3: Download or clone the repository on https://github.com/Esemesek/react-native-new-template

Step 4: Create a new folder and give whatever name you like, after your template repository in my case react-native-template-gpt then rename your ProjectName folder to the template and then move it over to the newly created folder

Step 5: Copy package.json, script.js, and template.config.js from the react-native-new-template folder over to your newly created react-native-template-gpt folder.

Step 6: In the react-native-template-gpt folder modify the contents of package.json with your details like this

```
{
  "name": "react-native-template-gpt",
  "version": "0.0.1",
  "description": "React Native Template",
  "repository": "git@github.com:jigs611989/react-native-template-gpt.git",
  "author": "Jignesh Patel<jigs.patelit@gmail.com>",
  "license": "MIT"
}
```
Step 7: At the react-native-template-gpt folder, open a terminal and you can now push all of the code to the git repository using git commands.

```
git init 
git add . 
git commit -m "first commit"
git remote add origin git@github.com-jigs:jigs611989/react-native-template-gpt.git
git branch -M main
git push -u origin main
```


Step 8: Create a project using the template
```
% npx react-native@latest init SomeApp --template https://github.com/jigs611989/react-native-template-gpt.git
```
