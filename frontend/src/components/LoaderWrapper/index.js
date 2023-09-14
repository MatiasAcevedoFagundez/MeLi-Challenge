import React from 'react';
import { useNavigation } from 'react-router-dom';
import loading from '../../resources/gifs/loading.gif';
import LoaderContainer from './styles/LoaderContainer';

const LoaderWrapper = ({ children }) => {
  const navigation = useNavigation();
  return (
    <LoaderContainer>
      {navigation.state === 'loading' ? (
        <>
          <img height={150} className="loading" src={loading} alt="loading" />
        </>
      ) : (
        children
      )}
    </LoaderContainer>
  );
};

export default LoaderWrapper;
