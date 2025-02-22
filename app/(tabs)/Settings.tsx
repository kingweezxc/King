import { StyleSheet, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Collapsible } from '@/components/Collapsible';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function SettingsScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#0D0D0D', dark: '#000000' }}
      headerImage={
        <MaterialCommunityIcons
          size={310}
          color="#FFD700"
          name="cog"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.title}>Settings</ThemedText>
      </ThemedView>
      <ThemedText style={styles.description}>
        Customize your KON experience with personalized settings and preferences.
      </ThemedText>

      <Collapsible title="Account Settings">
        <ThemedText>
          Manage your account details, security, and preferences.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Notification Preferences">
        <ThemedText>
          Adjust your notification settings to stay updated on new releases and exclusive offers.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Privacy & Security">
        <ThemedText>
          Configure your privacy settings to ensure a secure and seamless experience.
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