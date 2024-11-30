import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

// Sample data
const categories = [
  {
    name: "Clothes & Personal",
    items: [
      "Saree",
      "Kurti",
      "Shirt",
      "Pants",
      "Suit",
      "T-Shirt",
      "Jacket",
      "Bedsheet",
      "Pillow cover",
      "Blouse",
      "Payjama",
    ],
  },
  {
    name: "Books & Documents",
    items: ["Novel", "Textbook", "Notebook"],
  },
];

const PackageContent = ({ onSelect }: any) => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  useEffect(() => {
    onSelect(selectedItems);
  }, [selectedItems]);
  const handleCategoryClick = (index: number) => {
    setSelectedCategoryIndex(index);
  };

  const handleItemClick = (item: string) => {
    setSelectedItems((prevSelected) => {
      const updatedSelected = prevSelected.includes(item)
        ? prevSelected.filter((i) => i !== item)
        : [...prevSelected, item];
      return updatedSelected;
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select Package Content</Text>
      <View style={styles.categoryContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleCategoryClick(index)}
            style={[
              styles.categoryButton,
              selectedCategoryIndex === index && styles.selectedCategory,
            ]}
          >
            <Text>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.itemsContainer}>
        {categories[selectedCategoryIndex].items.map((item) => (
          <TouchableOpacity
            key={item}
            onPress={() => handleItemClick(item)}
            style={[
              styles.item,
              selectedItems.includes(item) && styles.selectedItem,
            ]}
          >
            <Text>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  header: {
    fontSize: 14, // Customize the font size to simulate <h2>
    fontWeight: "bold",
    marginBottom: 5,
  },
  categoryContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  categoryButton: {
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 20,
    backgroundColor: "#f0f0f0",
  },
  selectedCategory: {
    backgroundColor: "#e0f7e2",
    borderColor: "#4caf50",
    borderWidth: 1,
  },
  itemsContainer: {
    flexWrap: "wrap",
    padding: 10,
    borderRadius: 12,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  item: {
    flexWrap: "wrap",
    margin: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: "#e6f6f0",
  },
  selectedItem: {
    borderColor: "#4caf50",
    borderWidth: 2,
  },
});

export default PackageContent;
