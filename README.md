# Expo Native Starter Kit

## Overview

A starting point to help you set up your project quickly and use the common components provided by [react-native-reusables](https://rnr-docs.vercel.app/). This starter template is designed to help you quickly set up a React Native project with a focus on performance, reusability, and a seamless development experience. Built to resemble the Shadcn component library, using its theme colors, this starter comes with Dark/Light/System Theme and pre-configured with Expo, Redux Toolkit, Redux Persist and MMKV storage for ultra-fast performance. The goal is to create a 100% custom-based app that is flexible and easily customizable on mobile, making it highly easy to extend. This starter kit sets you ready to go, and comes with most libraries required to build a mobile app like expo linear gradient, expo local authentication with a ready made hook for biometric authentication.

## Features

1. NativeWind v4
2. A dedicated theme file and hook for colours and preferences, maintaining a consistent styling even where Nativewind dont work.

-  Dark and light mode
-  Persistant mode

3. High-Performance Storage with MMKV:

-  Leverage MMKV for ultra-fast storage, significantly outperforming Async Storage by up to 30x.

4. Common components from `react-native-reusable`

-  ThemeToggle, Avatar, Button, Card, Progress, Text, Tooltip

5. Beautiful Code Formatting:

-  Enforce consistent code styling with Prettier. Run "npm run prettier" to automatically format your code. For more details, check out Prettier.

<img src="https://github.com/mrzachnugent/react-native-reusables/assets/63797719/42c94108-38a7-498b-9c70-18640420f1bc"
     alt="starter-base-template"
     style="width:270px;" />

## Installation

To get started with this template:

-  Clone the Repository:

```bash
git clone https://github.com/your-username/your-repo-name.git
cd expo-starter-kit
```

-  Install Dependencies:

```bash
      npm install
```

-  Set Up Development Build: Although for the Redux Persist we highly recommend MMKV for [storage](services/root-reducer.ts), which does not work for Expo Go. Dont't worry, it defaults to Async Storage, but make sure to revert to MMKV for production or development build services. If You will need to set up an Expo Development Build. Follow the [Expo documentation](https://docs.expo.dev/develop/development-builds/create-a-build/) to create a build.

-  Run the App:

```bash
   npm install
   npm start
```

## Switching to Async Storage

If you prefer not to use MMKV, you can easily switch to Async Storage:

-  Install Async Storage:

```bash
   npm i @react-native-async-storage/async-storage
```

-  Update the Root Reducer: Replace the MMKV storage import with Async Storage:

```bash
   import AsyncStorage from '@react-native-async-storage/async-storage';
```

-  Remove MMKV: Feel free to delete the MMKV storage file from the lib directory.

## Contributing

Contributions are welcome! If you have suggestions for improvements or find any issues, feel free to open a pull request or submit an issue on GitHub.

## License

This project is licensed under the MIT License - see the [LICENSE](/LICENSE) file for details.
