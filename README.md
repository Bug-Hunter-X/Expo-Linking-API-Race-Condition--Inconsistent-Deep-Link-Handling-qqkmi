# Expo Linking API Race Condition: Inconsistent Deep Link Handling

This repository demonstrates a bug and its solution related to a race condition in Expo's `Linking` API.  The bug causes inconsistent handling of deep links, particularly noticeable after a cold start or while background processes are active. The solution involves using `Linking.getInitialURL` and promises to ensure proper URL handling.

## Bug Description

The Expo `Linking` API, when used with `addEventListener`, can experience a race condition.  The app might attempt to access URLs before the listener is fully initialized. This leads to unpredictable behavior: some deep links might be missed, while others might be handled correctly.  The inconsistency makes debugging and resolving the issue challenging.

## Solution

The provided solution addresses this race condition by using `Linking.getInitialURL` to retrieve the initial URL immediately upon app launch. This ensures that URLs are captured even before the event listener becomes active.  Asynchronous operations are handled with promises, preventing conflicts.