import React, {
  useState,
  useEffect
} from 'react'
import { FlatList } from 'react-native'
import Layout from '../../components/Layout'
import CryptoService from '../../services/CryptoService/service'
import CurrencyRow from '../../components/CurrencyRow/index'
import {
  Container,
  Heading,
  HeadingDescription,
  MoreButton,
  More
} from './styles'
import BalanceCard from '../../components/BalanceCard'
import {t} from '../../i18n/index'

export default function HomeScreen() {
  const [currencyData, setCurrencyData] = useState()
  const [asyncRequesting, setAsAsyncRequesting] = useState(true)

  const fetchData = () => {
    async function getCurrencyData() {
      const response = await CryptoService.getAll()
      const {list} = response.data

      console.log(list)

      setCurrencyData(list)
      setAsAsyncRequesting(false)
    }

    getCurrencyData()
  }

  useEffect(fetchData, [])


  return (
    <Layout>
      <Container>
        <BalanceCard />

        <Heading>
          <HeadingDescription>{t('home.cryptos')}</HeadingDescription>
          <MoreButton>
            <More>{t('home.more')}</More>
          </MoreButton>
        </Heading>

        {!asyncRequesting && (
          <FlatList 
            data={currencyData} 
            keyExtractor={(item, index) => 'currency-home-' + item.symbol}
            renderItem={({ item, index, separators }) => (
              <CurrencyRow
                id={item.id}
                name={item.name}
                symbol={item.symbol}
                icon={item.icon}
                color={item.color}
                last24Hours={item.last24Hours}
                price={item.price}
                historicalData={item.historicalData} />
            )}>
            
          </FlatList>
        )}

      </Container>
    </Layout>
  )
}