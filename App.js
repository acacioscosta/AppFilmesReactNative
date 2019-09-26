import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import Filmes from './src/Components/Filmes'
import api from './src/Services/api'

export default function App() {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.get('/movies')
       .then(res => {
         setLoading(false)
         setData(res.data)
       })
  }, [])

  if (loading) {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 30, fontWeight: 'bold', color: '#000'}}>Loading ...</Text>
      </View>
    )
  }

  return (
    <View style={Platform.OS === 'android' ? styles.containerAndroid : styles.containerIOS}>
      <View style={styles.header}>
        <Text style={styles.txtHeader}>Filmes</Text>
      </View>
      <FlatList data={data} keyExtractor={item => item.id_movie.toString()} renderItem={({item}) => <Filmes data={item} />} ></FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
  containerIOS:{
    paddingTop: 35,
    paddingBottom: 55,
    backgroundColor: '#000'
  },
  containerAndroid:{
    paddingBottom: 45,
    backgroundColor: '#000'
  },
  header:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000'
  },
  txtHeader:{
    color: '#fff',
    fontWeight: 'bold',
    padding: 10,
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }
})