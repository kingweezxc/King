import { StyleSheet, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Collapsible } from '@/components/Collapsible';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function AboutScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#0D0D0D', dark: '#000000' }}
      headerImage={
        <MaterialCommunityIcons
          size={310}
          color="#FFD700"
          name="tshirt-crew"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.title}>About KON</ThemedText>
      </ThemedView>
      <ThemedText style={styles.description}>
        KON is a premium fashion brand redefining contemporary streetwear with a touch of luxury.
        Designed for bold individuals who push the boundaries of style and creativity.
      </ThemedText>

      <Collapsible title="Our Vision">
        <ThemedText>
          We envision a world where fashion is limitless, merging innovation with timeless designs.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Sustainability">
        <ThemedText>
          At KON, we prioritize eco-friendly materials and ethical fashion practices.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Join the Movement">
        <ThemedText>
          Be part of the KON revolution. Express yourself. Redefine the trends.
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