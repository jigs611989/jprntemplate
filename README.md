
## Usage
Create a new react-native app using this template to speed up the initial project setup.

```
% npx react-native@latest init SomeApp --template https://github.com/jigs611989/react-native-template-gpt.git
```

## Tech Stack
The following dependencies will be installed. Make sure to update some required credentials changes as mentioned in the following section.

| Library           | Category             | Version | Description                                    |
| ----------------- | -------------------- | ------- | ---------------------------------------------- |
| React Native      | Mobile Framework     | v0.73   | The best cross-platform mobile framework       |
| React             | UI Framework         | v18     | The most popular UI framework in the world     |
| TypeScript        | Language             | v5      | Static typechecking                            |
| React Navigation  | Navigation           | v6      | Performant and consistent navigation framework |
| Redux Toolkit     | State Management     | v2      | Redux & React-Redux                            |
| RN Reanimated     | Animations           | v3      | Beautiful and performant animations            |
| AsyncStorage      | Persistence          | v1      | State persistence                              |
| axios             | REST client          | v1      | Communicate with back-end                      |
| Reactotron RN     | Inspector/Debugger   | v3      | JS debugging                                   |
| Jest              | Test Runner          | v26     | Standard test runner for JS apps               |
| date-fns          | Date library         | v2      | Excellent date library                         |
| Device Info       | Utility              | v10     | Device Information for React Native.           |
| Fast Image        | Image Cache          | v8      | FastImage is an Image replacement              |
| sentry            | Remote Debugging     | v5      | Crash logs, Remote logs, etc                   |


The template also includes basic components like the Button & Input [component library](./docs/boilerplate/app/components/Components.md)

// TODO:
- Add Splash Screen & AppIcon
- Update Theme (add light & dark mode)
- Add Localization
- Update Documentation
- Add Rest API call example
- Add Common components

## Update Sentry
- Step 1: Create Organization & Project in sentry.io
- Step 2: Rename .env.sample to .env
- Step 3: Change the SENTRY_DSN value 
- Step 4: Update credentials in ios/sentry.properties and android/sentry.properties
- Step 3 & Step 4 values can be found on the sentry.io setting page.

## Make sure to upgrade pro guard rules
In File: proguard-rules.pro make sure to update the package name

# for react-native-config
-keep class <Your BundleName>.BuildConfig { *; }


## Create Your Custom ReactNative Template

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
