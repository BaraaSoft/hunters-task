import React, {Fragment, useCallback, useEffect} from 'react';
import {Text, FlatList, ListRenderItemInfo} from 'react-native';
import {goTo, navigate} from '../../services/navigationService';
import {APP_SCREENS} from '../screens';
import {Container} from './Zone.style';
import Card, {CardProps} from '../../components/Card';
import {useDispatch, useSelector} from 'react-redux';
import {RootDispatch, RootState} from '../../store';
import {getAllZones} from '../../store/zonesSlice.slice';
import {LoadingView} from '../../components/LoadingView';

const Trip = () => {
  const dispatch = useDispatch<RootDispatch>();
  const {data, isError, loading} = useSelector(
    (state: RootState) => state.zones,
  );
  useEffect(() => {
    dispatch(getAllZones());
  }, []);

  const onCardPress = useCallback((item: any) => {
    navigate(APP_SCREENS.Stack.ZoneStack, APP_SCREENS.ZoneDetailsScreen, {
      zoneId: item.id,
      zoneName: item.name,
    });
  }, []);

  if (loading) return <LoadingView />;
  return (
    <Fragment>
      <Container>
        <FlatList<CardProps>
          refreshing={false}
          keyExtractor={item => item.id?.toString()}
          style={{paddingVertical: 16, paddingHorizontal: 24}}
          data={data}
          renderItem={({item}: ListRenderItemInfo<CardProps>) => {
            return (
              <Card
                id={item.id}
                name={item.name}
                icon={item.icon}
                suspended={item.suspended}
                status={item.status}
                onPress={onCardPress}
              />
            );
          }}
        />
      </Container>
    </Fragment>
  );
};

export default Trip;
