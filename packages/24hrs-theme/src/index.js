import React from 'react';
import Root from './Root';

export default {
  name: '24hrs-theme',
  roots: {
    theme: Root,
  },
  // Es la información del blog guardado en una variable
  state: {
    theme: {
      // Configurar Dark Mode
      isDarkModeOn: false,
      // Configurar menu movil
      isMobileMenuOpen: false,
    },
  },
  // Metodos que modifican el estado
  actions: {
    theme: {
      // Configurando variables para prender y apagar el Dark Mode
      setDarkModeOn: ({state}) => {
        state.theme.isDarkModeOn = true;
      },
      setDarkModeOff: ({state}) => {
        state.theme.isDarkModeOn = false;
      },
      // Configuramos variables para abrir y cerrar el menu movil
      toogleMobileMenu: ({state}) => {
        state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen;
      },
      closeMobileMenu: ({state}) => {
        state.theme.isMobileMenuOpen = false;
      }
    },
  },
};
