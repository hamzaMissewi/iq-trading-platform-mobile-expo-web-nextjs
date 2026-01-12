import { useAuth } from "@/utils/auth/useAuth";
import { AuthModal } from "@/utils/auth/useAuthModal";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { ChevronRight, Shield, TrendingUp } from "lucide-react-native";
import { MotiView } from "moti";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  const router = useRouter();
  const { isAuthenticated, signIn } = useAuth();

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Section */}
        <LinearGradient colors={["#1a1a1a", "#0a0a0a"]} style={styles.hero}>
          <MotiView
            from={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "timing", duration: 1000 }}
            style={styles.heroContent}
          >
            <View style={styles.logoBadge}>
              <Text style={styles.logoText}>IQ</Text>
            </View>

            <Text style={styles.title}>
              Redefining{"\n"}
              <Text style={styles.highlight}>Mobile Trading</Text>
            </Text>

            <Text style={styles.subtitle}>
              Experience the world's most advanced trading platform in the palm
              of your hand.
            </Text>

            <TouchableOpacity
              style={styles.mainButton}
              onPress={() =>
                isAuthenticated ? router.push("/trade") : signIn()
              }
            >
              <Text style={styles.mainButtonText}>Get Started</Text>
              <ChevronRight color="white" size={20} />
            </TouchableOpacity>
          </MotiView>
        </LinearGradient>

        {/* Feature Grid */}
        <View style={styles.features}>
          <MotiView
            from={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 200 }}
            style={styles.featureCard}
          >
            <View
              style={[
                styles.iconBox,
                { backgroundColor: "rgba(255, 107, 53, 0.1)" },
              ]}
            >
              <TrendingUp color="#ff6b35" size={24} />
            </View>
            <Text style={styles.featureTitle}>Real-time Market</Text>
            <Text style={styles.featureDesc}>
              Lightning fast execution with absolute precision.
            </Text>
          </MotiView>

          <MotiView
            from={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 400 }}
            style={styles.featureCard}
          >
            <View
              style={[
                styles.iconBox,
                { backgroundColor: "rgba(0, 122, 255, 0.1)" },
              ]}
            >
              <Shield color="#007aff" size={24} />
            </View>
            <Text style={styles.featureTitle}>Secure & Regulated</Text>
            <Text style={styles.featureDesc}>
              Institutional grade security for your peace of mind.
            </Text>
          </MotiView>
        </View>

        {/* Stats Section */}
        <View style={styles.statsSection}>
          <View style={styles.statLine}>
            <Text style={styles.statValue}>173M+</Text>
            <Text style={styles.statLabel}>Traders Worldwide</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statLine}>
            <Text style={styles.statValue}>$0</Text>
            <Text style={styles.statLabel}>Minimum Deposit</Text>
          </View>
        </View>
      </ScrollView>

      <AuthModal />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0a0a",
  },
  scrollContent: {
    paddingBottom: 40,
  },
  hero: {
    paddingTop: 80,
    paddingBottom: 60,
    paddingHorizontal: 24,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  heroContent: {
    alignItems: "center",
    textAlign: "center",
  },
  logoBadge: {
    width: 60,
    height: 60,
    backgroundColor: "#ff6b35",
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
    shadowColor: "#ff6b35",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  logoText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  title: {
    fontSize: 42,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    lineHeight: 48,
    marginBottom: 16,
  },
  highlight: {
    color: "#ff6b35",
  },
  subtitle: {
    fontSize: 18,
    color: "#959697",
    textAlign: "center",
    lineHeight: 26,
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  mainButton: {
    backgroundColor: "#ff6b35",
    paddingVertical: 18,
    paddingHorizontal: 32,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    shadowColor: "#ff6b35",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 8,
  },
  mainButtonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  features: {
    flexDirection: "row",
    gap: 16,
    paddingHorizontal: 24,
    marginTop: -30,
  },
  featureCard: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    padding: 20,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.05)",
  },
  iconBox: {
    width: 48,
    height: 48,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  featureTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  featureDesc: {
    color: "#666",
    fontSize: 13,
    lineHeight: 18,
  },
  statsSection: {
    marginTop: 40,
    paddingHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#111",
    marginHorizontal: 24,
    paddingVertical: 32,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.03)",
  },
  statLine: {
    alignItems: "center",
  },
  statValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: "#555",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  statDivider: {
    width: 1,
    height: 40,
    backgroundColor: "rgba(255,255,255,0.05)",
  },
});
