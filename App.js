import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';
import { PaperProvider } from 'react-native-paper';

const Tab = createBottomTabNavigator();

// Dummy Data
const userName = 'Investor';
const holdings = [
  { ticker: 'RELIANCE', quantity: 5, price: 2800 },
  { ticker: 'TCS', quantity: 3, price: 3900 },
];

const lessons = [
  {
    id: 1,
    title: 'What is Equity?',
    language: 'en',
    content: 'Equity is ownership in a company.',
  },
  {
    id: 2,
    title: 'Stock Market Basics',
    language: 'en',
    content: 'Stocks, IPOs, Exchanges explained.',
  },
];

function HomeScreen() {
  const totalValue = holdings.reduce((sum, h) => sum + h.quantity * h.price, 0);

  return (
    <View style={styles.screen}>
      <Text style={styles.header}>Welcome, {userName}</Text>
      <Text>Total Portfolio Value: ₹{totalValue.toLocaleString()}</Text>
      <Text>Recent Alerts:</Text>
      <Text>⚠️ Fake IPO Alert: ABC Ltd</Text>
    </View>
  );
}

function LearnScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.header}>Learn</Text>
      {lessons.map((lesson) => (
        <View key={lesson.id} style={styles.card}>
          <Text style={styles.title}>{lesson.title}</Text>
          <Text>{lesson.content}</Text>
        </View>
      ))}
    </View>
  );
}

function ScreenerScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.header}>Screener</Text>
      <Text>Filter by PE, ROE, Sector (to be implemented)</Text>
    </View>
  );
}

function PortfolioScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.header}>Portfolio</Text>
      {holdings.map((stock, i) => (
        <Text key={i}>
          {stock.ticker}: {stock.quantity} shares @ ₹{stock.price}
        </Text>
      ))}
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.header}>Settings</Text>
      <Text>Language: English</Text>
      <Text>Theme: Light</Text>
    </View>
  );
}

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Learn" component={LearnScreen} />
          <Tab.Screen name="Screener" component={ScreenerScreen} />
          <Tab.Screen name="Portfolio" component={PortfolioScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, padding: 16 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 12 },
  card: { marginBottom: 12, padding: 12, borderWidth: 1, borderRadius: 8 },
  title: { fontSize: 18, fontWeight: '600' },
});
