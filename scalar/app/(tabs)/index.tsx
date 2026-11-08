import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';

import { ScalarChangelogCard } from '@/components/scalar-changelog-card';
import { ScalarMetricCard } from '@/components/scalar-metric-card';
import { ScalarPlanCard } from '@/components/scalar-plan-card';
import { ScalarSectionHeading } from '@/components/scalar-section-heading';
import { ScalarSelectionChip } from '@/components/scalar-selection-chip';
import { ScalarStatusHero } from '@/components/scalar-status-hero';
import { ScalarSummaryCard } from '@/components/scalar-summary-card';
import { ThemedText } from '@/components/themed-text';
import {
  buildDeploymentPlan,
  changelog,
  environments,
  magnitudes,
  metrics,
  type EnvironmentId,
  type MagnitudeId,
} from '@/constants/scalar';
import { Colors, Fonts } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function HomeScreen() {
  const colorScheme = useColorScheme() ?? 'dark';
  const palette = Colors[colorScheme];
  const [magnitudeId, setMagnitudeId] = useState<MagnitudeId>('build');
  const [environmentId, setEnvironmentId] = useState<EnvironmentId>('bodyweight');
  const [isDeployed, setIsDeployed] = useState(false);
  const deploymentPlan = buildDeploymentPlan(magnitudeId, environmentId);

  return (
    <ScrollView
      style={[styles.screen, { backgroundColor: palette.background }]}
      contentContainerStyle={styles.content}>
      <ScalarStatusHero isDeployed={isDeployed} palette={palette} version={changelog.version} />

      <ScalarSectionHeading eyebrow="TAP 1" palette={palette} title="Select magnitude" />
      <View style={styles.stack}>
        {magnitudes.map((option) => (
          <ScalarSelectionChip
            key={option.id}
            label={option.label}
            detail={`${option.duration} · ${option.intensity}`}
            selected={magnitudeId === option.id}
            onPress={() => {
              setMagnitudeId(option.id);
              setIsDeployed(false);
            }}
            palette={palette}
          />
        ))}
      </View>
      <ScalarSummaryCard
        headline={deploymentPlan.magnitude.summary}
        palette={palette}
        supportingCopy={`Target: ${deploymentPlan.magnitude.target}`}
      />

      <ScalarSectionHeading eyebrow="TAP 2" palette={palette} title="Confirm environment" />
      <View style={styles.stack}>
        {environments.map((option) => (
          <ScalarSelectionChip
            key={option.id}
            label={option.label}
            detail={option.equipment}
            selected={environmentId === option.id}
            onPress={() => {
              setEnvironmentId(option.id);
              setIsDeployed(false);
            }}
            palette={palette}
          />
        ))}
      </View>
      <ScalarSummaryCard
        headline={deploymentPlan.environment.summary}
        palette={palette}
        supportingCopy={`Space: ${deploymentPlan.environment.space}`}
      />

      <ScalarSectionHeading eyebrow="TAP 3" palette={palette} title="Execute" />
      <Pressable
        onPress={() => setIsDeployed(true)}
        style={[styles.executeButton, { backgroundColor: palette.accent, borderColor: palette.accent }]}> 
        <ThemedText style={[styles.executeButtonText, { color: palette.background, fontFamily: Fonts.mono }]}> 
          EXECUTE {deploymentPlan.recommendedLesson.duration.toUpperCase()} SESSION
        </ThemedText>
      </Pressable>

      <ScalarPlanCard
        category={deploymentPlan.recommendedLesson.category}
        checklist={deploymentPlan.checklist}
        focus={deploymentPlan.recommendedLesson.focus}
        palette={palette}
        title={deploymentPlan.recommendedLesson.title}
      />

      <ScalarSectionHeading eyebrow="MICRO-PROGRESSION" palette={palette} title="Track invisible wins" />
      <View style={styles.stack}>
        {metrics.map((metric) => (
          <ScalarMetricCard key={metric.id} {...metric} palette={palette} />
        ))}
      </View>

      <ScalarChangelogCard
        copy="The system logs performance changes as releases instead of motivation. Review the current deployment notes and what changed in the ledger."
        palette={palette}
        title={changelog.title}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 28,
    paddingBottom: 120,
    gap: 16,
  },
  stack: {
    gap: 12,
  },
  executeButton: {
    alignItems: 'center',
    borderRadius: 18,
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  executeButtonText: {
    fontSize: 13,
    letterSpacing: 1.1,
    fontWeight: '700',
  },
});
