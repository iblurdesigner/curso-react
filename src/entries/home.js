import React from 'react';
import {render} from 'react-dom';
//import Playlist from './src/playlist/components/playlist';
import Home from '../pages/containers/home';
import data from '../api.json';

const homeContainer = document.getElementById('home-container');
// const holaMundo = <h1>hola mundo...</h1>;

render(<Home data={data}/>, homeContainer);
