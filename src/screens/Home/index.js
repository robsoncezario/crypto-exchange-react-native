import React, {
  useState,
  useEffect,
	useMemo
} from 'react'
import Layout from '../../components/Layout'
import CryptoService from '../../services/CryptoService/service'
import CurrencyRow from '../../components/CurrencyRow/index'
import {
  StyledFlatlist,
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
	const items = useMemo(() => {
		if(!asyncRequesting) {
			return [...[
				{
					key: 'balance-card',
					render: () => <BalanceCard />
				},
	
				{
					key: 'home-heading',
					render: () =>  
						<Heading>
							<HeadingDescription>{t('home.cryptos')}</HeadingDescription>
							<MoreButton>
								<More>{t('home.more')}</More>
							</MoreButton>
						</Heading>
				}
			],
			...currencyData.map(i => ({
				key: 'currency-home-' + i.symbol,
				render: () => (
					<CurrencyRow
						id={i.id}
						name={i.name}
						symbol={i.symbol}
						icon={i.icon}
						color={i.color}
						last24Hours={i.last24Hours}
						price={i.price}
						historicalData={i.historicalData} />
				)
			}))]
		}

		return []
	}, [asyncRequesting])

  const fetchData = () => {
    async function getCurrencyData() {
      const response = await CryptoService.getAll()
      const {list} = response.data

      setCurrencyData(list)
      setAsAsyncRequesting(false)
    }

    getCurrencyData()
  }

  useEffect(fetchData, [])


  return (
    <Layout>
			{!asyncRequesting && (
				<StyledFlatlist
					data={items} 
					keyExtractor={(item, index) => item.key}
					renderItem={({ item, index, separators }) => item.render()} />
			)}
    </Layout>
  )
}