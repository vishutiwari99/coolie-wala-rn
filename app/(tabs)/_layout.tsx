import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="create-order-screen/CreateOrderScreen"
        options={{
          headerShown: false,
          title: "Create Orders",
          //   tabBarIcon: ({ color, size }) => (
          //     <Icon name="home" size={size} color={color} />
          //   ),
        }}
      />
      <Tabs.Screen
        name="history-screen/HistoryScreen"
        options={{
          headerShown: false,
          title: "Orders",
          //   tabBarIcon: ({ color, size }) => (
          //     <Icon name="list" size={size} color={color} />
          //   ),
        }}
      />
      <Tabs.Screen
        name="profile-screen/ProfileScreen"
        options={{
          headerShown: false,
          title: "Profile",
          //   tabBarIcon: ({ color, size }) => (
          //     <Icon name="user" size={size} color={color} />
          //   ),
        }}
      />
    </Tabs>
  );
}
