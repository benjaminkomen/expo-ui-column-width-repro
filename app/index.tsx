import { Host, Column, Row, Text } from '@expo/ui';
import { View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, paddingTop: 120, backgroundColor: '#fff' }}>
      <Host matchContents={{ vertical: true }} style={{ width: '100%' }}>
        <Column style={{ width: '100%', backgroundColor: '#ff3b30', padding: 16 }}>
          <Text>Column width 100%</Text>
          <Row style={{ width: '100%', backgroundColor: '#007aff', padding: 16 }}>
            <Text>Row width 100%</Text>
          </Row>
        </Column>
      </Host>
    </View>
  );
}
