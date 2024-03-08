import { StyleSheet, Text, View, FlatList } from 'react-native'
import Categories from '../components/Categories'
import Counter from '../components/Counter'


const Home = ({navigation}) => {

    return (
        <View>
            {/* <Counter /> */}
            <Categories navigation={navigation}/>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})