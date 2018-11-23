# Example app for `Detox your GraphQL` article.

Article: // TODO link

The purpose of this React Native app is to show how to create E2E testing environment, which won't be dependent on your backend server.

We use Detox for E2E tests and Apollo GraphQL server to create a mocked server.

# Requirements

React Native setup for iOS (not Expo!):
https://facebook.github.io/react-native/docs/getting-started.html

Detox setup (Step 1):
https://github.com/wix/Detox/blob/master/docs/Introduction.GettingStarted.md

If you don't have a Macbook, then you can try running the app on Android with a standalone mocked server. Detox support for Android is still a WIP.

# How to start

Install dependencies:

`yarn`

Run the app on iOS:

`react-native run-ios`

Start the mocked server (`server/index.js`):

`node server`

Build iOS simulator for Detox tests:

`detox build`

Run Detox tests (remember to turn off the standalone server):

`detox test`

# More info

All tests and GraphQL mocks are under `e2e` directory.

Standalone mocked GraphQL server is in `server/index.js`. You can specify mocks to use there, and then run the server to play with it on your simulator.

If you want to "see" Detox tests (it runs them in headless mode by default) then open your Simulator.app when it's running (Xcode -> Open Developer Tool -> Simulator).
