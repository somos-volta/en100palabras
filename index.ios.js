/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  ScrollView,
  Text,
  View,
  Image,
} from 'react-native'

import Action from './components/action';

import styles from './styles';

class Project extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Image 
            style={styles.image}
            resizeMode='cover'
            source={{uri:'https://unsplash.it/600/400/?random'}}
          />
          <View style={styles.page}>
            <Text style={[styles.typeMono, styles.meta]}>
              PRIMER LUGAR
            </Text>
            <Text style={[styles.typeMono, styles.title]}>
              Descripción de un hombre abandonado caminando por su barrio mientras atardece
            </Text>
            <Text style={[styles.typeSans, styles.body]}>
              La hojarasca silenciosa. La tarde no silbaba pero lo parecía. Los calcetines algo húmedos. Tenía calcetines blancos. Negros. Caminaba. Transpiraba dulce. No había dulces en sus bolsillos. Dos. Uno a cada lado. Atrapado entre sus bolsillos atardecía y soles salían disparados por cesárea. Fórceps y sangramiento. Los calcetines se entintaban de rojo rh negativo. Positivo. La sangre no sale. Es infeliz. Minusválido. Inválido. Válido al final. Amor a la filosofía. Sofía se llamaba ella. Ella no lo quiere. Él tampoco se quiere. Él no duerme, camina. Ella duerme con otro y vuela. Las hojas. Sí, volvamos a las hojas secas.
            </Text>
            <Text style={[styles.typeSans, styles.author]}>
              Feisal Sukni, 24 años, Ñuñoa
            </Text>
          </View>
          <View style={styles.actions}>
            <Action label="ME GUSTA" icon="like-color" />
            <Action label="COMPARTIR" icon="share-solid"/>
            <Action label="SIGUIENTE" icon="next-solid"/>
          </View>
        </ScrollView>
      </View>
    );
  } 
}

AppRegistry.registerComponent('Project', () => Project);
