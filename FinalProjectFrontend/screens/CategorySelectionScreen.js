import {
  FlatList,
  StyleSheet,
  ActivityIndicator,
  View,
  Text,
} from "react-native";
import { Colors } from "../constants/styling.js";
import { useEffect, useState } from "react";
import { getCategoriesFromCosmos } from "../util/ApiCalls.js";
import CategoryTile from "../components/CategoryTile.js";
import HeadLine from "../components/HeadLine.js";

function CategorySelectionScreen({ route, navigation }) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getCategories() {
    const categories = await getCategoriesFromCosmos();
    setCategories(categories);
    setLoading(false);
  }

  useEffect(() => {
    getCategories();
  }, []);

  function renderCategories(category) {
    return (
      <CategoryTile
        title={category.item.id}
        onPress={() => pressHandler(category)}
      />
    );
  }

  function pressHandler(category) {
    navigation.navigate("CardSelectionScreen", {
      categoryId: category.item.id,
    });
  }

  if (loading) {
    return (
      <View style={styles.mainView}>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }

  return (
    <View style={styles.mainView}>
      <HeadLine text={"Vælg Kategori"} />
      <View style={styles.view}>
        <FlatList
          data={categories}
          renderItem={renderCategories}
          numColumns={2}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    marginTop: 25,
    alignItems: "center",
  },
  headline: {
    color: Colors.textPrimaryColor,
    fontSize: 24,
    marginBottom: 30,
    fontWeight: "bold",
  },
  view: {
    alignItems: "center",
    width: "80%",
    borderRadius: 10,
    paddingBottom: 30,

    backgroundColor: Colors.backgroundSecondaryColor,
  },
});

export default CategorySelectionScreen;
