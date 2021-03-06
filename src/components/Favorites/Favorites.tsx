import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { grey, pink } from '@mui/material/colors';

import styles from './Favorites.module.css';

const Favorites = ({ inFav }: { inFav: boolean }) => {
  const color = inFav ? pink[500] : grey[400];
  return <FavoriteBorderIcon className={styles.icon} style={{ color }} />;
};

export default Favorites;
