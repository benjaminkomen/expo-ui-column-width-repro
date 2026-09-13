import { Host, Column } from '@expo/ui';
import { Text } from 'react-native';

export default function HomeScreen() {
  return (
    // style={{ width: '100%' }} passes a string to the Compose bridge,
    // which expects an Int — this triggers FieldCastException on Android.
    <Host>
      <Column style={{ width: '100%' }}>
        <Text>Hello from Column</Text>
      </Column>
    </Host>
  );
}
