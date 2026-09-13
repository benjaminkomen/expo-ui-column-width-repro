# expo-ui-column-width-repro

Minimal reproduction for: [benjaminkomen/solar-array-simulator#79](https://github.com/benjaminkomen/solar-array-simulator/issues/79)

## Bug

`@expo/ui` Compose `Column` (and other Host views) crash on Android with `FieldCastException` when given `style={{ width: "100%" }}`. The TypeScript types accept a string, but the native Android bridge expects an `Int`.

## Reproduce

1. `npm install`
2. `expo run:android`
3. Launch the app on an Android emulator
4. App crashes immediately with `FieldCastException`

## Expected

`width: "100%"` should either work (converted to `fillMaxWidth()`) or be rejected at compile time.

## Workaround

Replace `style={{ width: '100%' }}` with `style={{ width: Dimensions.get('window').width }}`.

## Recording

![crash recording](https://github.com/user-attachments/assets/21936c5e-80aa-4d11-b50d-9d719e280274)

## Environment

- Expo SDK 57
- @expo/ui ~57.0.0
- React Native 0.86.3
