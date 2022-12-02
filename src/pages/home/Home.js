import { Text, View, Button } from "react-native";

export default function Home({ navigation }) {
   return (
      <View className='bg-light flex-1'>
         <Text className=''>Home Screen</Text>
         <Button
            title='Product sayfasına git'
            onPress={() => {
               navigation.navigate("Product", {
                  prodcutId: 1,
                  prodcutName: "Product",
                  price: 10,
               });
            }}
         />
      </View>
   );
}
