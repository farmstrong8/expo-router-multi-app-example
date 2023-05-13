# Multi-Tenant/Multi-App Example using Expo Router

This repository is an example of how to use Expo Router to build a multi-tenant or multi-app mobile application.

![video](./docs/example-video.mov)

## Introduction

[Expo Router](https://expo.github.io/router/docs) is a powerful tool that brings the best routing concepts from the web to native iOS and Android apps. Every file in the app directory automatically becomes a route in your mobile navigation, making it easier than ever to build, maintain, and scale your project. This repository demonstrates how to use Expo Router to build a mobile application that supports multiple tenants or apps.

## Getting Started

To get started with this project, you'll need to have Expo CLI installed. You can install Expo CLI by running:

```sh
npm install -g expo-cli
```

Once you have Expo CLI installed, clone this repository and navigate to the project directory. Then, install the project dependencies by running:

```sh
npm install
```

To start the application, run:

```sh
expo start
```

This will start the Expo development server and open the Expo client in your web browser. You can then use the Expo client app to view the application on your mobile device.

## Project Structure

The project is structured as follows:

```
.
├── index.ts
├── package.json
├── components
├── app
│   ├── _layout.tsx
│   ├── app-one
│   │   ├── stack
│   │   │   ├── HomeScreen.tsx
│   │   │   └── ProfileScreen.tsx
│   │   ├── _layout.tsx
│   │   ├── home.tsx
│   │   ├── profile.tsx
│   │   └── index.ts
│   ├── app-two
│   │   ├── _layout.tsx
│   │   ├── home.tsx
│   │   └── profile.tsx
│   └── (auth)
│       ├── _layout.tsx
│       ├── app-one-auth.tsx
│       └── app-two-auth.tsx
├── tsconfig.json
└── README.md
```

The project consists of two apps, `app-one` and `app-two`, which share some common components and screens in the `components` directory. Each app has its own layouts and screens dictated by the file structure.

The entry point for each app is the `index.ts` file in the root directory. This file exports the `expo-router/entry` component for the project.
