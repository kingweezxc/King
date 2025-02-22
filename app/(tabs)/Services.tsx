import { StyleSheet, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Collapsible } from '@/components/Collapsible';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function ServicesScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#0D0D0D', dark: '#000000' }}
      headerImage={
        <MaterialCommunityIcons
          size={310}
          color="#FFD700"
          name="storefront"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.title}>Our Services</ThemedText>
      </ThemedView>
      <ThemedText style={styles.description}>
        KON offers premium fashion services, including custom designs, personal styling, and exclusive limited-edition drops.
      </ThemedText>

      <Collapsible title="Custom Designs">
        <ThemedText>
          Work with our designers to create bespoke pieces tailored to your unique style.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Personal Styling">
        <ThemedText>
          Get expert advice from our stylists to curate your perfect look.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Exclusive Drops">
        <ThemedText>
          Gain early access to our limited-edition releases before they hit the market.
        </ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    bottom: -70,
    left: -20,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    backgroundColor: '#0D0D0D',
    padding: 15,
    borderRadius: 12,
    shadowColor: '#FFD700',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
  },
  title: {
    color: '#FFD700',
    fontSize: 26,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 20,
    backgroundColor: '#0D0D0D',
    color: '#FFD700',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#FFD700',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 8,
    fontStyle: 'italic',
  },
});
