import { Text, View, Button } from "react-native";

export default function Product({ navigation, route }) {
   const { prodcutId, prodcutName, price } = route.params;
   return (
      <View className='bg-light flex-1'>
         <Text className=''>Product Screen</Text>
         <Button
            title='Başka bir sayfaya git'
            onPress={() => {
               navigation.push("Product", {
                  prodcutId: 1,
                  prodcutName: "Product",
                  price,
               });
            }}
         />
         <Button title='Önceki sayfaya dön' onPress={() => navigation.goBack()} />
         <Button title='Ana sayfaya git' onPress={() => navigation.popToTop()} />
         <Text className='mt-5'>ProductId:{JSON.stringify(prodcutId)}</Text>
         <Text>ProductName:{JSON.stringify(prodcutName)}</Text>
         <Text>price:{JSON.stringify(price)}</Text>
         <Button
            title='Fiyatı yükselt'
            onPress={() =>
               navigation.setParams({
                  price: price * 10,
               })
            }
         />
      </View>
   );
}
